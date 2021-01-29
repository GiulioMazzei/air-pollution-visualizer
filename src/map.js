export const initMap = (lat, lon, aqi) => {
  // delete the container if it already exists
  if (document.getElementById('mapid'))
    document.getElementById('mapid').remove();

  // create a new container for the map
  let mapRenderContainer = document.createElement('div');
  mapRenderContainer.setAttribute('id', 'mapid');
  document.querySelector('.box4').appendChild(mapRenderContainer);

  //create the map
  const mymap = L.map('mapid').setView([lat, lon], 15);
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);

  //add a marker
  const marker = L.marker([lat, lon]).addTo(mymap);

  //add a popup
  marker.bindPopup(`<b>AQI</b><br>${aqi}`).openPopup();

  //add a circle around the specific area
  const circle = L.circle([lat, lon], {
    color: '#649ED2',
    fillColor: '#B3CDE0',
    fillOpacity: 0.5,
    radius: 300,
  }).addTo(mymap);
};
