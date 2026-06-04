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

        spaceBetween: 0,

        initialSlide: 0,

        grabCursor: true,
        allowTouchMove: true,
        touchStartPreventDefault: false,
        touchMoveStopPropagation: false,
        touchReleaseOnEdges: true,
        touchAngle: 20,
        threshold: 10,
        centeredSlidesBounds: true,

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
            init() {
                const swiper = this;
                swiper.el.addEventListener('focusin', (event) => {
                    if (swiper.destroyed) return;

                    const slideEl = event.target.closest('.swiper-slide');
                    if (!slideEl) return;

                    const targetIndex = Array.prototype.indexOf.call(swiper.slides, slideEl);
                    if (targetIndex < 0) return;

                    swiper.slideTo(targetIndex, 0, false);
                }, true);
            },
            slideChangeTransitionEnd() {
                const activeSlide = swiperEl.querySelector('.swiper-slide-active');

                if (!activeSlide) return;

                const serviceBtn = activeSlide.querySelector('.service-title');
                if (serviceBtn && servicesSwiper.autoplay.paused == true) {
                    serviceBtn.focus();
                }
            }
        }
    });

    // console.log("Services Swiper initialized");
}