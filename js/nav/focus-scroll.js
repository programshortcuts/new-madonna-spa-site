// focus-scroll.js

import { mainLandingPage } from "../core/inject-content.js";

export function initFocusScroll() {
    const sideNavBtn = document.getElementById('sideNavBtn');
    sideNavBtn?.addEventListener('focus', () => {
        console.log('focus fired');

        console.log('mainLandingPage:', mainLandingPage);
        console.log('scrollTop:', mainLandingPage?.scrollTop);

        // mainLandingPage?.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });

        document.querySelectorAll('*').forEach(el => {
            if (el.scrollTop > 0) {
                console.log(el, el.scrollTop);
            }
        });
    });
}