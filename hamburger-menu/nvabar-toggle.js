const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null; 
    menu.style.opacity = 0; 
  } else {
    menu.style.maxHeight = menu.scrollHeight + 'px'; 
    menu.style.opacity = 1; 
  }
});
