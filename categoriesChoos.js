var restaurantsToShow = inicializeRestaurantToShow();
var idChoosenCategory = '';

$(document).ready(function() {
  idChoosenCategory = splittedLocationHash();
  restaurantsToShow = inicializeRestaurantToShow();
  showCategory();
  moment.locale('pl');
  $('#linkMap').on('click', function() {
    initMap();
  });
});

$(window).on('hashchange', function(e) {
  idChoosenCategory = splittedLocationHash();
  restaurantsToShow = inicializeRestaurantToShow();
  showCategory();
  initMap();
});

function splittedLocationHash() {
  var splitOne = $(location).attr('href').split('#');
  if (splitOne[1] != null) splitOne = splitOne[1].split('%')[0];
  else splitOne = -1;

  return splitOne;
}

function inicializeRestaurantToShow() {
  if (idChoosenCategory != -1) {
    var restaurantsToShow = restaurants
      .filter(function(restaurant) {
        return restaurant.category_id === idChoosenCategory;
      })
      .sort(function(a, b) {
        return b.rate - a.rate;
      });
  } else
    var restaurantsToShow = restaurants.sort(function(a, b) {
      return b.rate - a.rate;
    });

  return restaurantsToShow;
}
