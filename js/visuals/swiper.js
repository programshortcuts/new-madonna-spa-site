// js/visuals/swiper.js
let reviewsSwiper = null;

export function initSwiper() {
    const swiperEl = document.querySelector('.swiper');

    if (!swiperEl) return;

    if (typeof Swiper === 'undefined') {
        console.error("Swiper not loaded");
        return;
    }

    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
    }

    reviewsSwiper = new Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        speed: 800,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });

    console.log("Swiper ready");
}