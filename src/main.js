import './style.css';

document.addEventListener('DOMContentLoaded', function() {
    const navHeader = document.getElementById("nav-header");
    const navOpenButton = document.getElementById("nav-open-btn");
    const navCloseButton = document.getElementById("nav-close-btn");
    const navMobile = document.getElementById("nav-mobile");
    const body = document.getElementById("body");
    function toggleNav(){
        navOpenButton.classList.toggle("hidden");
        navCloseButton.classList.toggle("hidden");
        navMobile.classList.toggle("hidden");
        // body.classList.toggle("overflow-hidden");
        navHeader.classList.toggle("bg-white");
        navHeader.classList.toggle("bg-white/90");
    }
    navOpenButton.addEventListener("click", toggleNav);
    navCloseButton.addEventListener("click", toggleNav);
});