// letter-nav.js

import { letterNav } from "./letter-nav.js";
import { servicesSwiper } from "../visuals/swiper.js";
export function initKeydboardNav({ container = document } = {}) {
    let lastElClicked = null;

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Enter') {

            const index = Number(e.target.dataset.slide);

            if (!Number.isNaN(index)) {

                servicesSwiper.slideToLoop(index);

                setTimeout(() => {

                    const activeSlide = document.querySelector(
                        '.services-swiper .swiper-slide-active'
                    );

                    activeSlide?.focus();

                }, 350);
            }

            lastElClicked = e.target;
        }

        letterNav({ container, e });

    });
}