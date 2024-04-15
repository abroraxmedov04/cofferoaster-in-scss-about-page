document.addEventListener("click", (e) => {
  if (!e.target.matches(".header__menu-btn")) return;
  e.target.classList.toggle("change-icon");
  let navbar = e.target.nextElementSibling;
  document.body.classList.toggle("unscroll");
  navbar.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".inputfield__btn-toggler")) {
    e.preventDefault();
    const toggleBtn = e.target;
    const blockBody = toggleBtn
      .closest(".inputfield__block")
      .querySelector(".toggler");
    blockBody.classList.toggle("show");
    toggleBtn.classList.toggle("changeImg");
    if (toggleBtn.classList.contains("changeImg")) {
      toggleBtn.style.backgroundImage =
        'url("../assets/images/arrow-down.png")';
    } else {
      toggleBtn.style.backgroundImage =
        'url("../assets/images/arrow-top-icon.png")';
    }
  }
});

let inputs = document.querySelectorAll(".input__radius");
let inputvalues = [];

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    let option = e.target.closest(".inputfield__option");
    if (option) {
      option.style.backgroundColor = "#0e8784";
      option.style.color = "#ffff";
    }
    const value = e.target.value;
    if (!inputvalues.includes(value)) {
      inputvalues.push(value);
      console.log(inputvalues);
    }
    inputs.forEach((inp) => {
      if (inp !== input) {
        let otherOption = inp.closest(".inputfield__option");
        if (otherOption) {
          otherOption.style.backgroundColor = "";
          otherOption.style.color = "#333d4b";
        }
      }
    });
  });
});



