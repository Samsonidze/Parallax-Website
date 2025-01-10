const magicBtnContainer = document.querySelector(".button-container");

magicBtnContainer.addEventListener("click", () => {
  magicBtnContainer.classList.add("hidden");

  setTimeout(() => {
    magicBtnContainer.style.display = "none";
  }, 500);
});
