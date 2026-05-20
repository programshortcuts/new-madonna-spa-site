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

    // destroy old instance
    if (servicesSwiper) {
        servicesSwiper.destroy(true, true);
        servicesSwiper = null;
    }

    servicesSwiper = new Swiper(swiperEl, {
        loop: true,
        speed: 600,

        centeredSlides: true,

        slidesPerView: 2,

        spaceBetween: 0,

        initialSlide: 0,

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
            disableOnInteraction: true,
            pauseOnMouseEnter: true
        },
        on: {
            slideChangeTransitionEnd() {

                const activeSlide = swiperEl.querySelector('.swiper-slide-active');

                if (!activeSlide) return;

                const serviceBtn = activeSlide.querySelector('.service-title');

                if (serviceBtn) {
                    serviceBtn.focus();
                }
            }
        }
    });

    console.log("Services Swiper initialized");
}