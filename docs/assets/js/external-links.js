/**
 * Open every external link in a new tab.
 * Any <a> whose href points to a different host than the current page
 * gets target="_blank" and rel="noopener noreferrer" applied automatically.
 * No manual markup needed in markdown.
 */
document.addEventListener('DOMContentLoaded', function () {
    const here = window.location.hostname;
    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Skip mailto, tel, anchors, and relative links - these are internal.
        if (href.startsWith('#') ||
            href.startsWith('/') ||
            href.startsWith('./') ||
            href.startsWith('../') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            !href.includes('://')) {
            return;
        }

        try {
            const url = new URL(href);
            if (url.hostname && url.hostname !== here) {
                link.setAttribute('target', '_blank');
                // Preserve any existing rel value; merge with noopener noreferrer.
                const rel = (link.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
                if (!rel.includes('noopener')) rel.push('noopener');
                if (!rel.includes('noreferrer')) rel.push('noreferrer');
                link.setAttribute('rel', rel.join(' '));
            }
        } catch (e) {
            // Malformed URL - leave the link as-is.
        }
    });
});
