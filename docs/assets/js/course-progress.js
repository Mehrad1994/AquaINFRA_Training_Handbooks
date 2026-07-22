/**
 * AquaINFRA Training Handbook - Course Progress Tracker
 * Tracks chapter completion per training using localStorage and updates UI indicators.
 * Renders course progress bars & completion checkmarks on overview pages.
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

    function normalizePath(path) {
        return path.replace(/\/index\.html?$/, '/').replace(/\/$/, '');
    }

    const currentPath = normalizePath(window.location.pathname);
    const completedMap = getCompletedMap();

    // 1. Sidebar progress indicators
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a, .sidebar a');
    sidebarLinks.forEach(link => {
        const linkPath = normalizePath(link.pathname);
        if (completedMap[linkPath]) {
            if (!link.querySelector('.completion-check')) {
                const check = document.createElement('span');
                check.className = 'completion-check';
                check.innerHTML = ' ✓';
                check.title = 'Completed';
                check.style.color = '#10b981';
                check.style.fontWeight = 'bold';
                check.style.marginLeft = '0.35rem';
                link.appendChild(check);
            }
        }
    });

    // 2. Inject "Mark Chapter as Complete" button on Applied Use Case Training chapter pages ONLY
    const seqNav = document.querySelector('.sequence-navigation');
    const isOverviewPage = !!document.querySelector('.course-overview-wrapper, .course-overview-container') ||
        currentPath.endsWith('/index') ||
        window.location.pathname.endsWith('/') ||
        window.location.pathname.endsWith('/index') ||
        window.location.pathname.endsWith('/index.html');

    const isTrainingChapter = window.location.pathname.includes('/trainings/') && !isOverviewPage;

    if (seqNav && isTrainingChapter) {
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
                const linkPath = normalizePath(link.pathname);
                if (linkPath === currentPath) {
                    let check = link.querySelector('.completion-check');
                    if (nowCompleted) {
                        if (!check) {
                            check = document.createElement('span');
                            check.className = 'completion-check';
                            check.innerHTML = ' ✓';
                            check.title = 'Completed';
                            check.style.color = '#10b981';
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

        const nextBtn = seqNav.querySelector('.btn-seq--next');
        if (nextBtn) {
            seqNav.insertBefore(btnComplete, nextBtn);
        } else {
            seqNav.appendChild(btnComplete);
        }
    }

    // 3. Render Course Overview Progress Bar on course landing/overview pages
    const tableWrapper = document.querySelector('.table-wrapper table');
    if (tableWrapper) {
        const chapterLinks = tableWrapper.querySelectorAll('a[href*="01_"], a[href*="02_"], a[href*="03_"], a[href*="04_"], a[href*="05_"], a[href*="06_"]');
        if (chapterLinks.length > 0) {
            let completedCount = 0;
            const totalChapters = chapterLinks.length;

            chapterLinks.forEach(link => {
                const linkPath = normalizePath(link.pathname);
                if (completedMap[linkPath]) {
                    completedCount++;
                    if (!link.querySelector('.toc-completion-check')) {
                        const check = document.createElement('span');
                        check.className = 'toc-completion-check';
                        check.innerHTML = ' ✓';
                        check.title = 'Completed';
                        check.style.color = '#10b981';
                        check.style.fontWeight = 'bold';
                        check.style.marginLeft = '0.4rem';
                        link.appendChild(check);
                    }
                }
            });

            const percent = Math.round((completedCount / totalChapters) * 100);

            // Create progress banner
            const progressBanner = document.createElement('div');
            progressBanner.className = 'course-overview-progress';
            progressBanner.innerHTML = `
                <div class="progress-header">
                    <span class="progress-title"><strong>Course Progress</strong></span>
                    <span class="progress-percent">${completedCount} of ${totalChapters} chapters completed (${percent}%)</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                </div>
            `;

            // Insert below table wrapper
            const parentContainer = tableWrapper.closest('.table-wrapper');
            if (parentContainer) {
                parentContainer.parentNode.insertBefore(progressBanner, parentContainer.nextSibling);
            }
        }
    }
});
