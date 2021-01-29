export const initMap = (lat, lon, aqi) => {
  const mymap = L.map('mapid').setView([lat, lon], 15);
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);
  const marker = L.marker([lat, lon]).addTo(mymap);

  marker.bindPopup(`<b>AQI</b><br>${aqi}`).openPopup();

  const circle = L.circle([lat, lon], {
    color: '#649ED2',
    fillColor: '#B3CDE0',
    fillOpacity: 0.5,
    radius: 300,
  }).addTo(mymap);
};
