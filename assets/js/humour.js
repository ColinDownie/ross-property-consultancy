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
   Developer Humour Engine – IT Crowd + Reynholm Blend
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

    const roll = Math.random();
    const message = roll < 0.01 ? randomItem(legendary) : randomItem(jokes);

    console.log(
        "%c" + message,
        "color:#66aaff; font-weight:bold; font-family:monospace;"
    );

    /* ----------------------------------------------------------
       ASCII Moss – rare (0.5%)
       ---------------------------------------------------------- */

    const asciiMoss = `
       (•_•)
      <)   )╯   Maurice Moss
       /   \\
    `;

    if (Math.random() < 0.005) {
        console.log("%c" + asciiMoss, "color:#33ccff; font-family:monospace;");
        unlockAchievement("Moss Sighted");
    }

    /* ----------------------------------------------------------
       Moss-Style Fake Panic Error – very rare (0.2%)
       ---------------------------------------------------------- */

    if (Math.random() < 0.002) {
        console.error("🔥 CRITICAL ERROR: The Internet has been disabled.");
        console.warn("Attempting to re-enable the Internet…");
        setTimeout(() => {
            console.log("Internet restored. Please do not tell Jen.");
            unlockAchievement("Survived a Panic Event");
        }, 1500);
    }

    /* ----------------------------------------------------------
       Boss Events – extremely rare (0.05%)
       ---------------------------------------------------------- */

    if (Math.random() < 0.0005) {
        console.log("%c⚠️ BOSS EVENT: Douglas Reynholm has taken over the console.",
            "color:#ff33aa; font-weight:bold;");
        console.log("‘BRILLIANT!’");
        unlockAchievement("Encountered Douglas");
    }

    /* ----------------------------------------------------------
       Developer Achievements System
       ---------------------------------------------------------- */

    const achievements = new Set();

    function unlockAchievement(name) {
        if (achievements.has(name)) return;
        achievements.add(name);

        const styles = [
            "color:#00ff99; font-weight:bold;",
            "color:#ffaa00; font-weight:bold;",
            "color:#ff66cc; font-weight:bold;",
            "color:#66aaff; font-weight:bold;"
        ];

        const style = styles[Math.floor(Math.random() * styles.length)];

        const messages = {
            "Console Explorer": "Achievement unlocked: Looked in the console.",
            "F12 Master": "🏆 TRIUMPH! YOU HAVE MASTERED THE SACRED F12!",
            "Moss Sighted": "Achievement unlocked: Witnessed Moss
