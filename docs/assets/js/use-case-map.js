/**
 * AquaINFRA Training Handbook - Interactive Use Cases Map
 * Renders Leaflet map with all pins framed automatically & bi-directional card hover highlights.
 */
document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('use-case-map');
    if (!mapContainer || typeof L === 'undefined') return;

    // 1. Initialize Leaflet Map
    const map = L.map('use-case-map', {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false
    });

    // Sleek CartoDB Positron light tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(map);

    // 2. Define Use Case Locations
    const useCaseLocations = [
        {
            id: 'elbe',
            title: 'Elbe Estuary',
            region: 'North Sea',
            coords: [53.55, 9.70],
            desc: 'River-to-sea transport dynamics, nutrient fluxes, and estuarine hypoxia in German Bight.',
            url: './trainings/elbe/'
        },
        {
            id: 'gulf-of-finland',
            title: 'Vantaanjoki & Gulf of Finland',
            region: 'Baltic Sea',
            coords: [60.17, 24.94],
            desc: 'Nutrient runoff from Vantaanjoki urban catchment into the Gulf of Finland using FerryBox data.',
            url: './trainings/gulf-of-finland/'
        },
        {
            id: 'gulf-of-riga',
            title: 'Service by the Gulf of Riga',
            region: 'Baltic Sea',
            coords: [57.00, 24.00],
            desc: 'Daugava river discharges, Secchi depth, and HELCOM subbasins for Mann-Kendall trend detection.',
            url: './trainings/gulf-of-riga/'
        },
        {
            id: 'helcom',
            title: 'HELCOM Baltic Sea',
            region: 'Baltic Sea',
            coords: [58.50, 19.50],
            desc: 'Evaluates HELCOM Baltic Sea Action Plan effectiveness on water clarity & nutrient reduction.',
            url: './trainings/helcom/'
        },
        {
            id: 'hereon',
            title: 'HEREON Satellite & OWT',
            region: 'North Sea',
            coords: [54.20, 7.80],
            desc: 'Integrates Sentinel-3 OLCI satellite remote sensing with FerryBox in-situ data for OWT classification.',
            url: './trainings/hereon/'
        },
        {
            id: 'oslofjord',
            title: 'Oslofjord & Glomma River',
            region: 'North Sea',
            coords: [59.50, 10.60],
            desc: 'Tracks Glomma river nutrient discharge and coastal FerryBox transects during extreme storm events.',
            url: './trainings/oslofjord/'
        },
        {
            id: 'tordera-malta',
            title: 'Tordera Basin & Malta',
            region: 'Mediterranean Sea',
            coords: [41.70, 2.75],
            desc: 'Flash floods in Tordera catchment and seawater intrusion in Maltese coastal aquifers.',
            url: './trainings/tordera-malta/'
        },
        {
            id: 'pan-european-use-case',
            title: 'Pan-European Biodiversity',
            region: 'Pan-European',
            coords: [50.00, 15.00],
            desc: 'Harmonises freshwater occurrence data across European river networks via specleanr.',
            url: './trainings/pan-european-use-case/'
        }
    ];

    const markersMap = {};
    const latLngs = [];

    function createCustomIcon(isHighlighted) {
        return L.divIcon({
            className: 'custom-map-pin-wrapper',
            html: `<div class="custom-map-pin ${isHighlighted ? 'custom-map-pin--active' : ''}"></div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11]
        });
    }

    // 3. Create Markers & Collect Bounds
    useCaseLocations.forEach(uc => {
        latLngs.push(uc.coords);

        const marker = L.marker(uc.coords, {
            icon: createCustomIcon(false),
            title: uc.title
        }).addTo(map);

        const popupContent = `
            <div class="map-popup-card">
                <span class="map-popup-badge map-popup-badge--${uc.region.toLowerCase().replace(/\s+/g, '-')}">${uc.region}</span>
                <h4 class="map-popup-title">${uc.title}</h4>
                <p class="map-popup-desc">${uc.desc}</p>
                <a href="${uc.url}" class="map-popup-link">Explore Course &rarr;</a>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 230, closeButton: false });
        markersMap[uc.id] = marker;

        // Hover Marker: Open popup & highlight matching card
        marker.on('mouseover', function () {
            this.openPopup();
            marker.setIcon(createCustomIcon(true));
            highlightCard(uc.id, true);
        });

        // Mouse out Marker: Close popup & remove card highlight cleanly
        marker.on('mouseout', function () {
            this.closePopup();
            marker.setIcon(createCustomIcon(false));
            highlightCard(uc.id, false);
        });
    });

    // Automatically fit map bounds to show ALL 8 pins in frame comfortably
    if (latLngs.length > 0) {
        const bounds = L.latLngBounds(latLngs);
        map.fitBounds(bounds, { padding: [35, 35] });
    }

    // 4. Hover Card: Highlights Map Pin & Opens Popup (NO page scrolling)
    const cards = document.querySelectorAll('.use-case-card');
    cards.forEach(card => {
        const href = card.querySelector('a.use-case-card__footer')?.getAttribute('href') || '';
        
        let matchingId = null;
        useCaseLocations.forEach(uc => {
            if (href.includes(uc.id) || card.textContent.includes(uc.title)) {
                matchingId = uc.id;
            }
        });

        if (matchingId) {
            card.dataset.usecaseId = matchingId;

            card.addEventListener('mouseenter', function () {
                const marker = markersMap[matchingId];
                if (marker) {
                    marker.setIcon(createCustomIcon(true));
                    marker.openPopup();
                }
                card.classList.add('use-case-card--highlighted');
            });

            card.addEventListener('mouseleave', function () {
                const marker = markersMap[matchingId];
                if (marker) {
                    marker.setIcon(createCustomIcon(false));
                    marker.closePopup();
                }
                card.classList.remove('use-case-card--highlighted');
            });
        }
    });

    function highlightCard(id, activate) {
        const card = document.querySelector(`.use-case-card[data-usecase-id="${id}"]`);
        if (card) {
            if (activate) {
                card.classList.add('use-case-card--highlighted');
            } else {
                card.classList.remove('use-case-card--highlighted');
            }
        }
    }
});
