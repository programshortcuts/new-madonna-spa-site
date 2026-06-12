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

                if (e.target === lastElClicked) {
                    setTimeout(() => {

                        const activeSlide = document.querySelector(
                            '.services-swiper .swiper-slide-active'
                        );
                        activeSlide?.focus();

                    }, 250);
                }
            }

            lastElClicked = e.target;
        }

        letterNav({ container, e });

    });
    document.addEventListener('focusout', (e) => {
        lastElClicked = null
    })
}