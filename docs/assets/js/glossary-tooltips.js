/**
 * Glossary tooltips.
 * Any link whose href contains "reference/glossary#" gets a hover tooltip
 * showing the first paragraph below the corresponding term anchor in the
 * glossary page. The glossary is fetched once and cached.
 */
(function () {
    let glossaryCache = null;
    let tooltipEl = null;

    async function loadGlossary(baseUrl) {
        if (glossaryCache) return glossaryCache;
        try {
            const html = await fetch(baseUrl).then(r => r.text());
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const terms = {};
            // For each heading with an id, grab the next paragraph as the definition.
            doc.querySelectorAll('h3[id], h4[id]').forEach(h => {
                let sibling = h.nextElementSibling;
                while (sibling && !['P', 'UL', 'OL'].includes(sibling.tagName)) {
                    sibling = sibling.nextElementSibling;
                }
                if (sibling) {
                    let text = sibling.textContent.trim();
                    if (text.length > 280) text = text.slice(0, 277) + '...';
                    terms[h.id] = text;
                }
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
        document.body.appendChild(tooltipEl);
        return tooltipEl;
    }

    function showTooltip(link, text) {
        const tip = ensureTooltip();
        tip.textContent = text;
        const rect = link.getBoundingClientRect();
        tip.style.left = (window.scrollX + rect.left) + 'px';
        tip.style.top = (window.scrollY + rect.bottom + 6) + 'px';
        tip.classList.add('glossary-tooltip--visible');
    }

    function hideTooltip() {
        if (tooltipEl) tooltipEl.classList.remove('glossary-tooltip--visible');
    }

    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href*="reference/glossary#"]');
        if (links.length === 0) return;

        // Derive the base glossary URL from the first link.
        const firstHref = links[0].getAttribute('href');
        const baseUrl = firstHref.split('#')[0];

        links.forEach(link => {
            link.classList.add('glossary-term');
            link.addEventListener('mouseenter', async () => {
                const anchor = link.getAttribute('href').split('#')[1];
                const terms = await loadGlossary(baseUrl);
                if (terms[anchor]) showTooltip(link, terms[anchor]);
            });
            link.addEventListener('mouseleave', hideTooltip);
            link.addEventListener('focus', async () => {
                const anchor = link.getAttribute('href').split('#')[1];
                const terms = await loadGlossary(baseUrl);
                if (terms[anchor]) showTooltip(link, terms[anchor]);
            });
            link.addEventListener('blur', hideTooltip);
        });
    });
})();
