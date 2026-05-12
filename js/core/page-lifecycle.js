import { initReviewsSwiper, initServicesSwiper } from "../visuals/swiper.js";
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

        // Swipers must run AFTER DOM exists
        initReviewsSwiper();
        initServicesSwiper();
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