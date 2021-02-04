import axios from 'axios';

import { showAQIDescription } from './description';
import { loadCharts } from './charts';
import { showContent, showAtmosphereContent, showNoData } from './helper';
import { initMap } from './map';

console.log('javascript bundle loaded successfully');

const container = document.querySelector('.wrapper-for-data');
const errorMessageContainer = document.querySelector('.error-message');
const aqiNumber = document.querySelector('.aqi-number');
const aqiDescriptionKey = document.querySelector('.aqi-description-key');

const serviceName = document.querySelector('.service-name');

const inputBox = document.querySelector('.input-for-search-data');
const btnForFetchingData = document.querySelector('.button-for-search-data');
const btnForGeolocalization = document.querySelector(
  '.button-for-geolocalization'
);

const CO = document.querySelector('.co');
const H = document.querySelector('.h');
const NO2 = document.querySelector('.no2');
const O3 = document.querySelector('.o3');

let pm10_Day_Arr = [];
let pm10_Avg_Arr = [];
let pm25_Day_Arr = [];
let pm25_Avg_Arr = [];
let atm_Arr = [];

let errorAPI = false;
// fetch data

const fetchData = async (value) => {
  return axios
    .get(`https://api.waqi.info/feed/${value}/?token=${process.env.API_KEY}`)
    .then((response) => {
      errorAPI = false;
      showContent(errorMessageContainer, 'none');
      console.log(response.data);

      let json = response.data.data;
      // Unknown station
      if (json === 'Unknown station') {
        showContent(container, 'none');
        errorAPI = true;
        return;
      }

      // changing the HTML
      aqiNumber.textContent = json.aqi;
      showAQIDescription(json.aqi, aqiDescriptionKey);
      serviceName.textContent = json.attributions[0].name;

      // clear the previous arrays every time the function is called
      if (pm10_Day_Arr.length !== 0) pm10_Day_Arr.length = 0;
      if (pm10_Avg_Arr.length !== 0) pm10_Avg_Arr.length = 0;
      if (pm25_Day_Arr.length !== 0) pm25_Day_Arr.length = 0;
      if (pm25_Avg_Arr.length !== 0) pm25_Avg_Arr.length = 0;
      if (atm_Arr.length !== 0) atm_Arr.length = 0;

      //pm10
      for (let i = 0; i < json.forecast.daily.pm10.length; i++) {
        pm10_Day_Arr.push(json.forecast.daily.pm10[i].day);
        pm10_Avg_Arr.push(json.forecast.daily.pm10[i].avg);
      }

      //pm25
      for (let i = 0; i < json.forecast.daily.pm25.length; i++) {
        pm25_Day_Arr.push(json.forecast.daily.pm25[i].day);
        pm25_Avg_Arr.push(json.forecast.daily.pm25[i].avg);
      }

      if (json.iaqi.co) showAtmosphereContent(atm_Arr, CO, json.iaqi.co.v);
      else showNoData(atm_Arr, CO);

      if (json.iaqi.h) showAtmosphereContent(atm_Arr, H, json.iaqi.h.v);
      else showNoData(atm_Arr, H);

      if (json.iaqi.no2) showAtmosphereContent(atm_Arr, NO2, json.iaqi.no2.v);
      else showNoData(atm_Arr, NO2);

      if (json.iaqi.o3) showAtmosphereContent(atm_Arr, O3, json.iaqi.o3.v);
      else showNoData(atm_Arr, O3);

      initMap(json.city.geo[0], json.city.geo[1], json.aqi);
      console.log('latitude' + json.city.geo[0]);
      console.log('longitude' + json.city.geo[1]);
    });
};

// adding the button functionalities

btnForFetchingData.addEventListener('click', async () => {
  let value = inputBox.value;
  await fetchData(value);
  console.log('loaded content');
  if (errorAPI) showContent(errorMessageContainer, 'block');
  else {
    loadCharts(pm10_Day_Arr, pm10_Avg_Arr, pm25_Day_Arr, pm25_Avg_Arr, atm_Arr);
    showContent(container, 'block');
  }
});

btnForGeolocalization.addEventListener('click', async () => {
  // IMPORTANT NOTE: not so much city are actually in the database of the AQICN
  // so if you live in a small city it wont probably be available
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    return axios
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
      )
      .then((response) => {
        console.log('city: ' + response.data.city);
        fetchData(response.data.city);
      })
      .then(() => {
        loadCharts(
          pm10_Day_Arr,
          pm10_Avg_Arr,
          pm25_Day_Arr,
          pm25_Avg_Arr,
          atm_Arr
        );
      });
  });
});
