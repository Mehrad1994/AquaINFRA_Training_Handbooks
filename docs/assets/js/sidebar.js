/**
 * Sidebar Toggle Logic
 */
function toggleRegion(btn) {
    const region = btn.parentElement;
    const content = btn.nextElementSibling;

    // Toggle expanded class
    region.classList.toggle('expanded');

    if (region.classList.contains('expanded')) {
        content.style.maxHeight = content.scrollHeight + "px";
        const chevron = btn.querySelector('.sidebar__chevron');
        if (chevron) chevron.style.transform = 'rotate(90deg)';
    } else {
        content.style.maxHeight = null;
        const chevron = btn.querySelector('.sidebar__chevron');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
}
