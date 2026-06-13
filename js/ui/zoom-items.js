// zoom-items.js

export function initZoomItems() {
    
    const sliders = document.querySelectorAll('.product-size-slider');

    sliders.forEach(slider => {
        const container = slider.closest('.products-content');
        if (!container) return;

        const itemsContainer = container.querySelector('.items-container');
        if (!itemsContainer) return;

        slider.addEventListener("input", () => {
            // console.log(slider.value)
            itemsContainer.style.setProperty(
                "--item-size",
                `${slider.value}%`
            );
        });
        slider.addEventListener("change", () => {
            console.log(slider.value )
        });
    });
}