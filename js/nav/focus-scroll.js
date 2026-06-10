// focus-scroll.js

import { mainLandingPage } from "../core/inject-content.js";

export function initFocusScroll() {
    const sideNavBtn = document.getElementById('sideNavBtn');
    sideNavBtn?.addEventListener('focus', () => {
        document.querySelectorAll('*').forEach(el => {
            if (el.scrollTop > 0) {
                console.log(el, el.scrollTop);
            }
        });
    });
}