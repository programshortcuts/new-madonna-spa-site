// js/visuals/swiper.js
let reviewsSwiper = null;
let servicesSwiper = null;

export function initReviewsSwiper() {
    const swiperEl = document.querySelector('.reviews-swiper');

    if (!swiperEl) return;

    if (typeof Swiper === 'undefined') {
        console.error("Swiper is not loaded (check script tag)");
        return;
    }

    // destroy old instance safely
    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
    }

    reviewsSwiper = new Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        speed: 700,

        grabCursor: true,
        allowTouchMove: true,

        // IMPORTANT: makes swipe feel natural
        threshold: 5,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });

    console.log("Swiper initialized");
}
export function initServicesSwiper() {
    const swiperEl = document.querySelector('.services-swiper');

    if (!swiperEl) return;

    if (typeof Swiper === 'undefined') {
        console.error("Swiper is not loaded");
        return;
    }

    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
    }

    servicesSwiper = new Swiper(swiperEl, {

        loop: true,
        speed: 600,

        // MAIN FEATURE
        centeredSlides: true,

        // show neighboring slides
        slidesPerView: 3,

        spaceBetween: 20,

        // drag/swipe
        grabCursor: true,
        allowTouchMove: true,
        threshold: 5,

        // keyboard support
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        // makes active slide become focused
        slideToClickedSlide: true,

        // responsive
        breakpoints: {
            0: {
                slidesPerView: 1.2
            },

            768: {
                slidesPerView: 3
            }
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: true
        }
    });

    console.log("Services Swiper initialized");
}