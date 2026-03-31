<script>
(function() {

  /* --------------------------------------------------
     INTERNAL STATE
  -------------------------------------------------- */
  let idle = 0;
  let lastScroll = 0;
  let scrollSpeed = 0;
  let loadingJoked = false;

  /* --------------------------------------------------
     OPTIONAL AUDIO (SAFE, NON-INTRUSIVE)
     Replace the file with your own small bleep/chime.
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
      return;
    }

    /* FOCUS MODE */
    if (scrollSpeed > 0 && scrollSpeed <= 40) {
      document.body.classList.add("focus-mode");
      document.body.classList.remove("flow-mode", "calm-mode");

      if (Math.random() < 0.05) {
        fireJoke("Focus mode: I’ve dimmed the noise. Just you and the content.");
      }
      return;
    }
  });

  /* --------------------------------------------------
     RANDOM CLICK HUMOUR
  -------------------------------------------------- */
  document.addEventListener("click", () => {
    if (Math.random() < 0.02) {
      fireJoke("Click registered: Strong choice. Confident.");
    }
  });

  /* --------------------------------------------------
     DEVELOPER-ONLY HUMOUR (CTRL + SHIFT + D)
  -------------------------------------------------- */
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
      console.log("%cDeveloper mode: You found the backchannel.", "color:#F5B544;font-weight:bold;");
      fireJoke("Developer mode: Welcome to the secret lounge.");
    }
  });

})();
</script>
