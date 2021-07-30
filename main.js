// Menu Button Functioning
let menuIcon = document.querySelector(".menuIcon");
let chengeIcon = document.querySelector(".chengeIcon");
let mobileMenu = document.querySelector(".mobileMenu");

menuIcon.addEventListener("click", () => {
  chengeIcon.classList.toggle("fa-bars");
  chengeIcon.classList.toggle("rotationAnime");
  chengeIcon.classList.toggle("fa-times");
  if (mobileMenu.style.display != "block") {
    mobileMenu.style.display = "block"
  } else {
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
      slidesPerView: 5,
      spaceBetween: 120
    }
  }
});

// Counter Up Plugin in Client counting area
$('.counter').counterUp({
  time: 1000
});

// Tab About Section Start
let tabButton = document.querySelectorAll(".tabButton");

tabButton.forEach(function (value, index, array) {
  value.addEventListener('click', () => {
    value.classList.add("activeTab");

    // For targeting all buttons except active button 
    Array.prototype.except = function (val) {
      return this.filter(function (x) { return x !== val; });
    };
    let notActiveTab = Array.from(array).except(value);

    // Remove activeTab class from other buttons
    notActiveTab.forEach(function (val) {
      val.classList.remove("activeTab");
    });

    // Chenging contents by button 
    let tabHeading = document.querySelector(".tabHeading");
    let tabSubHeading = document.querySelector(".tabSubHeading");
    let tabPoints = document.querySelectorAll(".tabPoint");
    let tabDescription = document.querySelector(".tabDescription");
    let tabImage = document.querySelector(".tabImage");


    if (value.id === "Marketing") {
      tabHeading.innerHTML = "We Provide Business & Marketing Solutions";
      tabSubHeading.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text.";

      tabPoints.forEach(function (tabValue, tabIndex, tabArray) {
        tabArray[0].innerHTML = `<i class="fas fa-hand-point-right"></i> Content Strategy`
        tabArray[1].innerHTML = `<i class="fas fa-hand-point-right"></i> Media Marketing`
        tabArray[2].innerHTML = `<i class="fas fa-hand-point-right"></i> Customer Support`
      });

      tabDescription.innerHTML = "At its most basic level, marketing seeks to match a company's products and services to customers who want access to those products. Matching products to customers ultimately ensures profitability";

      tabImage.src = "assets/img/tab/tab2.png";

    }else if(value.id === "Technology"){
      tabHeading.innerHTML = "We Provide WebSite & Technology Solutions";
      tabSubHeading.innerHTML = "Technology & Business Technology. We provide much more than just technical installations and support.he branch of knowledge dealing with engineering or applied sciences.";

      tabPoints.forEach(function (tabValue, tabIndex, tabArray) {
        tabArray[0].innerHTML = `<i class="fas fa-hand-point-right"></i> High Performance`
        tabArray[1].innerHTML = `<i class="fas fa-hand-point-right"></i> Network Protection`
        tabArray[2].innerHTML = `<i class="fas fa-hand-point-right"></i> DDoS Protection`
      });

      tabDescription.innerHTML = "The best definition of technology is the study and transformation of techniques, tools, and machines created by humans. Technology allows humans to study and evolve the physical elements that are present in their lives";

      tabImage.src = "assets/img/tab/tab3.png";
    }else if(value.id === "Simple"){
      tabHeading.innerHTML = "To Make Your Claim Contact Us On Given Social Platforms.";
      tabSubHeading.innerHTML = "Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies. Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s.";

      tabPoints.forEach(function (tabValue, tabIndex, tabArray) {
        tabArray[0].innerHTML = `<i class="fas fa-hand-point-right"></i> Customer Support`
        tabArray[1].innerHTML = `<i class="fas fa-hand-point-right"></i> Great Team`
        tabArray[2].innerHTML = `<i class="fas fa-hand-point-right"></i> Exelent Work`
      });

      tabDescription.innerHTML = "Customer support is a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product. The primary job of a customer service representative is to address customer issues and resolve them in a timely and efficient manner.";

      tabImage.src = "assets/img/tab/tab4.png";
    }else{
      tabHeading.innerHTML = "Bringing New WEB Business Solutions And Ideas";
      tabSubHeading.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

      tabPoints.forEach(function (tabValue, tabIndex, tabArray) {
        tabArray[0].innerHTML = `<i class="fas fa-hand-point-right"></i> Engaging Group Discussion`
        tabArray[1].innerHTML = `<i class="fas fa-hand-point-right"></i> Software Engineering`
      });

      tabDescription.innerHTML = "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

      tabImage.src = "assets/img/tab/tab1.png";
    }
 
  });
});
// Tab About Section End


// MixitUp Plugin for filter portfolio section 
var containerEl = document.querySelector('.filter_items');

var mixer = mixitup(containerEl, {
  selectors: {
      target: '.mix'
  },
  animation: {
      duration: 300
  }
});

// Magnifig PopUp Plugin for filter portfolio images zoom efect
$(document).ready(function() {
  $('.filter_items').magnificPopup({
    delegate: 'a.filter_image',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});


// Swiper JS Slider inisializition for Testimonial Section 
new Swiper('.testimonial_slider', {
  speed: 400,
  loop: true,
  autoplay:true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});


// Accordion inisializition for FAQ section 
$(document).ready(function() {
  $('.faq_accordion [data-accordion]').accordion();
});

  // Chenging the arrow icon to Plus icon of accordion 
  let accordion_button = document.querySelectorAll(".accordion_button");
    let accordion_item = document.querySelectorAll(".accordion_item");

    accordion_button.forEach( function(index){
        index.addEventListener('click', clickFun)
    });

    function clickFun(e) {
        var className =  this.childNodes[1].classList;
        if (className[1] == "fa-angle-down") {
            className.replace('fa-angle-down' , 'fa-times');
        } else{
            className.replace('fa-times' , 'fa-angle-down');
        }
       accordion_item.forEach(function (acValue,acIndex,acArray) {
            if(acArray[acIndex].classList.length == 2){
            acValue.childNodes[1].childNodes[1].classList.replace('fa-times' , 'fa-angle-down')
            }
        });  
    }


  
  
