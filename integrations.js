/* Offline reference-mode helpers. No external maps, registry APIs, or network calls. */
(function () {
  function validateGeoJSON(raw) {
    const geometry = raw?.type === 'Feature' ? raw.geometry : raw;
    if (!geometry || !['Polygon', 'MultiPolygon'].includes(geometry.type)) {
      throw new Error('Upload a GeoJSON Polygon or MultiPolygon geometry, or a Feature containing one.');
    }
    const rings = geometry.type === 'Polygon' ? geometry.coordinates : geometry.coordinates.flat(1);
    if (!Array.isArray(rings) || !rings.length) throw new Error('Geometry contains no rings.');
    let count = 0, minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity;
    for (const ring of rings) {
      if (!Array.isArray(ring) || ring.length < 4) throw new Error('Each polygon ring must contain at least four coordinates.');
      const first = ring[0], last = ring[ring.length - 1];
      if (!Array.isArray(first) || !Array.isArray(last) || first[0] !== last[0] || first[1] !== last[1]) throw new Error('Each ring must be closed (first and last coordinates must match).');
      for (const p of ring) {
        if (!Array.isArray(p) || p.length < 2 || !Number.isFinite(p[0]) || !Number.isFinite(p[1]) || p[0] < -180 || p[0] > 180 || p[1] < -90 || p[1] > 90) throw new Error('Coordinates must be valid longitude/latitude values in EPSG:4326.');
        minLng = Math.min(minLng, p[0]); maxLng = Math.max(maxLng, p[0]); minLat = Math.min(minLat, p[1]); maxLat = Math.max(maxLat, p[1]); count++;
      }
    }
    return { type: geometry.type, coordinateCount: count, bounds: [minLng, minLat, maxLng, maxLat] };
  }
  window.GeoLandIntegrations = {
    mode: 'reference-only',
    validateGeoJSON,
    renderContextMap(el) {
      if (!el || el.dataset.referenceRendered === 'true') return;
      el.dataset.referenceRendered = 'true';
      el.setAttribute('aria-label', 'Illustrative Telangana GIS reference map; not live map data');
      const note = document.createElement('div');
      note.className = 'map-live-note';
      note.textContent = 'REFERENCE MAP · NOT TO SCALE · NO LIVE MAP OR CADASTRAL DATA';
      el.appendChild(note);
    }
  };
})();
