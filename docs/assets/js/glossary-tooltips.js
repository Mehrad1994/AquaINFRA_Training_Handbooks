/**
 * Glossary tooltips.
 * Any link whose href contains "reference/glossary#" gets a hover tooltip
 * showing the first paragraph below the corresponding term anchor in the
 * glossary page. The glossary is fetched once and cached.
 */
(function () {
    let glossaryCache = null;
    let tooltipEl = null;
    let hideTimeout = null;
    let isTouch = false;

    // Detect if the user is using a touch device
    document.addEventListener('touchstart', () => { isTouch = true; }, { passive: true, once: true });

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
        tooltipEl.style.pointerEvents = 'auto'; // Make interactive

        // Keep tooltip open when hovering over it
        tooltipEl.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
        });
        tooltipEl.addEventListener('mouseleave', () => {
            queueHide();
        });

        document.body.appendChild(tooltipEl);
        return tooltipEl;
    }

    function showTooltip(link, text) {
        clearTimeout(hideTimeout);
        const tip = ensureTooltip();
        
        tip.innerHTML = '';
        const p = document.createElement('p');
        p.textContent = text;
        p.style.margin = '0 0 0.5rem 0';
        tip.appendChild(p);

        const readMore = document.createElement('a');
        readMore.href = link.href;
        readMore.target = '_blank';
        readMore.rel = 'noopener';
        readMore.textContent = 'Read more in Glossary →';
        readMore.style.color = 'var(--aqua-blue, #6cb2eb)';
        readMore.style.textDecoration = 'none';
        readMore.style.fontWeight = 'bold';
        readMore.style.display = 'inline-block';
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
        hideTimeout = setTimeout(() => {
            hideTooltip();
        }, 300);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href*="reference/glossary#"]');
        if (links.length === 0) return;

        // Derive the base glossary URL from the first link.
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

            link.addEventListener('click', (e) => {
                if (isTouch) {
                    // On touch devices, tapping the word only opens the tooltip.
                    // The user must tap "Read more" inside the tooltip to navigate.
                    e.preventDefault();
                    showHover();
                }
            });
        });

        // Hide tooltip when tapping elsewhere on touch devices
        document.addEventListener('click', (e) => {
            if (isTouch && !e.target.closest('a[href*="reference/glossary#"]') && !e.target.closest('.glossary-tooltip')) {
                hideTooltip();
            }
        });
    });
})();
