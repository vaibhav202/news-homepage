var btn = document.getElementById("menuToggler");
var menuClosingSpace = document.getElementById("space");
var navLinks = document.getElementById("navLinks");
var first = document.getElementById("top");
var middle = document.getElementById("middle");
var bottom = document.getElementById("bottom");
btn.addEventListener('click', menuToggler);
menuClosingSpace.addEventListener('click', menuToggler);
function menuToggler() {
    if(btn.classList.contains("sm:visible") == true) {
        //For opening the menu
        navLinks.classList.toggle("translate-x-full");
        //Changing menu icon to look a like close icon
        first.classList.toggle("-translate-y-2");
        first.classList.toggle("rotate-45");
        middle.classList.toggle("scale-x-0");
        bottom.classList.toggle("translate-y-2");
        bottom.classList.toggle("-rotate-45");
    }
    else {
        //For closing the menu
        navLinks.classList.toggle("translate-x-full");

        //Falling back to default icon
        first.classList.toggle("-translate-y-2");
        first.classList.toggle("rotate-45");
        middle.classList.toggle("scale-x-0");
        bottom.classList.toggle("translate-y-2");
        bottom.classList.toggle("-rotate-45");
    }
}