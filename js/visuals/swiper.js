// js/visuals/swiper.js

let reviewsSwiper = null;

export function initSwiper() {
    const swiperEl = document.querySelector('.swiper');
    const mainItem = swiperEl ? swiperEl.closest('.main-item') : null;

    console.log('Swiper element:', swiperEl);
    console.log('Main item:', mainItem);

    // If this page doesn't contain a swiper, exit.
    if (!swiperEl) {
        console.log('Swiper not found');
        return;
    }

    // Destroy any previous Swiper instance before creating a new one.
    // This is important in your SPA because home.html is injected repeatedly.
    if (reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
    }

    // Wait until the Swiper library has loaded.
    if (typeof Swiper === 'undefined') {
        console.error('Swiper library is not loaded');
        return;
    }

    // Create the swiper instance.
    reviewsSwiper = new Swiper(swiperEl, {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        spaceBetween: 1,
        speed: 1000,

        simulateTouch: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });

    // Add debug event listeners
    reviewsSwiper.on('touchStart', () => console.log('Swiper touch start'));
    reviewsSwiper.on('touchMove', () => console.log('Swiper touch move'));
    reviewsSwiper.on('touchEnd', () => console.log('Swiper touch end'));
    reviewsSwiper.on('slideChange', () => console.log('Swiper slide changed'));

    let isPaused = false;

    // Attach click handler to pause/resume autoplay on the parent main-item.
    // if (mainItem) {
    //     mainItem.addEventListener('click', () => {
    //         console.log('Click on main item to toggle autoplay');

    //         if (!reviewsSwiper?.autoplay) return;

    //         if (isPaused) {
    //             reviewsSwiper.autoplay.start();
    //         } else {
    //             reviewsSwiper.autoplay.stop();
    //         }

    //         isPaused = !isPaused;
    //     });
    // }

    // Force Swiper to recalculate dimensions after dynamic injection.
    reviewsSwiper.update();

    console.log('Swiper initialized successfully');
}