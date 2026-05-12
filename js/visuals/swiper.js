// js/visuals/swiper.js
let reviewsSwiper = null;
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

}
export function initServicesSwiper() {
    const swiperEl = document.querySelector('.services-swiper');

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
        // loop: true,
        // speed: 700,

        grabCursor: true,
        allowTouchMove: true,

        // IMPORTANT: makes swipe feel natural
        threshold: 5,

        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // }
    });

    console.log("Swiper initialized");
}