// drop-down.js

import { vidControls } from "./vid-cntrls.js";

export function initDropDown() {

    document.removeEventListener('click', handleDropDownClick);
    document.removeEventListener('keydown', handleDropDownKeydown);

    document.addEventListener('click', handleDropDownClick);
    document.addEventListener('keydown', handleDropDownKeydown);
}

function handleDropDownClick(e) {

    const trigger = e.target.closest(
        '.cat-title, .products-title, .section-title.drop-down, .service-title.drop-down'
    );

    if (!trigger) return;

    e.preventDefault();

    toggleAssociatedContent(trigger);
}

function handleDropDownKeydown(e) {

    if (e.key !== 'Enter' && e.key !== ' ') return;

    const trigger = e.target.closest(
        '.cat-title, .products-title, .section-title.drop-down, .service-title.drop-down'
    );

    if (!trigger) return;

    e.preventDefault();

    if (trigger.classList.contains('section-title')) {

        const section = trigger.closest('.section');

        if (section) {
            vidControls({ e, section });
        }
    }

    toggleAssociatedContent(trigger);
}

function toggleAssociatedContent(trigger) {

    //
    // PRODUCTS
    //
    if (trigger.classList.contains('products-title')) {

        const products = trigger.closest('.products');

        if (!products) return;

        const content = products.querySelector('.products-content.downs');

        content?.classList.toggle('hide');

        return;
    }

    //
    // CATEGORIES
    //
    if (trigger.classList.contains('cat-title')) {

        const cat = trigger.closest('.cat');

        if (!cat) return;

        const content = cat.querySelector('.products-containers.downs');

        content?.classList.toggle('hide');

        return;
    }

    //
    // SERVICE SWIPER SLIDES
    //
    if (trigger.classList.contains('service-title')) {

        const service = trigger.closest('.service');

        if (!service) return;

        const content = service.querySelector('.downs');

        content?.classList.toggle('hide');

        return;
    }

    //
    // SECTIONS
    //
    if (
        trigger.classList.contains('section-title') &&
        trigger.classList.contains('drop-down')
    ) {

        const section = trigger.closest('.section');

        if (!section) return;

        const content = section.querySelector('.downs');

        content?.classList.toggle('hide');

        return;
    }
}