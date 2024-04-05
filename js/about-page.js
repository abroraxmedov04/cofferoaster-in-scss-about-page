document.addEventListener("click", (e) => {
  if (!e.target.matches(".header__menu-btn")) return;
  e.target.classList.toggle("change-icon");
  let navbar = e.target.nextElementSibling;
  document.body.classList.toggle("unscroll");
  navbar.classList.toggle("hide");
});
  