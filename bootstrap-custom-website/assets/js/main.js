// On Scroll Function
function navMenu() {
  let navBar = document.querySelector('.navbar-sticky');

  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      navBar.classList.add('navbar-sticky-moved-up');
    } else {
      navBar.classList.remove('navbar-sticky-moved-up');
    }

    //apply Transition
    if (scroll >= 250) {
      navBar.classList.add('navbar-sticky-transitioned');
    } else {
      navBar.classList.remove('navbar-sticky-transitioned');
    }

    //sticky on
    if (scroll >= 500) {
      navBar.classList.add('navbar-sticky-on');
    } else {
      navBar.classList.remove('navbar-sticky-on');
    }
  }
}
navMenu();

//Counters
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increament = target / 250;
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increament)}`;
      setTimeout(updateCounter, 5);
    } else {
      counter.innerText = target;
    }
  }
  updateCounter();
});

//slider testimonials
var swiper = new Swiper('.swiper-container', {
  pagination: '.swiper-pagination',
  effect: 'coverflow',
  loop: true,
  autoplaySpeed: 3000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 1000,
    disableOnInteration: false,

  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  paginationClickable: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false
  }
});

//Side Navigation Bar Close While We Click On Naviagation Links
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove('show');
  })
});