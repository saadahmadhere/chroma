/* Dark Mode */

const themeButton = document.querySelector(".theme_button");

let darkMode = false;
if (localStorage.getItem("theme")) {
  document.body.classList.add("dark_theme");
  themeButton.innerHTML = '<i class="fas fa-sun fa-lg"></i>';
  darkMode = true;
}

themeButton.addEventListener("click", () => {
  if (darkMode) {
    document.body.classList.remove("dark_theme");
    localStorage.removeItem("theme");
    themeButton.innerHTML = '<i class="fas fa-moon fa-lg" ></i>';
    darkMode = false;
  } else {
    document.body.classList.add("dark_theme");
    localStorage.setItem("theme", "dark");
    themeButton.innerHTML = '<i class="fas fa-sun fa-lg" ></i>';

    darkMode = true;
  }
});
