var restaurantsToShow = inicializeRestaurantToShow();
var idChoosenCategory = '';

$(document).ready(function() {
  idChoosenCategory = splittedLocationHash();
  restaurantsToShow = inicializeRestaurantToShow();
  showCategory();
  moment.locale('pl');
  $('#singInButton').on('click', function() {
    $('#singInModal').modal('show');
    localStorage.setItem('auth_token', 'aa');
    localStorage.setItem('email', 'aaaa@ccc');
    location.reload();
  });

  $('#singUpButton').on('click', function() {
    $('#singUpModal').modal('show');
  });

  if (localStorage.auth_token != undefined && localStorage.auth_token != '') {
    $('.singInSingUp').html(
      '<p>Jestes zalogowany jako ' +
        localStorage.email +
        '   <span class="singOut">Wyloguj sie</span></p>'
    );
    $('.singOut').on('click', function() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      location.reload();
    });
  } else {
    $('.addRateButton').prop('disabled', 'disabled');
  }
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
        return restaurant.category_id == idChoosenCategory;
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
