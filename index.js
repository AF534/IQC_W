const mobile_nav = document.querySelector(".mobile-menus");
const nav_header = document.querySelector(".headers");

const toggleNav = () =>{
    nav_header.classList.toggle("active")
};

mobile_nav.addEventListener("click",()=> toggleNav());