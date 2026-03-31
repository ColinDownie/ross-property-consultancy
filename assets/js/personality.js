/* ----------------------------------------------------------
   Ross Consultancy Universe – Personality Layer
   Subtle behaviours, micro-animations, page identity cues
   ---------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    // Blueprint line animation
    document.querySelectorAll("[data-animation='blueprint-lines']").forEach(el => {
        el.style.transition = "all 1.5s ease";
        el.style.opacity = "0.6";
    });

    // Survey laser animation
    document.querySelectorAll("[data-animation='survey-laser']").forEach(el => {
        el.style.background = "linear-gradient(90deg, #ff3366, #ff99aa)";
        el.style.opacity = "0.5";
    });
});
