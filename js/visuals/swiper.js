// js/visuals/swiper.js
let reviewsSwiper = null;
let servicesSwiper = null;

export function initReviewsSwiper() {
    const el = document.querySelector('.reviews-swiper');
    if (!el || typeof Swiper === 'undefined') return;

    if (reviewsSwiper) reviewsSwiper.destroy(true, true);

    reviewsSwiper = new Swiper(el, {
        slidesPerView: 1,
        loop: true,
        speed: 700,

        grabCursor: true,
        allowTouchMove: true,

        threshold: 10,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });
}

export function initServicesSwiper() {
    const el = document.querySelector('.services-swiper');
    if (!el || typeof Swiper === 'undefined') return;

    if (servicesSwiper) servicesSwiper.destroy(true, true);

    servicesSwiper = new Swiper(el, {
        loop: true,
        speed: 300,

        centeredSlides: true,
        slidesPerView: 'auto',

        spaceBetween: 0,

        grabCursor: true,
        allowTouchMove: true,

        threshold: 10,
        touchAngle: 25,

        loopedSlides: el.querySelectorAll('.swiper-slide').length,

        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        autoplay: {
            delay: 3333,
            disableOnInteraction: true
        }
    });

    // Center slide vertically in viewport when it receives focus
    el.addEventListener('focusin', (e) => {
        const slide = e.target.closest('.swiper-slide');
        if (!slide) return;
        slide.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });

    return servicesSwiper; // ✅ CRITICAL ADDITION
}

// FILE: js/visuals/swiper.js

export function initServiceNavController(swiperInstance) {
    const buttons = document.querySelectorAll('.service-col-title');
    if (!buttons.length) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = Number(btn.dataset.slide);
            if (Number.isNaN(index)) return;

            // IMPORTANT:
            // Use loop-safe method when available
            if (swiperInstance.slideToLoop) {
                swiperInstance.slideToLoop(index);
            } else {
                swiperInstance.slideTo(index);
            }

            // 🚫 DO NOT:
            // - focus()
            // - scrollIntoView()
            // - activeElement manipulation
        });
        btn.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase()
            if(key == 'enter'){
                const index = Number(btn.dataset.slide);
                if (Number.isNaN(index)) return;

                // IMPORTANT:
                // Use loop-safe method when available
                if (swiperInstance.slideToLoop) {
                    swiperInstance.slideToLoop(index);
                } else {
                    swiperInstance.slideTo(index);
                }

                // 🚫 DO NOT:
                // - focus()
                // - scrollIntoView()
                // - activeElement manipulation
            }
        });
    });
}