const box = document.querySelector(".box");
console.log("Box")
box.animate([{ transform: "translate(500px, 200px)" }, { transform: "scale(3)" }],
    {
        duration: 2000,
        delay: 50,
        iterations: Infinity,
        easing: "cubic-bezier(0.7, 0, 0.84, 0)",
        direction: "alternate",
        fill: "forwards",
    });

