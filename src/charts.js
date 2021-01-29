// function for loading the charts

export const loadCharts = (...params) => {
  Chart.defaults.global.defaultFontFamily = 'Arial';

  // remove the chart if it's already exists
  if (document.getElementById('myChart-1'))
    document.getElementById('myChart-1').remove();

  // create the new chart
  let chart1 = document.createElement('canvas');
  chart1.setAttribute('id', 'myChart-1');
  document.querySelector('.pm10-chart-container').appendChild(chart1);

  let pm10Chart = document.getElementById('myChart-1').getContext('2d');
  let chartPM10 = new Chart(pm10Chart, {
    responsive: true,
    type: 'line',
    data: {
      labels: params[0],
      datasets: [
        {
          label: 'pm10 data',
          backgroundColor: 'rgba(188, 211, 231, 0.650)',
          data: params[1],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  // remove the chart if it's already exists
  if (document.getElementById('myChart-2'))
    document.getElementById('myChart-2').remove();

  // create the new chart
  let chart2 = document.createElement('canvas');
  chart2.setAttribute('id', 'myChart-2');
  document.querySelector('.pm25-chart-container').appendChild(chart2);

  let pm25Chart = document.getElementById('myChart-2').getContext('2d');
  let chartPM25 = new Chart(pm25Chart, {
    responsive: true,
    type: 'line',
    data: {
      labels: params[2],
      datasets: [
        {
          label: 'pm25 data',
          backgroundColor: 'rgba(107, 142, 183, 0.650)',
          data: params[3],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  let cakeChart = document.getElementById('myChart-3').getContext('2d');
  let cakeATM = new Chart(cakeChart, {
    responsive: true,
    maintainAspectRatio: false,
    type: 'pie',
    data: {
      labels: ['CO', 'H', 'NO2', 'O3'],
      datasets: [
        {
          label: 'composition of atmosphere',
          backgroundColor: [
            'rgba(107, 142, 183, 0.650)',
            'rgba(188, 211, 231, 0.650)',
            'rgba(201, 218, 241, 0.650)',
            'rgba(185, 207, 238, 0.650)',
          ],
          data: params[4],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: true,
        position: 'right',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  let barChart = document.getElementById('myChart-4').getContext('2d');
  let barATM = new Chart(barChart, {
    type: 'bar',
    data: {
      labels: ['CO', 'H', 'NO2', 'O3'],
      datasets: [
        {
          label: 'composition of atmosphere',
          backgroundColor: [
            'rgba(107, 142, 183, 0.650)',
            'rgba(188, 211, 231, 0.650)',
            'rgba(201, 218, 241, 0.650)',
            'rgba(185, 207, 238, 0.650)',
          ],
          data: params[4],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};
