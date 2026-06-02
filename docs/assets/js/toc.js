/**
 * Builds an "On this page" table of contents from the H2 headings of long
 * training-chapter pages. Renders nothing on short pages or non-chapter pages.
 */
document.addEventListener('DOMContentLoaded', function () {
    var content = document.querySelector('.handbook-content');
    if (!content) return;

    // Only on training chapter pages.
    if (window.location.pathname.indexOf('/trainings/') === -1) return;

    var headings = content.querySelectorAll('h2');
    if (headings.length < 3) return;

    var nav = document.createElement('nav');
    nav.className = 'page-toc';
    nav.setAttribute('aria-label', 'On this page');

    var title = document.createElement('div');
    title.className = 'page-toc__title';
    title.textContent = 'On this page';
    nav.appendChild(title);

    var list = document.createElement('ul');
    list.className = 'page-toc__list';

    headings.forEach(function (h, i) {
        if (!h.id) {
            h.id = 'section-' + i + '-' + h.textContent.trim().toLowerCase()
                .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        // Drop leading emoji/symbols from the visible label.
        a.textContent = h.textContent.replace(/^[^\w]+/, '').trim();
        li.appendChild(a);
        list.appendChild(li);
    });
    nav.appendChild(list);

    // Insert after the "At a glance" callout if present, else after the H1.
    var callout = content.querySelector('.callout');
    var h1 = content.querySelector('h1');
    if (callout && callout.parentNode === content) {
        callout.parentNode.insertBefore(nav, callout.nextSibling);
    } else if (h1) {
        h1.parentNode.insertBefore(nav, h1.nextSibling);
    } else {
        content.insertBefore(nav, content.firstChild);
    }
});
