// JavaScript For Sticky Header

window.addEventListener("scroll", function(){
    const header = document.querySelector(".navbar-wrapper");
    header.classList.toggle("sticky", window.scrollY > 100)

})


// JavaScript for Navbar

const body_overlay = document.getElementById("body-overlay");
const nav_menu = document.getElementById("nav_menu");
const bar_icon = document.getElementById("bar_icon");
const cross_icon = document.getElementById("cross_icon");

bar_icon.addEventListener("click", ()=>{
    body_overlay.classList.add("active")
    nav_menu.classList.add("active")
})

cross_icon.addEventListener("click", ()=>{
    body_overlay.classList.remove("active")
    nav_menu.classList.remove("active")
})

// JavaScript For Features Slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1200:{
            items:3
        }
    },
    navText: [
        '<img src="./assets/images/chevron-left-icon.svg">',
        '<img src="./assets/images/chevron-right-icon.svg">',
      ],
})