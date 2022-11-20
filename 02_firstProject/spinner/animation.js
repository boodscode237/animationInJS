const spinneJS = document.querySelector(".spinnerJS");
console.log("Box")
spinneJS.animate(
    {
            transform: "rotate(359deg)"
    },
    {
        duration: 1000,
        iterations: Infinity,
        // easing: "cubic-bezier(0.7, 0, 0.84, 0)",
        // direction: "alternate",
        fill: "forwards",
    });

