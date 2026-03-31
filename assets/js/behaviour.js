/* ----------------------------------------------------------
   Ross Consultancy Universe – EI Behaviour Layer
   Detects pauses, returns, and offers gentle support cues
   ---------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    let lastInteraction = Date.now();

    // Track user activity
    ["scroll", "mousemove", "keydown"].forEach(event => {
        window.addEventListener(event, () => {
            lastInteraction = Date.now();
        });
    });

    // EI prompts
    const prompts = document.querySelectorAll("[data-behaviour='pause-support']");

    setInterval(() => {
        const now = Date.now();
        const idleTime = now - lastInteraction;

        // If user pauses for 12 seconds
        if (idleTime > 12000) {
            prompts.forEach(p => {
                p.style.opacity = "1";
                p.style.transition = "opacity 1s ease";
            });
        }
    }, 3000);
});
