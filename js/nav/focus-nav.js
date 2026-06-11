// focus-nav.js
export function focusNav({ e, target }) {
    const el = target.el;

    // CASE 1: clicking service link (outside swiper)
    if (el.classList.contains('service-title-col-link')) {
        const href = el.getAttribute('href');
        if (!href) return;

        const id = href.replace('#', '');
        const slide = document.getElementById(id);

        const swiperEl = slide?.closest('.swiper');
        const swiper = swiperEl?.swiper;

        if (!swiper || !slide) return;

        const index = swiper.slides.indexOf(slide);
        if (index === -1) return;

        swiper.slideTo(index, 300);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                slide.focus({ preventScroll: true });
            });
        });

        return;
    }

    // CASE 2: normal swiper item navigation
    const slide = el.closest('.swiper-slide');

    if (slide) {
        const swiperEl = slide.closest('.swiper');
        const swiper = swiperEl?.swiper;

        if (!swiper) return;

        const index = swiper.slides.indexOf(slide);
        if (index === -1) return;

        swiper.slideTo(index, 300);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.focus({ preventScroll: true });
            });
        });

        return;
    }

    // CASE 3: fallback outside swiper
    el.focus({ preventScroll: true });
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
    });
}