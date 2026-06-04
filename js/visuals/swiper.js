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
        touchStartPreventDefault: false,
        touchMoveStopPropagation: false,
        touchReleaseOnEdges: true,
        touchAngle: 20,

        // IMPORTANT: makes swipe feel natural and reduces accidental page-scroll capture
        threshold: 10,

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

    // destroy old instance
    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
    }

    servicesSwiper = new Swiper(swiperEl, {
        loop: true,
        speed: 300,
        centeredSlides: true,
        slidesPerView: 'auto',

        allowTouchMove: true,
        touchStartPreventDefault: false,

        passiveListeners: true,

        threshold: 10,
        touchAngle: 20,

        slideToClickedSlide: true,

        keyboard: {
            enabled: true
        },

        autoplay: {
            delay: 3333,
            disableOnInteraction: true
        }
    });

    // console.log("Services Swiper initialized");
}