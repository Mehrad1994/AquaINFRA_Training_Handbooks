/**
 * AquaINFRA Training Handbook - Fixed Scale Interactive Use Cases Map
 * Fixed map scale to show all points across Europe without panning/moving.
 * Bi-directional hover highlights between map pins and training cards.
 */
document.addEventListener('DOMContentLoaded', function () {
    const mapContainer = document.getElementById('use-case-map');
    if (!mapContainer || typeof L === 'undefined') return;

    // 1. Initialize Fixed-Scale Leaflet Map (All zoom & drag disabled for stationary display)
    const map = L.map('use-case-map', {
        center: [52.0, 14.0],
        zoom: 3.8,
        zoomControl: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        keyboard: false
    });

    // Sleek CartoDB Positron light tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Fit map bounds to show all European points stationary
    map.fitBounds([
        [34.5, -9.5],  // South/West (Malta & Spain)
        [63.5, 30.5]   // North/East (Finland & Baltic)
    ], { padding: [10, 10] });

    setTimeout(function () {
        map.invalidateSize();
    }, 250);

    // 2. Define Use Case Geographic Locations & Popups
    const useCaseLocations = [
        {
            id: 'elbe',
            title: 'Elbe Estuary',
            region: 'North Sea',
            coords: [53.55, 9.70],
            desc: 'Models river-to-sea transport dynamics, nutrient fluxes, and estuarine hypoxia in the Elbe & German Bight.',
            url: './trainings/elbe/'
        },
        {
            id: 'gulf-of-finland',
            title: 'Vantaanjoki River & Gulf of Finland',
            region: 'Baltic Sea',
            coords: [60.17, 24.94],
            desc: 'Analyses nutrient runoff from Vantaanjoki urban catchment into the Gulf of Finland using FerryBox data.',
            url: './trainings/gulf-of-finland/'
        },
        {
            id: 'gulf-of-riga',
            title: 'Service by the Gulf of Riga',
            region: 'Baltic Sea',
            coords: [57.00, 24.00],
            desc: 'Combines Daugava river discharges, Secchi depth, and HELCOM subbasins for Mann-Kendall trend detection.',
            url: './trainings/gulf-of-riga/'
        },
        {
            id: 'helcom',
            title: 'HELCOM Baltic Sea',
            region: 'Baltic Sea',
            coords: [58.50, 19.50],
            desc: 'Evaluates effectiveness of HELCOM Baltic Sea Action Plan measures on water clarity and nutrient reduction.',
            url: './trainings/helcom/'
        },
        {
            id: 'hereon',
            title: 'HEREON Satellite & Optical Water Types',
            region: 'North Sea',
            coords: [54.20, 7.80],
            desc: 'Integrates Sentinel-3 OLCI satellite remote sensing with FerryBox in-situ data for Optical Water Type classification.',
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
            title: 'Tordera River Basin & Malta',
            region: 'Mediterranean Sea',
            coords: [41.70, 2.75],
            desc: 'Models flash flood dynamics in Tordera catchment and seawater intrusion in Maltese coastal aquifers.',
            url: './trainings/tordera-malta/'
        },
        {
            id: 'pan-european-use-case',
            title: 'Pan-European Biodiversity',
            region: 'Pan-European',
            coords: [50.00, 15.00],
            desc: 'Harmonises freshwater occurrence data across European river networks using the specleanr R package.',
            url: './trainings/pan-european-use-case/'
        }
    ];

    const markersMap = {};

    function createCustomIcon(isHighlighted) {
        return L.divIcon({
            className: 'custom-map-pin-wrapper',
            html: `<div class="custom-map-pin ${isHighlighted ? 'custom-map-pin--active' : ''}"></div>`,
            iconSize: [22, 22],
            iconAnchor: [11, 11]
        });
    }

    // 3. Add Markers & Popups to Stationary Map
    useCaseLocations.forEach(uc => {
        const marker = L.marker(uc.coords, {
            icon: createCustomIcon(false),
            title: uc.title
        }).addTo(map);

        const popupContent = `
            <div class="map-popup-card">
                <span class="map-popup-badge">${uc.region}</span>
                <h4 class="map-popup-title">${uc.title}</h4>
                <p class="map-popup-desc">${uc.desc}</p>
                <a href="${uc.url}" class="map-popup-link">Explore Course &rarr;</a>
            </div>
        `;

        marker.bindPopup(popupContent, { maxWidth: 240, autoPan: false });
        markersMap[uc.id] = marker;

        // Hover marker highlights card below (without map movement)
        marker.on('mouseover', function () {
            this.openPopup();
            highlightCard(uc.id, true);
        });

        marker.on('mouseout', function () {
            highlightCard(uc.id, false);
        });
    });

    // 4. Card Hover activates Marker Popup without moving map
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
