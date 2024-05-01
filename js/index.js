const navToggle =  document.querySelector(".nav1-toggle")
const navMenu = document.querySelector(".nav1-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav1-menu_visible");
});

// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});