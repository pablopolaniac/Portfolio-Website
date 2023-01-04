const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");
const submenus = document.querySelectorAll(".submenu-trigger")





function onHamburgerClick() {
    if (!navbar.classList.contains('open')) {
        navbar.classList.add("open")

    } else {
        navbar.classList.remove("open");
    }
}

hamburgerToggle.addEventListener("click", onHamburgerClick)
submenus.forEach(sub => {
    sub.addEventListener("click", () => {
        sub.classList.toggle("open")
    })
});



