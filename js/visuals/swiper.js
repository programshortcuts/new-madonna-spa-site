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
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,

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
                slidesPerView: 1.2,
                centeredSlides: false
            },
            768: {
                slidesPerView: 3,
                centeredSlides: false
            }
        },

        // Start autoplay immediately
        autoplay: {
            delay: 3333,
            disableOnInteraction: true // stop after swipe/touch
        },

        on: {
            init(swiper) {
                // Start on the first real slide
                swiper.slideToLoop(0, 0, false);
                swiper.autoplay.start();
            }
        }
    });

    // --------------------------------------------------
    // STOP AUTOPLAY ON ANY USER INTERACTION
    // --------------------------------------------------
    const stopAutoplayAndFocus = () => {
        if (!servicesSwiper) return;

        // Move keyboard focus to the swiper container
        swiperEl.focus();

        // Stop autoplay permanently
        if (servicesSwiper.autoplay?.running) {
            servicesSwiper.autoplay.stop();
        }
    };

    // Mouse click
    swiperEl.addEventListener('click', stopAutoplayAndFocus);

    // Keyboard focus (tabbing into the swiper)
    swiperEl.addEventListener('focus', stopAutoplayAndFocus);

    // Touch interaction (mobile)
    swiperEl.addEventListener('touchstart', stopAutoplayAndFocus, {
        passive: true
    });

    // Pointer interaction (covers mouse, touch, pen)
    swiperEl.addEventListener('pointerdown', stopAutoplayAndFocus);

    // Swiper drag interaction
    servicesSwiper.on('touchStart', stopAutoplayAndFocus);

    console.log("Services Swiper initialized");
}