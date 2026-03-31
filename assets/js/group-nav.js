document.addEventListener("DOMContentLoaded", () => {
    const nav = document.createElement("nav");
    nav.className = "group-nav";
    nav.innerHTML = `
        <a href="https://yourusername.github.io/ross-consultancy-group/">Group</a>
        <a href="https://yourusername.github.io/ross-property-consultancy/">Property</a>
        <a href="https://yourusername.github.io/rmc-ross-management-consultancy/">Management</a>
        <a href="https://yourusername.github.io/rcc-ross-creative-consultancy/">Creative</a>
        <a href="https://yourusername.github.io/rsc-ross-strategy-consultancy/">Strategy</a>
    `;
    document.body.prepend(nav);
});
