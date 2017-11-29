function getAllRestaurants() {
  var restaurantResponse;
  inizializeRequest(
    restaurantsUrl,
    {},
    'GET',
    function(response) {
      restaurantResponse = response;
    },
    function(response) {}
  );

  return restaurantResponse;
}

function addNewRestaurant() {
  //
}

function getRestaurant(id) {
  //
}

function getRevieRestURANT(id) {
  //
}
