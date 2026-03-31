/* ----------------------------------------------------------
   Ross Consultancy Universe – Humour Layer
   Light, behaviour-based humour (never intrusive)
   ---------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const humourBlocks = document.querySelectorAll("[data-humour]");

    humourBlocks.forEach(block => {
        const type = block.getAttribute("data-humour");

        if (type === "light") {
            block.style.opacity = "0.85";
        }
    });
});

/* ----------------------------------------------------------
   Developer Humour Engine – IT Crowd Edition
   Console-only. Hidden from users. Pure chaos for developers.
   ---------------------------------------------------------- */

(function() {

    const jokes = [
        "Have you tried turning it off and on again?",
        "Hello, IT. Have you tried committing again?",
        "System status: 🔥 FIRE. Just kidding. Probably.",
        "You broke it.\n...\nNo wait, false alarm.",
        "[Moss] Commit received. I’ll just put this with the others.",
        "A developer has done something. Brace yourselves.",
        "Your offering has been added to the big folder of things.",
        "You have summoned the Elders of Version Control.",
        "Warning: The internet is full. Please delete something.",
        "This is fine. Everything is fine. The system is definitely not on fire.",
        "Error: Keyboard not found. Press F1 to continue.",
        "Your commit has been accepted. The machine spirits are pleased.",
        "New offering detected. The system grows stronger.",
        "If this breaks, it was like that when you got here.",
        "Compiling… still compiling… still… compiling…"
    ];

    // Rare legendary jokes (1% chance)
    const legendary = [
        "Moss has entered the chat.",
        "Jen has unplugged the internet again.",
        "Roy is under the desk. Do not disturb.",
        "You are now the Relationship Manager for the Internet.",
        "The Elders of IT have spoken: 'It’s a user error.'",
        "You’ve triggered the Reynholm Emergency Protocol. Good luck."
    ];

    function randomItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // 1% chance of legendary joke
    const roll = Math.random();
    const message = roll < 0.01 ? randomItem(legendary) : randomItem(jokes);

    console.log(
        "%c" + message,
        "color:#66aaff; font-weight:bold; font-family:monospace;"
    );

    /* ----------------------------------------------------------
       ASCII Moss – appears rarely (0.5% chance)
       ---------------------------------------------------------- */

    const asciiMoss = `
       (•_•)
      <)   )╯   Maurice Moss
       /   \\
    `;

    if (Math.random() < 0.005) {
        console.log("%c" + asciiMoss, "color:#33ccff; font-family:monospace;");
    }

    /* ----------------------------------------------------------
       Moss-Style Fake Panic Error – very rare (0.2% chance)
       ---------------------------------------------------------- */

    if (Math.random() < 0.002) {
        console.error("🔥 CRITICAL ERROR: The Internet has been disabled.");
        console.warn("Attempting to re-enable the Internet…");
        setTimeout(() => {
            console.log("Internet restored. Please do not tell Jen.");
        }, 1500);
    }

})();

/* ----------------------------------------------------------
   Konami Code – Unlock Developer Mode: Moss Edition
   ---------------------------------------------------------- */

(function() {
    const konami = [38,38,40,40,37,39,37,39,66,65];
    let index
