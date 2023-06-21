let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');

}
////
let counter = 0;
function cart() {
    counter++;
    document.querySelector(".count").innerHTML = counter;
}
/******scroll********/
let span = document.querySelector(".up");
window.onscroll = function () {
    console.log(this.scrollY)
    if (this.scrollY >= 1000) {
        span.classList.add("show");
    }
    else {
        span.classList.remove("show");

    }
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",

    });
};