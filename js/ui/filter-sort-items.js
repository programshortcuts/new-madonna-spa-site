// filter-sort-items-down.js
export function initFilterSortItems() {
    const sortBtns = document.querySelectorAll('.sort-btn');

    sortBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const productsContent = btn.closest('.products-content');
            const container = productsContent.querySelector('.items-container');

            container.classList.toggle('sort');
        });
    });
}