/**
 * Sidebar accordion logic
 */
function toggleRegion(btn) {
    const region = btn.parentElement;
    const content = btn.nextElementSibling;
    const isOpen = region.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    const chevron = btn.querySelector('.sidebar__chevron');
    if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        if (chevron) chevron.style.transform = 'rotate(90deg)';
    } else {
        content.style.maxHeight = null;
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
}

// Open the region that contains the current page on load.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.sidebar__region.is-active').forEach(function (region) {
        const btn = region.querySelector('.region-accordion');
        if (btn && !region.classList.contains('expanded')) {
            toggleRegion(btn);
        }
    });
});
