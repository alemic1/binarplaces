var restaurantsToShow = inicializeRestaurantToShow();
var idChoosenCategory = '';

$(document).ready(function() {
  idChoosenCategory = splittedLocationHash();
  restaurantsToShow = inicializeRestaurantToShow();
  showCategory();
  moment.locale('pl');
  $('#linkMap').on('click', function() {
    setTimeout(function() {
      initMap('myMap');
    }, 20);
  });
});

$(window).on('hashchange', function(e) {
  idChoosenCategory = splittedLocationHash();
  restaurantsToShow = inicializeRestaurantToShow();
  showCategory();
  initMap('myMap');
});

function splittedLocationHash() {
  var splitOne = $(location).attr('href').split('#');
  if (splitOne[1] != null && splitOne[1] !== '')
    splitOne = splitOne[1].split('%')[0];
  else splitOne = -1;

  return splitOne;
}

function inicializeRestaurantToShow() {
  if (idChoosenCategory != -1) {
    var restaurantsToShow = restaurants
      .filter(function(restaurant) {
        return (
          restaurant.category_id == idChoosenCategory && restaurant.id < 11
        );
      })
      .sort(function(a, b) {
        return b.rate - a.rate;
      });
  } else
    var restaurantsToShow = restaurants
      .filter(function(restaurant) {
        return restaurant.id < 11;
      })
      .sort(function(a, b) {
        return b.rate - a.rate;
      });

  return restaurantsToShow;
}
