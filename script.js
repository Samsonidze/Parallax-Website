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

    if (windowHeight >= 725) {
        main.style.maxHeight = `${Math.min(windowWidth * 0.6, windowHeight)}px`;
    } else {
        main.style.maxHeight = `${Math.min(windowWidth * 1.6, windowHeight)}px`;
    }
}

// Call on load and resize
adjustMainHeight();
window.addEventListener("resize", adjustMainHeight);
