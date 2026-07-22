/**
 * AquaINFRA Training Handbook - Tab Switcher
 * Enables interactive tab switching (e.g. Galaxy GUI vs R vs Python)
 * and persists the learner's preference across pages via localStorage.
 */
document.addEventListener('DOMContentLoaded', function () {
    const STORAGE_KEY = 'aquainfra_preferred_tool_tab';

    // Find all tab containers on the page
    const tabContainers = document.querySelectorAll('.tool-tabs-container');
    if (!tabContainers.length) return;

    const savedTab = localStorage.getItem(STORAGE_KEY);

    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('.tab-btn');
        const contents = container.querySelectorAll('.tab-content');

        if (!buttons.length || !contents.length) return;

        function activateTab(tabId) {
            let matched = false;

            buttons.forEach(btn => {
                const target = btn.getAttribute('data-tab');
                if (target === tabId) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');
                    matched = true;
                } else {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                }
            });

            contents.forEach(content => {
                if (content.getAttribute('data-tab-content') === tabId) {
                    content.classList.add('active');
                    content.removeAttribute('hidden');
                } else {
                    content.classList.remove('active');
                    content.setAttribute('hidden', '');
                }
            });

            if (matched) {
                localStorage.setItem(STORAGE_KEY, tabId);
            }
        }

        // Event listeners for buttons
        buttons.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabId = this.getAttribute('data-tab');
                // Activate across all tab containers on the page
                document.querySelectorAll(`.tool-tabs-container`).forEach(c => {
                    const btnInC = c.querySelector(`.tab-btn[data-tab="${tabId}"]`);
                    if (btnInC) {
                        const contentsInC = c.querySelectorAll('.tab-content');
                        const buttonsInC = c.querySelectorAll('.tab-btn');

                        buttonsInC.forEach(b => {
                            b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
                            b.setAttribute('aria-selected', b.getAttribute('data-tab') === tabId ? 'true' : 'false');
                        });

                        contentsInC.forEach(cnt => {
                            if (cnt.getAttribute('data-tab-content') === tabId) {
                                cnt.classList.add('active');
                                cnt.removeAttribute('hidden');
                            } else {
                                cnt.classList.remove('active');
                                cnt.setAttribute('hidden', '');
                            }
                        });
                    }
                });
                localStorage.setItem(STORAGE_KEY, tabId);
            });
        });

        // Activate initial tab (saved or first)
        const initialTab = savedTab && container.querySelector(`.tab-btn[data-tab="${savedTab}"]`)
            ? savedTab
            : buttons[0].getAttribute('data-tab');

        activateTab(initialTab);
    });
});
