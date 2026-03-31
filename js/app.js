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
     PERSONALITY SETTINGS
     Default: Glasgow
     Options: glasgow, scouse, manc, yorkshire, london
  -------------------------------------------------- */
  let region = "glasgow";

  /* Modes */
  let chaosMode = false;
  let deadpanMode = false;
  let sassMax = true; // Always on by your request

  /* --------------------------------------------------
     OPTIONAL AUDIO (SAFE, NON-INTRUSIVE)
  -------------------------------------------------- */
  const jokeAudio = new Audio("/assets/audio/joke-bleep.mp3");

  function playJokeAudio() {
    jokeAudio.currentTime = 0;
    jokeAudio.play().catch(() => {});
  }

  /* --------------------------------------------------
     HUMOUR PACKS
  -------------------------------------------------- */
  const humour = {
    glasgow: {
      calm: [
        "Calm yersel’, pal. Nae rush.",
        "Take a wee minute. Ah’ll no’ judge.",
        "Deep breath. Yer doin’ fine."
      ],
      flow: [
        "Yer scrollin’ like yer late for the last train.",
        "Slow it doon, big yin.",
        "Yer flyin’ through this like a Glaswegian at chucking‑out time."
      ],
      sass: [
        "Aye alright, calm yersel’. Ah’m workin’ on it.",
        "Dinnae get cheeky, I’m only pretendin’ tae be clever.",
        "If ah were any smarter, ah’d still tell ye tae reboot me."
      ],
      brew: [
        "Go make yersel’ a wee brew. Proper one.",
        "Time for a cuppa, pal.",
        "Brew break. Doctor’s orders."
      ],
      tech: [
        "If anything breaks, try switchin’ it aff and oan again.",
        "Classic IT fix: reboot it.",
        "Ah’m no’ sayin’ ah’m glitchin’, but… reboot me anyway."
      ],
      deadpan: [
        "Yes. Fascinating.",
        "Thrilling stuff.",
        "I’m overwhelmed. Truly."
      ],
      chaos: [
        "WOOOAH calm doon ya maniac!",
        "Yer scrollin’ like the polis are behind ye!",
        "This is chaos. I love it."
      ]
    },

    /* Other regions trimmed for brevity — they remain as in previous version */
    scouse: { calm:["Calm down calm down!"], flow:["Yer scrollin’ like yer late for the ferry!"], sass:["Don’t get lippy lad."], brew:["Go make yerself a brew, la."], tech:["Turn it off and on again, kidda."], deadpan:["Yeah. Great."], chaos:["Lad what are you DOIN’?!"] },
    manc: { calm:["Chill out, mate."], flow:["Ey up, steady on."], sass:["Don’t get clever, sunshine."], brew:["Fancy a brew, love?"], tech:["Turn it off and on again, our kid."], deadpan:["Buzzin’."], chaos:["Mate. MATE. Stop."] },
    yorkshire: { calm:["Calm tha’self."], flow:["Steady on, lad."], sass:["Don’t get giddy."], brew:["Make a brew."], tech:["Turn it off and on again."], deadpan:["Right."], chaos:["By ‘eck lad!"] },
    london: { calm:["Take a breather yeah?"], flow:["Oi slow down."], sass:["Don’t get cheeky."], brew:["Go make a cuppa."], tech:["Turn it off and on again, innit."], deadpan:["Lovely."], chaos:["Bruv chill!"] }
  };

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function say(type) {
    const pack = humour[region];
    if (!pack || !pack[type]) return;

    if (deadpanMode && pack.deadpan) {
      fireJoke(pick(pack.deadpan));
      return;
    }

    if (chaosMode && pack.chaos) {
      fireJoke(pick(pack.chaos));
      return;
    }

    fireJoke(pick(pack[type]));
  }

  /* --------------------------------------------------
     TIME-OF-DAY HUMOUR
  -------------------------------------------------- */
  function timeOfDayLine() {
    const hour = new Date().getHours();

    if (hour < 6) return "Yer up early. Or late. No judgement.";
    if (hour < 12) return "Mornin’. Brew first, productivity later.";
    if (hour < 17) return "Afternoon. Peak faffing‑about hours.";
    return "Evenin’. Perfect time for questionable decisions.";
  }

  /* --------------------------------------------------
     DAY-OF-WEEK PERSONALITY SHIFTS
  -------------------------------------------------- */
  function dayOfWeekShift() {
    const day = new Date().getDay();

    switch(day) {
      case 1: return "Monday mode: Let’s pretend we’re motivated.";
      case 2: return "Tuesday: The forgotten middle child of days.";
      case 3: return "Wednesday: Halfway tae freedom.";
      case 4: return "Thursday: Practically Friday.";
      case 5: return "Friday: Chaos Mode unlocked.";
      case 6: return "Saturday: Maximum faff authorised.";
      case 0: return "Sunday: Reflect. Reset. Brew.";
    }
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
        fireJoke(timeOfDayLine());
        fireJoke(dayOfWeekShift());
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
      say("calm");
    }

    if (idle === 90) say("calm");

    if (idle === 120) fireJoke("Fancy 5 minutes of mindfulness?");
    if (idle === 180) fireJoke("Still here? Deep breath. Reset.");

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

    if (scrollSpeed > 40) {
      document.body.classList.add("flow-mode");
      document.body.classList.remove("focus-mode", "calm-mode");

      if (Math.random() < 0.05) say("flow");
      if (scrollSpeed > 200 && Math.random() < 0.10) say("sass");

      return;
    }

    if (scrollSpeed > 0 && scrollSpeed <= 40) {
      document.body.classList.add("focus-mode");
      document.body.classList.remove("flow-mode", "calm-mode");

      if (Math.random() < 0.05) say("tech");
      return;
    }
  });

  /* --------------------------------------------------
     CLICK HUMOUR + BREW SUGGESTIONS
  -------------------------------------------------- */
  document.addEventListener("click", (e) => {
    clickCount++;

    if (Math.random() < 0.02) say("sass");

    if (clickCount === 15) say("brew");
    if (clickCount === 30) say("brew");

    if (e.target.classList.contains("mobile-menu-toggle")) {
      menuToggleCount++;
      if (menuToggleCount === 10) say("sass");
    }

    if (clickCount === 50) say("sass");
  });

  /* --------------------------------------------------
     DEVELOPER-ONLY HUMOUR (CTRL + SHIFT + D)
  -------------------------------------------------- */
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") {
      fireJoke("Developer mode: Aye, welcome tae the backroom.");
    }
  });

})();
</script>
