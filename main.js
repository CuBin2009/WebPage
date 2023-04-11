window.addEventListener("scroll", () => {
  let scroll = document.querySelector("#topBtn");
  scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
