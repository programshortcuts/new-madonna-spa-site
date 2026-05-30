// zoom-items.js

export function initZoomItems() {
    const sliders = document.querySelectorAll('[data-nav-target="zoomSlider"]');

    sliders.forEach(slider => {
        const container = slider.closest('.products-content');
        if (!container) return;

        const itemsContainer = container.querySelector('.items-container');
        if (!itemsContainer) return;

        slider.addEventListener("input", () => {
            itemsContainer.style.setProperty(
                "--item-size",
                `${slider.value}px`
            );
        });
    });
}