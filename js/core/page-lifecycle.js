import { initSwiper } from "../visuals/swiper.js";
import { initDropDown } from "../ui/drop-down.js";
import { initBgSlider } from "../visuals/change-background.js";
import { initFilterSortItems } from "../ui/filter-sort-items.js";
import { initItemsScroll } from "../ui/items-scroll.js";

export function onPageReady() {
    console.log("PAGE READY → initializing features");

    // IMPORTANT: run after DOM injection is complete
    requestAnimationFrame(() => {

        initFilterSortItems();
        initItemsScroll();
        initDropDown();
        initBgSlider();

        // Swiper must run AFTER DOM exists
        initSwiper();
    });
}

// initFilterSortItems()
// initImageHandling()
// initProdImgHandle()
// initItemsScroll()
// initSectionsDropDown()   
// initDropDown()
// initBgSlider()
// setTimeout(() => {
//     initSwiper();
// }, 50);