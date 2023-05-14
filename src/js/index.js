const buttonDarkMode = document.getElementById("button-dark-mode");

const body = document.querySelector("body");

const imgButtonDarkMode = document.querySelector(".img-button");

buttonDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        imgButtonDarkMode.setAttribute("src", "./src/imgs/moon.png");
    } else {
        imgButtonDarkMode.setAttribute("src", "./src/imgs/sun.png");
    }
});
