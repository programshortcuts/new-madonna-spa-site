// app.js
import { initChangeStyles } from "./ui/change-styles.js";
import { initInjectContentListeners } from "./core/inject-content.js";
import { initToggleNav } from "./ui/toggle-nav.js";
import { initLetterNav } from "./nav/letter-nav.js";
// import { initDropDown } from "./ui/drop-down.js";
// import { initFilterSortItems } from "./ui/filter-sort-items.js";
// import { initMedicalSpaAnimation } from "./visuals/animation.js";

let animationCleanup = null;

addEventListener('DOMContentLoaded', initMain)
function initMain(){
    const pageWrapper = document.querySelector('.page-wrapper')
    initToggleNav()
    initInjectContentListeners()
    initLetterNav({
        pageWrapper
    });

    document.querySelectorAll("*").forEach(el => {
            [...el.attributes].forEach(attr => {
                if (attr.name.startsWith("on")) {
                    console.log("INLINE EVENT:", el, attr);
                }
            });
        });    
}
function setupGlobalListeners(){
    // initDropDown()
    // initFilterSortItems()
}
setupGlobalListeners()
