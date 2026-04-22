// letter-nav.js

export function isActuallyVisible(el) {
    if (!el) return false;

    const style = getComputedStyle(el);

    if (
        style.display === 'none' ||
        style.visibility === 'hidden' ||
        style.opacity === '0'
    ) return false;

    let parent = el.parentElement;
    while (parent) {
        const ps = getComputedStyle(parent);
        if (ps.display === 'none' || ps.visibility === 'hidden') {
            return false;
        }
        parent = parent.parentElement;
    }

    return true;
}

// ----------------------------
// helpers
// ----------------------------

function getAlpha(el) {
    if (!el) return '';

    const aria = el.getAttribute('aria-label');
    if (aria) return aria.trim()[0]?.toLowerCase() || '';

    if (el.classList.contains('section-title')) {
        return el.querySelector('.title-text')
            ?.textContent.trim()[0]
            ?.toLowerCase() || '';
    }

    if (el.tagName === 'IMG') {
        return el.alt?.[0]?.toLowerCase() || '';
    }

    if (el.id) {
        return el.id[0].toLowerCase();
    }

    const text = (el.textContent || '').trim().toLowerCase();
    return text.match(/[a-z]/)?.[0] || '';
}

function buildElements(container = document) {
    const raw = [
        ...container.querySelectorAll('#sideNavBtn, #navBarBtn'),
        ...container.querySelectorAll('.mobile-header-nav a'),
        ...container.querySelectorAll('[data-nav-target]'),
        ...container.querySelectorAll('button, [tabindex="0"]')
    ];

    // remove duplicates + invisible
    const seen = new Set();

    return raw.filter(el => {
        if (!isActuallyVisible(el)) return false;
        if (seen.has(el)) return false;
        seen.add(el);
        return true;
    });
}

// ----------------------------
// main
// ----------------------------

export function initLetterNav({ container = document } = {}) {
    if (!container) return;

    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, [contenteditable="true"]')) return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;

        const key = e.key.toLowerCase();
        if (!/^[a-z]$/.test(key)) return;

        const allEls = buildElements(container);

        const matches = allEls
            .map((el, i) => ({ el, i, alpha: getAlpha(el) }))
            .filter(x => x.alpha === key);

        if (!matches.length) return;

        const active = document.activeElement;
        const currentIndex = allEls.indexOf(active);

        // sort matches in DOM order
        const sorted = matches.sort((a, b) => a.i - b.i);

        let target = null;

        // find next
        const next = sorted.find(m => m.i > currentIndex);
        const prev = sorted.find(m => m.i <= currentIndex);

        if (e.shiftKey) {
            // reverse navigation
            const reversed = [...sorted].reverse();
            target =
                reversed.find(m => m.i < currentIndex) ||
                reversed[0]; // wrap
        } else {
            target =
                next ||
                sorted[0]; // wrap
        }

        if (!target?.el) return;

        target.el.focus();
        target.el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    });
}