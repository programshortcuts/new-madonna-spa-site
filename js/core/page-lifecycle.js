import { initReviewsSwiper } from "../visuals/swiper.js";
import { initDropDown } from "../ui/drop-down.js";
import { initBgSlider } from "../visuals/change-background.js";
import { initFilterSortItems } from "../ui/filter-sort-items.js";
import { initItemsScroll } from "../ui/items-scroll.js";

export function onPageReady() {

    // IMPORTANT: run after DOM injection is complete
    requestAnimationFrame(() => {

        initFilterSortItems();
        initItemsScroll();
        initDropDown();
        initBgSlider();

        // Reviews Swiper must run AFTER DOM exists
        initReviewsSwiper();
    });
}

// initFilterSortItems()
// initImageHandling()
// initProdImgHandle()
// initItemsScroll()
// initSectionsDropDown()   
// initDropDown()
// initBgSlider()

//     initSwiper();
// }, 50);