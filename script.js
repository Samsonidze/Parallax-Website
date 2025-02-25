const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

function updateParallax() {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    updateParallax();
});

function triggerCenterParallax() {
    xValue = 0; 
    yValue = 0; 
    updateParallax();
}

const main = document.querySelector("main");

function adjustMainHeight() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    if (windowHeight >= 725) {
        main.style.maxHeight = `${Math.min(windowWidth * 1.9, windowHeight)}px`;
    } else {
        main.style.maxHeight = `${Math.min(windowWidth * 1.9, windowHeight)}px`;
    }

    document.body.style.height = `${windowHeight}px`;
    document.documentElement.style.height = `${windowHeight}px`;
}

adjustMainHeight();
triggerCenterParallax();

window.addEventListener("resize", () => {
    adjustMainHeight();
    triggerCenterParallax(); 
});
