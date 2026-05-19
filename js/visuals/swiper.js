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

    // Destroy previous instance
    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
    }

    servicesSwiper = new Swiper(swiperEl, {
        loop: true,
        speed: 600,

        /* THIS centers the active slide horizontally */
        centeredSlides: true,

        /* Allow CSS width to control slide size */
        slidesPerView: '2',

        spaceBetween: 20,
        initialSlide: 2,

        grabCursor: true,
        allowTouchMove: true,
        threshold: 5,

        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        slideToClickedSlide: true,

        autoplay: {
            delay: 3333,
            disableOnInteraction: true
        },

        on: {
            init(swiper) {
                swiper.slideToLoop(0, 0, false);
                swiper.autoplay.start();
            }
        }
    });

    console.log("Services Swiper initialized");
}
