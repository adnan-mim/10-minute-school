// Swiper JS
var swiper = new Swiper('.swiper-container1', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        992: {
            slidesPerView: 4,
        }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
});

var mySwiper = new Swiper('.swiper-container2', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
});

var swiper2 = new Swiper('.swiper-container3', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        576: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
        768: {
            slidesPerView: 4,
            spaceBetweenSlides: 30
        },
        992: {
            slidesPerView: 5,
        }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
});
