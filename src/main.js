
console.log((5)**)


let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");
let link4 = document.getElementById("link4");
let overColor = document.getElementById("over");
let title = document.getElementById("title");
link1 && link1.addEventListener("mouseenter", function (e) {
    overColor && overColor.classList.add("color1");
});
link2 && link2.addEventListener("mouseenter", function (e) {
    overColor && overColor.classList.add("color2");
});
link3 && link3.addEventListener("mouseenter", function (e) {
    overColor && overColor.classList.add("color3");
});
link4 && link4.addEventListener("mouseenter", function (e) {
    overColor && overColor.classList.add("color4");
});
link1 && link1.addEventListener("mouseleave", function (e) {
    overColor && overColor.classList.remove("color1");
});
link2 && link2.addEventListener("mouseleave", function (e) {
    overColor && overColor.classList.remove("color2");
});
link3 && link3.addEventListener("mouseleave", function (e) {
    overColor && overColor.classList.remove("color3");
});
link4 && link4.addEventListener("mouseleave", function (e) {
    overColor && overColor.classList.remove("color4");
});
title && title.addEventListener("mouseenter", function (e) {
    title && title.classList.add("animate__rubberBand");
});
let check = 0;
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp") {
        scroll(window.scrollX, window.scrollY - 300);
    }
    else if (event.key == "ArrowDown") {
        scroll(window.scrollX, window.scrollY + 300);
    }
    else if (event.key == "o" && check == 0) {
        check++;
    }
    else if (event.key == "u" && check == 1) {
        check++;
    }
    else if (event.key == "s" && (check == 2 || check == 3)) {
        check++;
    }
    else if (event.key == "a" && check == 4) {
        check++;
    }
    else if (event.key == "m" && check == 5) {
        check++;
    }
    else if (event.key == "a" && check == 6) {
        privatePlace();
    }
    else {
        check = 0;
    }
});
function privatePlace() {
    window.location.href = "./private.html";
}
document.addEventListener("scroll", function (e) {
    if (window.scrollY >= y) {
        h2.classList.add("animate__animated", "animate__fadeInLeft", "show");
    }
});
window.onload = function () {
    window.scrollTo(0, 0);
};
const height = window.screen.height;
let h2 = document.getElementById("h2-1");
let rect = h2 && h2.getBoundingClientRect();
let x = rect && rect.left + window.scrollX;
let y = rect && rect.top + window.scrollY - height / 2;
console.log(x, y);
// window.onkeydown = function(e){
//     console.log(55)
//     e.preventDefault()
//     scroll(window.scrollX, window.scrollY + 300)
// }
// window.onkeyup = function(e){
//     console.log(4);
// }
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
