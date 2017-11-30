function getAllRestaurants() {
  var restaurantAllResponse;
  inizializeRequest(
    restaurantsUrl,
    {},
    'GET',
    function(response) {
      restaurantAllResponse = response;
    },
    function(response) {}
  );

  return restaurantAllResponse;
}

function addNewRestaurant(name, category_id, adress, lat, lng) {
  var date;
  if (lat != undefined && lng != undefined) {
    date = {
      name: name,
      category_id: category_id,
      adress: adress,
      lat: lat,
      lng: lng,
    };
  } else {
    date = {name: name, category_id: category_id, adress: adress};
  }
  inizializeRequest(
    restaurantsUrl,
    date,
    'POST',
    function(response) {
      console.log(response);
    },
    function(response) {
      console.log(response);
    }
  );
}

function getRestaurant(id) {
  var url = restaurantsUrl + '/' + id;
  var restaurant;
}

function getRevieRestURANT(id) {
  var url = restaurantsUrl + '/' + id + 'review';
}
