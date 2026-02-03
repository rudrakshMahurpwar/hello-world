const searchBarContainerE1 = document.querySelector(".search-bar-container");

const magniferE1 = document.querySelector(".magnifier");

magniferE1.addEventListener("click", () => {
  searchBarContainerE1.classList.toggle("active");
});
