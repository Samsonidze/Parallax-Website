const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) =>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach(el =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    })
})

const main = document.querySelector("main");

function adjustMainHeight() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Ensure main's height fits within the viewport
    if (windowHeight >= 725) {
        main.style.maxHeight = `${Math.min(windowWidth * 0.9, windowHeight)}px`;
    } else {
        main.style.maxHeight = `${Math.min(windowWidth * 1.9, windowHeight)}px`;
    }

    // Ensure no white space by setting explicit height
    document.body.style.height = `${windowHeight}px`;
    document.documentElement.style.height = `${windowHeight}px`;
}

// Call on load and resize
adjustMainHeight();
window.addEventListener("resize", adjustMainHeight);
