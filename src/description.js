// function for dedice the description key

export const showAQIDescription = (aqi, dk) => {
  if (aqi < 50 && aqi > 0) dk.textContent = 'GOOD';
  else if (aqi < 100) dk.textContent = 'UNHEALTHY FOR SENSITIVE GROUPS';
  else if (aqi < 150) dk.textContent = 'MODERATE';
  else if (aqi <= 200) dk.textContent = 'UNHEALTHY';
  else if (aqi <= 300) dk.textContent = 'VERY UNHEALTHY';
  else dk.textContent = 'HAZARDOUS';
};
