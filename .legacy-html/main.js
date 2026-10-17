/* ==========================================================================
   LAPRRK — cinematic story controller

   The hero film is a 24-second loop split into three equal chapters.
   The active copy panel, the chapter segments and the play/pause control are
   all driven by the video's real currentTime, never by an independent timer.
   ========================================================================== */

const CHAPTERS = 3;
const FALLBACK_DURATION = 24; // used until media metadata is known
const CHAPTER_EPSILON = 1e-6; // guards float drift on exact chapter boundaries
const SEEK_TOLERANCE = 0.05; // release window after a programmatic seek

const video = document.getElementById("stageVideo");
const panels = Array.from(document.querySelectorAll("[data-panel]"));
const chapterLinks = Array.from(document.querySelectorAll("[data-chapter-link]"));
const chapterButtons = Array.from(document.querySelectorAll("[data-chapter-btn]"));
const playBtn = document.getElementById("playBtn");
const icPause = playBtn.querySelector(".ic-pause");
const icPlay = playBtn.querySelector(".ic-play");
const menu = document.getElementById("mobile-menu");
const hamburger = document.getElementById("hamburger");
const overlay = document.querySelector(".stage-overlay");
const storyControls = document.getElementById("storyControls");
const logo = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");
const navCta = document.querySelector(".nav-cta");

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const desktopQuery = window.matchMedia("(min-width: 769px)");

const state = {
  chapter: 0,
  manualPause: false,
  menuOpen: false,
  motionOptIn: false, // a deliberate Play press opts into motion
  mediaFailed: false,
  autoplayBlocked: false,
  pendingPlay: false,
  pendingChapter: null,
  pausedByVisibility: false,
  pausedByMenu: false,
  previousBodyOverflow: "",
};

let seekLock = null; // { chapter, boundary } held until the seek settles

/* --------------------------------------------------------------------------
   Timing helpers
   -------------------------------------------------------------------------- */

function mediaReady() {
  return video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0;
}

function mediaDuration() {
  return mediaReady() ? video.duration : FALLBACK_DURATION;
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

/* --------------------------------------------------------------------------
   Chapter + progress UI
   -------------------------------------------------------------------------- */

function updateProgressUI(progressOverride) {
  const progress =
    progressOverride == null ? clamp01(video.currentTime / mediaDuration()) : clamp01(progressOverride);

  chapterButtons.forEach((button, index) => {
    const fill = button.querySelector(".fill");
    if (!fill) return;
    const value = clamp01(progress * CHAPTERS - index);
    fill.style.transform = `scaleX(${value})`;
  });
}

function replayPanelEntrance(panel) {
  if (reducedMotionActive()) return;
  const items = panel.querySelectorAll("[data-reveal]");
  items.forEach((el) => {
    el.style.animation = "none";
  });
  void panel.offsetHeight; // force reflow so the animation restarts
  items.forEach((el) => {
    el.style.animation = "";
  });
}

function setChapter(index, options) {
  const restartEntry = !options || options.restartEntry !== false;
  const next = Math.max(0, Math.min(CHAPTERS - 1, index));
  const changed = next !== state.chapter || !panels[next].classList.contains("is-active");
  state.chapter = next;

  /* If focus sits in a panel that is about to become inert, move it to the
     playback control without scrolling the page. */
  const active = document.activeElement;
  if (active && active !== document.body && active !== document.documentElement) {
    const owner = panels.find((panel) => panel.contains(active));
    if (owner && owner !== panels[next]) {
      playBtn.focus({ preventScroll: true });
    }
  }

  panels.forEach((panel, i) => {
    const isActive = i === next;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", String(!isActive));
    if (isActive) panel.removeAttribute("inert");
    else panel.setAttribute("inert", "");
  });

  chapterLinks.forEach((link) => {
    const isPrimary = link.dataset.primary === "true";
    const isCurrent = isPrimary && Number(link.dataset.chapterLink) === next;
    if (isCurrent) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });

  chapterButtons.forEach((button) => {
    const isCurrent = Number(button.dataset.chapterBtn) === next;
    if (isCurrent) button.setAttribute("aria-current", "step");
    else button.removeAttribute("aria-current");
  });

  if (restartEntry && changed) replayPanelEntrance(panels[next]);
}

function syncChapterFromTime() {
  const duration = mediaDuration();
  const time = video.currentTime;
  const progress = clamp01(time / duration);
  let chapter = Math.min(CHAPTERS - 1, Math.floor(progress * CHAPTERS + CHAPTER_EPSILON));

  /* A programmatic seek can land a frame either side of a boundary.
     Hold the requested chapter until the playhead clearly settles. */
  if (seekLock) {
    const boundary = seekLock.boundary;
    if (time >= boundary + SEEK_TOLERANCE || time < boundary - 0.15) {
      seekLock = null;
    } else {
      chapter = seekLock.chapter;
    }
  }

  setChapter(chapter);
  updateProgressUI(progress);
}

function selectChapter(index) {
  const target = Math.max(0, Math.min(CHAPTERS - 1, index));
  setChapter(target);

  if (state.mediaFailed || !mediaReady()) {
    state.pendingChapter = target;
    updateProgressUI(target / CHAPTERS);
    return;
  }

  const duration = mediaDuration();
  const boundary = (duration * target) / CHAPTERS;
  seekLock = { chapter: target, boundary };
  try {
    video.currentTime = boundary;
  } catch (error) {
    seekLock = null;
  }
  updateProgressUI();
}

/* --------------------------------------------------------------------------
   Playback
   -------------------------------------------------------------------------- */

function reducedMotionActive() {
  return reducedMotionQuery.matches && !state.motionOptIn;
}

function motionAllowed() {
  return !reducedMotionActive();
}

function updatePlayButton() {
  const paused = video.paused;
  icPause.hidden = paused;
  icPlay.hidden = !paused;

  if (state.mediaFailed) {
    playBtn.disabled = true;
    playBtn.setAttribute("aria-label", "Cinematic video unavailable");
    playBtn.title = "Cinematic video unavailable";
    return;
  }

  playBtn.disabled = false;
  const label = paused ? "Play cinematic story" : "Pause cinematic story";
  playBtn.setAttribute("aria-label", label);
  playBtn.title = label;
}

let gestureRetryArmed = false;

function armGestureRetry() {
  if (gestureRetryArmed) return;
  gestureRetryArmed = true;

  const retry = () => {
    document.removeEventListener("pointerdown", retry);
    document.removeEventListener("keydown", retry);
    gestureRetryArmed = false;
    if (!state.autoplayBlocked) return;
    state.autoplayBlocked = false;
    tryPlay();
  };

  document.addEventListener("pointerdown", retry);
  document.addEventListener("keydown", retry);
}

function tryPlay() {
  if (state.mediaFailed || state.manualPause || !motionAllowed()) return;
  if (state.pendingPlay || !video.paused) return;

  state.pendingPlay = true;
  const attempt = video.play();

  if (attempt && typeof attempt.then === "function") {
    attempt
      .then(() => {
        state.autoplayBlocked = false;
      })
      .catch((error) => {
        /* pause() interrupting play() is not a policy block. */
        if (error && error.name === "AbortError") return;
        if (!video.paused) return;
        /* Autoplay policy blocked us: keep the poster and wait for a gesture
           unless the visitor explicitly paused. */
        state.autoplayBlocked = true;
        armGestureRetry();
      })
      .finally(() => {
        state.pendingPlay = false;
        updatePlayButton();
      });
  } else {
    state.pendingPlay = false;
    updatePlayButton();
  }
}

function applyMotionPreference() {
  const reduced = reducedMotionActive();
  document.documentElement.classList.toggle("no-motion", reduced);
  if (!reduced) return;

  /* Reduced motion: hold the opening still and the first chapter. */
  seekLock = null;
  if (!video.paused) video.pause();
  try {
    video.currentTime = 0;
  } catch (error) {
    /* ignore */
  }
  setChapter(0, { restartEntry: false });
  updateProgressUI(0);
}

/* --------------------------------------------------------------------------
   Media failure
   -------------------------------------------------------------------------- */

function handleMediaFailure() {
  if (state.mediaFailed) return;
  state.mediaFailed = true;
  state.pendingChapter = null;
  state.pendingPlay = false;
  try {
    video.pause();
  } catch (error) {
    /* ignore */
  }
  /* The poster stays in place, so the stage keeps its opening frame and the
     copy chapters remain navigable by hand. */
  updatePlayButton();
}

function inspectMediaError() {
  const error = video.error;
  if (error) {
    if (
      error.code === MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED ||
      error.code === MediaError.MEDIA_ERR_DECODE ||
      error.code === MediaError.MEDIA_ERR_NETWORK
    ) {
      handleMediaFailure();
    }
    return;
  }
  if (video.networkState === video.NETWORK_NO_SOURCE) handleMediaFailure();
}

/* --------------------------------------------------------------------------
   Mobile menu
   -------------------------------------------------------------------------- */

function setBackgroundInert(isInert) {
  [overlay, logo, storyControls, navLinks, navCta].forEach((element) => {
    if (!element) return;
    if (isInert) element.setAttribute("inert", "");
    else element.removeAttribute("inert");
  });
}

function openMenu() {
  if (state.menuOpen) return;
  state.menuOpen = true;
  state.pausedByMenu = !video.paused;
  if (state.pausedByMenu) video.pause();

  menu.classList.add("is-open");
  menu.removeAttribute("inert");
  menu.setAttribute("aria-hidden", "false");

  hamburger.classList.add("is-open");
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.setAttribute("aria-label", "Close menu");

  setBackgroundInert(true);

  state.previousBodyOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  const firstControl = menu.querySelector("a[href], button:not([disabled])");
  if (firstControl) firstControl.focus({ preventScroll: true });
}

function closeMenu() {
  if (!state.menuOpen) return;
  state.menuOpen = false;

  hamburger.focus({ preventScroll: true });

  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  menu.setAttribute("inert", "");

  hamburger.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");

  setBackgroundInert(false);
  document.body.style.overflow = state.previousBodyOverflow || "";

  /* Resume only when nothing else says stay paused. */
  if (state.pausedByMenu && !state.manualPause && motionAllowed()) {
    state.pausedByMenu = false;
    tryPlay();
  } else {
    state.pausedByMenu = false;
  }
  updatePlayButton();
}

function onMenuKeydown(event) {
  if (!state.menuOpen) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeMenu();
    return;
  }

  if (event.key !== "Tab") return;

  const focusables = [hamburger, ...menu.querySelectorAll("a[href], button:not([disabled])")].filter(
    (element) => element.getClientRects().length > 0,
  );
  if (!focusables.length) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  const inside = focusables.indexOf(active) !== -1;

  if (event.shiftKey) {
    if (!inside || active === first) {
      event.preventDefault();
      last.focus();
    }
  } else if (!inside || active === last) {
    event.preventDefault();
    first.focus();
  }
}

/* --------------------------------------------------------------------------
   Wiring
   -------------------------------------------------------------------------- */

chapterLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // never scroll the stage
    const index = Number(link.dataset.chapterLink) || 0;
    const wasMenuOpen = state.menuOpen;
    if (wasMenuOpen) closeMenu();
    selectChapter(index);
  });
});

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectChapter(Number(button.dataset.chapterBtn) || 0);
  });
});

playBtn.addEventListener("click", () => {
  if (state.mediaFailed) return;

  if (video.paused) {
    state.manualPause = false;
    state.autoplayBlocked = false;
    if (reducedMotionActive()) {
      state.motionOptIn = true;
      document.documentElement.classList.remove("no-motion");
    }
    tryPlay();
  } else {
    state.manualPause = true;
    video.pause();
  }
  updatePlayButton();
});

if (hamburger) {
  hamburger.addEventListener("click", () => {
    if (state.menuOpen) closeMenu();
    else openMenu();
  });
}

video.addEventListener("loadedmetadata", () => {
  const pending = state.pendingChapter;
  state.pendingChapter = null;
  if (pending != null) selectChapter(pending);
  else syncChapterFromTime();
});

video.addEventListener("timeupdate", syncChapterFromTime);
video.addEventListener("seeked", syncChapterFromTime);
video.addEventListener("play", () => {
  state.pendingPlay = false;
  updatePlayButton();
});
video.addEventListener("playing", () => {
  state.pendingPlay = false;
});
video.addEventListener("pause", () => {
  state.pendingPlay = false;
  updatePlayButton();
});
video.addEventListener("error", inspectMediaError);
video.addEventListener("ended", () => {
  seekLock = null;
  try {
    video.currentTime = 0;
  } catch (error) {
    /* ignore */
  }
  setChapter(0);
  updateProgressUI(0);
});

document.addEventListener("keydown", onMenuKeydown);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    state.pausedByVisibility = !video.paused;
    if (state.pausedByVisibility) video.pause();
  } else if (state.pausedByVisibility) {
    state.pausedByVisibility = false;
    tryPlay();
  }
});

window.addEventListener("pagehide", () => {
  state.pausedByVisibility = !video.paused;
  if (state.pausedByVisibility) video.pause();
});

window.addEventListener("pageshow", () => {
  if (!state.pausedByVisibility) return;
  state.pausedByVisibility = false;
  tryPlay();
});

const onDesktopChange = (event) => {
  if (event.matches && state.menuOpen) closeMenu();
};

const onReducedMotionChange = () => {
  state.motionOptIn = false; // reset the deliberate opt-in
  applyMotionPreference();
  if (!reducedMotionActive()) tryPlay();
  updatePlayButton();
};

if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", onDesktopChange);
else desktopQuery.addListener(onDesktopChange);

if (reducedMotionQuery.addEventListener) reducedMotionQuery.addEventListener("change", onReducedMotionChange);
else reducedMotionQuery.addListener(onReducedMotionChange);

/* --------------------------------------------------------------------------
   Init
   -------------------------------------------------------------------------- */

video.muted = true;
video.defaultMuted = true;
video.loop = true;
video.playsInline = true;

inspectMediaError();
applyMotionPreference();
setChapter(0, { restartEntry: false });
updateProgressUI(0);
updatePlayButton();

if (!state.mediaFailed && motionAllowed()) tryPlay();

/* Catch a source failure that happened before the listeners were attached. */
window.setTimeout(inspectMediaError, 3000);
