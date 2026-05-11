/**
 * Copy-to-clipboard buttons for code blocks.
 * Attaches a small button to every <pre><code> on the page.
 */
document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre > code');

    codeBlocks.forEach(code => {
        const pre = code.parentElement;

        // Skip Mermaid blocks - they get replaced with diagrams
        if (code.classList.contains('language-mermaid')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'copy-btn';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        button.textContent = 'Copy';

        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(code.textContent);
                button.textContent = 'Copied!';
                button.classList.add('copy-btn--success');
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copy-btn--success');
                }, 2000);
            } catch (err) {
                button.textContent = 'Failed';
                console.error('Copy failed:', err);
            }
        });

        // Insert wrapper around <pre>
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);
        wrapper.appendChild(button);
    });
});
