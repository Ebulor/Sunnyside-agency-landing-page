const toggleMenu = document.querySelector(".toggle-menu");
const mobileMenu = document.querySelector(".navbar");

toggleMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("openNav");    
})