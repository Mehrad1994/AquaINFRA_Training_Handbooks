/**
 * Glossary tooltips.
 * Any link whose href contains "reference/glossary#" gets a hover tooltip
 * showing the definition from the corresponding <tr id="..."> row in the
 * glossary page. The glossary is fetched once and cached.
 */
(function () {
    let glossaryCache = null;
    let tooltipEl = null;
    let hideTimeout = null;
    let isTouch = false;

    // Detect touch devices
    document.addEventListener('touchstart', () => { isTouch = true; }, { passive: true, once: true });

    async function loadGlossary(baseUrl) {
        if (glossaryCache) return glossaryCache;
        try {
            const html = await fetch(baseUrl).then(r => r.text());
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const terms = {};

            // Glossary uses <tr id="term"> — first <td> is name, second is definition.
            doc.querySelectorAll('tr[id]').forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length < 2) return;

                const termName = cells[0].textContent.trim().split('\n')[0].trim();
                let defText = cells[1].textContent.trim();
                if (defText.length > 280) defText = defText.slice(0, 277) + '...';

                terms[row.id] = { name: termName, definition: defText };
            });

            glossaryCache = terms;
        } catch (err) {
            console.warn('Glossary tooltip load failed:', err);
            glossaryCache = {};
        }
        return glossaryCache;
    }

    function ensureTooltip() {
        if (tooltipEl) return tooltipEl;
        tooltipEl = document.createElement('div');
        tooltipEl.className = 'glossary-tooltip';
        tooltipEl.setAttribute('role', 'tooltip');
        tooltipEl.style.pointerEvents = 'auto';

        tooltipEl.addEventListener('mouseenter', () => { clearTimeout(hideTimeout); });
        tooltipEl.addEventListener('mouseleave', () => { queueHide(); });

        document.body.appendChild(tooltipEl);
        return tooltipEl;
    }

    function showTooltip(link, entry) {
        clearTimeout(hideTimeout);
        const tip = ensureTooltip();

        tip.innerHTML = '';

        // Term name label
        const label = document.createElement('strong');
        label.className = 'glossary-tooltip__term';
        label.textContent = entry.name;
        tip.appendChild(label);

        // Definition text
        const p = document.createElement('p');
        p.className = 'glossary-tooltip__def';
        p.textContent = entry.definition;
        tip.appendChild(p);

        // Read more link
        const readMore = document.createElement('a');
        readMore.href = link.href;
        readMore.target = '_blank';
        readMore.rel = 'noopener';
        readMore.textContent = 'Full definition \u2192';
        readMore.className = 'glossary-tooltip__link';
        tip.appendChild(readMore);

        const rect = link.getBoundingClientRect();
        tip.style.left = (window.scrollX + rect.left) + 'px';
        tip.style.top = (window.scrollY + rect.bottom + 6) + 'px';
        tip.classList.add('glossary-tooltip--visible');
        tip._currentLink = link;
    }

    function hideTooltip() {
        if (tooltipEl) {
            tooltipEl.classList.remove('glossary-tooltip--visible');
            tooltipEl._currentLink = null;
        }
    }

    function queueHide() {
        hideTimeout = setTimeout(hideTooltip, 300);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href*="reference/glossary#"]');
        if (links.length === 0) return;

        // Derive base glossary URL from the first link's href (relative to current page)
        const firstHref = links[0].getAttribute('href');
        const baseUrl = firstHref.split('#')[0];

        links.forEach(link => {
            link.classList.add('glossary-term');

            if (!link.hasAttribute('target')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener');
            }

            const showHover = async () => {
                clearTimeout(hideTimeout);
                const anchor = link.getAttribute('href').split('#')[1];
                const terms = await loadGlossary(baseUrl);
                if (terms[anchor]) showTooltip(link, terms[anchor]);
            };

            link.addEventListener('mouseenter', showHover);
            link.addEventListener('mouseleave', queueHide);
            link.addEventListener('focus', showHover);
            link.addEventListener('blur', queueHide);

            link.addEventListener('click', e => {
                if (isTouch) {
                    e.preventDefault();
                    showHover();
                }
            });
        });

        // Hide tooltip when tapping elsewhere on touch
        document.addEventListener('click', e => {
            if (isTouch &&
                !e.target.closest('a[href*="reference/glossary#"]') &&
                !e.target.closest('.glossary-tooltip')) {
                hideTooltip();
            }
        });
    });
})();
