// const parallax_el = document.querySelectorAll(".parallax");

// let xValue = 0, yValue = 0;

// window.addEventListener("mousemove", (e) =>{
//     xValue = e.clientX - window.innerWidth / 2;
//     yValue = e.clientY - window.innerHeight / 2;

//     parallax_el.forEach(el =>{
//         let speedx = el.dataset.speedx;
//         let speedy = el.dataset.speedy;
//         el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
//         translateY(calc(-50% + ${yValue * speedy}px))`;
//     })
// })

// const main = document.querySelector("main");

// function adjustMainHeight() {
//     const windowHeight = window.innerHeight;
//     const windowWidth = window.innerWidth;

//     if (windowHeight >= 725) {
//         main.style.maxHeight = `${Math.min(windowWidth * 1.9, windowHeight)}px`;
//     } else {
//         main.style.maxHeight = `${Math.min(windowWidth * 1.9, windowHeight)}px`;
//     }

//     document.body.style.height = `${windowHeight}px`;
//     document.documentElement.style.height = `${windowHeight}px`;
// }

// adjustMainHeight();
// window.addEventListener("resize", adjustMainHeight);





const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, yValue = 0;

// Function to update the parallax elements' transform
function updateParallax() {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) 
        translateY(calc(-50% + ${yValue * speedy}px))`;
    });
}

// Trigger parallax animation on mousemove
window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    updateParallax();
});

// Automatically trigger parallax as if the mouse is in the center
function triggerCenterParallax() {
    xValue = 0; // Center of the window
    yValue = 0; // Center of the window
    updateParallax();
}

// Adjust main height
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

// Initialize the animations
adjustMainHeight();
triggerCenterParallax();

// Update on resize
window.addEventListener("resize", () => {
    adjustMainHeight();
    triggerCenterParallax(); // Reapply the animation after resize
});
