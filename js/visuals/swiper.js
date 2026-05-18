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

    // Count original slides (before Swiper duplicates them for loop mode)
    const slideCount = swiperEl.querySelectorAll('.swiper-slide').length;

    // Find the middle slide index
    const middleIndex = Math.floor(slideCount / 2);

    servicesSwiper = new Swiper(swiperEl, {
        loop: true,
        speed: 600,
        centeredSlides: true,
        initialSlide: 0,

        slidesPerView: 3,
        spaceBetween: 20,

        grabCursor: true,
        allowTouchMove: true,
        threshold: 5,

        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        slideToClickedSlide: true,

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
        },

        // Once Swiper finishes creating duplicate slides,
        // jump to the first real slide (Bioidentical Hormone Replacement)
        on: {
            init(swiper) {
                swiper.slideToLoop(0, 0, false);
            }
        }
    });

    // Required when using the init callback
    servicesSwiper.init();

    console.log(`Services Swiper initialized at slide ${middleIndex + 1} of ${slideCount}`);
}