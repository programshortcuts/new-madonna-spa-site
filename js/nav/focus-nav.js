// focus-nav.js
export function focusNav({e,target}){
    const slide = target.el.closest('.swiper-slide');

    if (e.target.classList.contains('service-title-col-link')){
        console.log('stop')
        return
        
    }
    
    if (slide) {
        const swiperEl = slide.closest('.swiper');
        const swiper = swiperEl?.swiper;

        if (swiper) {
            const targetIndex = swiper.slides.indexOf(slide);
            if (targetIndex === -1) return;

            // move first
            swiper.slideTo(targetIndex, 300);
            swiper.update();

            // then focus AFTER layout settles
            setTimeout(() => {
                target.el.focus({ preventScroll: true });
            }, 350);

            return;
        }
    }
}