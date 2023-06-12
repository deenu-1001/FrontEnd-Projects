// var menu = document.getElementById("menu-items");
// menu.style.maxHeight = "0px"
// function menutoggle() {
//     if (menu.style.maxHeight == "0px") {
//         menu.style.maxHeight = "200px";
//     }
//     else {
//         menu.style.maxHeight = "0px";
//     }
// }
var productimg = document.getElementById("productimg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function () {
    productimg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    productimg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    productimg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    productimg.src = smallimg[3].src;
}


// login form

var loginform = document.getElementById("LoginForm");
var regform = document.getElementById("RegForm");
var Indicator = document.getElementById("indicator");

function register(){
    regform.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login(){
    regform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}
