function changeStyle() {
  changeClasses();
  changeText();
}

function changeClasses() {
  body.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  ligthMode = "Ligth Mode";
  darkMode = "Dark Mode";
  
  if (button.classList.contains(darkModeClass)) {
    button.innerHTML = ligthMode;
    h1.innerHTML = darkMode + " ON";
  } else {
    button.innerHTML = darkMode;
    h1.innerHTML = ligthMode + " ON";
  }
}

const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
const darkModeClass = "dark-mode";

button.addEventListener("click", changeStyle);