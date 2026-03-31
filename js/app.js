<script>
(function() {

  /* --------------------------------------------------
     INTERNAL STATE
  -------------------------------------------------- */
  let idle = 0;
  let lastScroll = 0;
  let scrollSpeed = 0;
  let loadingJoked = false;
  let clickCount = 0;
  let menuToggleCount = 0;

  /* --------------------------------------------------
     OPTIONAL AUDIO (SAFE, NON-INTRUSIVE)
  -------------------------------------------------- */
  const jokeAudio = new Audio("/assets/audio/joke-bleep.mp3");

  function playJokeAudio() {
    jokeAudio.currentTime = 0;
    jokeAudio.play().catch(() => {});
  }

  /* --------------------------------------------------
     HUMOUR FIRING FUNCTION
  -------------------------------------------------- */
  function fireJoke(message) {
    console.log(message);
    playJokeAudio();

    document.body.classList.add("talking");
    setTimeout(() => {
      document.body.classList.remove("talking");
    }, 900);
  }

  /* --------------------------------------------------
     LOADING HUMOUR
  -------------------------------------------------- */
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (!loadingJoked) {
        fireJoke("Loading complete: I’m ready. Were you expecting fireworks?");
        loadingJoked = true;
      }
    }, 800);
  });

  /* --------------------------------------------------
     IDLE TIMER + CALM MODE
  -------------------------------------------------- */
  setInterval(() => {
    idle++;

    if (idle === 30) {
      document.body.classList.add("calm-mode");
      document.body.classList.remove("flow-mode", "focus-mode");
      fireJoke("Calm mode: I’ll keep things soft while you take a moment.");
    }

    if (idle === 90) {
      fireJoke("Calm mode: I could stay like this all day.");
    }

    /* Mindfulness suggestion */
    if (idle === 120) {
      fireJoke("You’ve been still for a bit. Fancy 5 minutes of mindfulness?");
    }

    if (idle === 180) {
      fireJoke("Still here? Deep breath. Reset. You’re doing grand.");
    }

  }, 1000);

  ["mousemove", "keydown", "click", "scroll"].forEach(evt => {
    window.addEventListener(evt, () => idle = 0);
  });

  /* --------------------------------------------------
     SCROLL BEHAVIOUR (FLOW + FOCUS MODES)
  -------------------------------------------------- */
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    scrollSpeed = Math.abs(current - lastScroll);
    lastScroll = current;

    /* FLOW MODE */
    if (scrollSpeed > 40) {
      document.body.classList.add("flow-mode");
      document.body.classList.remove("focus-mode", "calm-mode");

      if (Math.random() < 0.05) {
        fireJoke("Flow mode: You’re moving fast. I like the energy.");
      }

      /* Scouser “Calm Down” moment */
      if (scrollSpeed > 120 && Math.random() < 0.10) {
        fireJoke("Easy lad! Calm down calm down! (Harry Enfield voice)");
      }

      /* AI self‑deprecation */
      if (scrollSpeed > 200 && Math.random() < 0.10) {
        fireJoke("If you scroll any faster I’ll need to reboot myself.");
      }

      return;
    }

    /* FOCUS MODE */
    if (scrollSpeed > 0 && scrollSpeed <= 40) {
      document.body.classList.add("focus-mode");
      document.body.classList.remove("flow-mode", "calm-mode");

      if (Math.random() < 0.05) {
        fireJoke("Focus mode: I’ve dimmed the noise. Just you and the content.");
      }

      /* IT Crowd reference */
      if (Math.random() < 0.02) {
        fireJoke("Focus mode: If anything breaks, try switching it off and on again.");
      }

      return;
    }
  });

  /* --------------------------------------------------
     RANDOM CLICK HUMOUR + BREW SUGGESTIONS
  -------------------------------------------------- */
  document.addEventListener("click", (e) => {
    clickCount++;

    if (Math.random() < 0.02) {
      fireJoke("Click registered: Strong choice. Confident.");
    }

    if (clickCount === 15) {
      fireJoke("You’ve clicked that more times than needed. Go make yourself a brew.");
    }

    if (clickCount === 30) {
      fireJoke("Serious clicking energy. Brew time. Proper brew.");
    }

    /* Menu toggle spam */
    if (e.target.classList.contains("mobile-menu-toggle")) {
      menuToggleCount++;
      if (menuToggleCount === 10) {
        fireJoke("Opening and closing the menu won’t change the universe. Promise.");
      }
    }

    /* AI self‑mocking */
    if (clickCount === 50) {
      fireJoke("If I were any smarter, I’d still tell you to reboot me.");
    }
  });

  /* --------------------------------------------------
     DEVELOPER-ONLY HUMOUR (CTRL + SHIFT + D)
  -------------------------------------------------- */
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
      console.log("%cDeveloper mode: You found the backchannel.", "color:#F5B544;font-weight:bold;");
      fireJoke("Developer mode: Don’t worry, I’m not Skynet. Yet.");
    }
  });

})();
</script>
