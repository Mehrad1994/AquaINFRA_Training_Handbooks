/**
 * AquaINFRA Training Handbook - Course Progress Tracker
 * Tracks chapter completion per training using localStorage and updates UI indicators.
 */
document.addEventListener('DOMContentLoaded', function () {
    const STORAGE_KEY = 'aquainfra_completed_chapters';

    function getCompletedMap() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch (e) {
            return {};
        }
    }

    function saveCompletedMap(map) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
        } catch (e) {
            console.warn('Could not save progress to localStorage', e);
        }
    }

    const currentPath = window.location.pathname.replace(/\/index\.html?$/, '/');
    const completedMap = getCompletedMap();

    // 1. Sidebar progress indicators
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a, .sidebar a');
    sidebarLinks.forEach(link => {
        const linkPath = link.pathname.replace(/\/index\.html?$/, '/');
        if (completedMap[linkPath]) {
            if (!link.querySelector('.completion-check')) {
                const check = document.createElement('span');
                check.className = 'completion-check';
                check.innerHTML = ' ✓';
                check.title = 'Completed';
                check.style.color = 'var(--color-success, #2e7d32)';
                check.style.fontWeight = 'bold';
                check.style.marginLeft = '0.35rem';
                link.appendChild(check);
            }
        }
    });

    // 2. Inject "Mark Chapter as Complete" button on sequential navigation pages
    const seqNav = document.querySelector('.sequence-navigation');
    if (seqNav) {
        const isCompleted = !!completedMap[currentPath];

        const btnComplete = document.createElement('button');
        btnComplete.type = 'button';
        btnComplete.className = `btn-complete ${isCompleted ? 'btn-complete--done' : ''}`;
        btnComplete.innerHTML = isCompleted
            ? '✓ Completed'
            : 'Mark Chapter as Complete';

        btnComplete.addEventListener('click', function () {
            const currentMap = getCompletedMap();
            const nowCompleted = !currentMap[currentPath];
            currentMap[currentPath] = nowCompleted;
            saveCompletedMap(currentMap);

            if (nowCompleted) {
                btnComplete.classList.add('btn-complete--done');
                btnComplete.innerHTML = '✓ Completed';
            } else {
                btnComplete.classList.remove('btn-complete--done');
                btnComplete.innerHTML = 'Mark Chapter as Complete';
            }

            // Update sidebar link dynamically
            sidebarLinks.forEach(link => {
                const linkPath = link.pathname.replace(/\/index\.html?$/, '/');
                if (linkPath === currentPath) {
                    let check = link.querySelector('.completion-check');
                    if (nowCompleted) {
                        if (!check) {
                            check = document.createElement('span');
                            check.className = 'completion-check';
                            check.innerHTML = ' ✓';
                            check.title = 'Completed';
                            check.style.color = 'var(--color-success, #2e7d32)';
                            check.style.fontWeight = 'bold';
                            check.style.marginLeft = '0.35rem';
                            link.appendChild(check);
                        }
                    } else if (check) {
                        check.remove();
                    }
                }
            });
        });

        // Insert complete button between Prev and Next buttons, or at the start
        const nextBtn = seqNav.querySelector('.btn-seq--next');
        if (nextBtn) {
            seqNav.insertBefore(btnComplete, nextBtn);
        } else {
            seqNav.appendChild(btnComplete);
        }
    }
});
