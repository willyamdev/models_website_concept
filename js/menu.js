let menuButton = document.querySelector("#menuButton");
let menuContainer = document.querySelector(".menuContainer");
let menuShadowContainer = document.querySelector(".menuShadowContainer");

menuContainer.style.left = "-300px";

menuButton.addEventListener("click", (e) => {

    let left = menuContainer.style.left;

    if (left == "-300px") {
        menuContainer.style.left = "0px";
        menuShadowContainer.classList.remove("d-none");
        document.body.style.overflow = "hidden";
    } else {
        menuContainer.style.left = "-300px";
        menuShadowContainer.classList.add("d-none");
        document.body.style.overflow = "auto";
    }

});

menuShadowContainer.addEventListener("click", (e) => {
    menuContainer.style.left = "-300px";
    menuShadowContainer.classList.add("d-none");
    document.body.style.overflow = "auto";
});


