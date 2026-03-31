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
