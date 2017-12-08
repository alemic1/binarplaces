function getAllRestaurants() {
  var responseTestaurants = [];
  inizializeRequest(
    restaurantsUrl,
    {},
    'json',
    'GET',
    [],
    function(response) {
      responseTestaurants = response;
      restaurantsDownloaded = true;
    },
    function(response) {}
  );
  return responseTestaurants;
}

function postNewRestaurant(name, category_id, adress, lat, lng) {
  var date;
  if (lat != undefined && lng != undefined) {
    date = {
      name: name,
      category_id: category_id,
      address: adress,
      lat: lat,
      lon: lng,
    };
  } else {
    date = {name: name, category_id: category_id, address: adress};
  }
  inizializeRequest(
    restaurantsUrl,
    date,
    'text',
    'POST',
    {
      'X-USER-TOKEN': localStorage.auth_token,
      'X-USER-EMAIL': localStorage.email,
    },
    function(response) {
      location.reload();
    },
    function(response) {}
  );
}

function getRevieRestaurantReviews(id) {
  var url = restaurantsUrl + '/' + id + '/reviews';
  var reviews = [];
  inizializeRequest(
    url,
    {},
    'json',
    'GET',
    [],
    function(response) {
      reviews = response;
    },
    function(response) {}
  );

  return reviews;
}
