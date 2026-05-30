// page-lifecycle.js
import { initReviewsSwiper, initServicesSwiper } from "../visuals/swiper.js";
import { initDropDown } from "../ui/drop-down.js";
import { initBgSlider } from "../visuals/change-background.js";

export function onPageReady() {
    requestAnimationFrame(() => {

        // ONLY global UI systems here
        initDropDown();
        initBgSlider();

        initReviewsSwiper();
        initServicesSwiper();
    });
}