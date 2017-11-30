$(document).ready(function() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var labels = [1, 2, 3, 4, 5];
  var date = [0, 0, 0, 0, 0];

  $.each(restaurants, function(indexRestaurant, restaurant) {
    date[Math.round(restaurant.rate) - 1]++;
  });

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Oceny lokali',
          data: date,
          borderWidth: 1,
        },
      ],
    },
    options: {
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

  var categoriesChart = document
    .getElementById('categoryCHart')
    .getContext('2d');

  var labelCategory = categories.map(function(category) {
    return category.name;
  });

  var dateCategory = categories.map(function(category) {
    return category.count;
  });

  var myChart = new Chart(categoriesChart, {
    type: 'pie',
    data: {
      labels: labelCategory,
      datasets: [
        {
          label: 'Liczba lokali z daną oceną',
          data: dateCategory,
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        },
      ],
    },
  });
});
