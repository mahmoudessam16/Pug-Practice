let iconOpen = document.querySelector('.icon');
let iconClose = document.querySelector(".toggle-mobile i");

iconOpen.onclick = function () {
    document.querySelector(".toggle-mobile").style.display = "block";
}

iconClose.onclick = function () {
    document.querySelector(".toggle-mobile").style.display = "none";
}

console.log(document.querySelector(".toggle-mobile"))