// Menu Button Functioning
let menuIcon = document.querySelector(".menuIcon");
let chengeIcon = document.querySelector(".chengeIcon");
let mobileMenu = document.querySelector(".mobileMenu");

menuIcon.addEventListener("click", () =>{
chengeIcon.classList.toggle("fa-bars");
chengeIcon.classList.toggle("rotationAnime");
chengeIcon.classList.toggle("fa-times");
 if(mobileMenu.style.display != "block"){
    mobileMenu.style.display = "block"
 }else{
    mobileMenu.style.display = "none"
 }
});
// Menu Button Functioning End

// Swiper JS Slider inisializition for Client area 

  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });