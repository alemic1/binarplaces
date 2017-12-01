function getAllRestaurants() {
  var responseTestaurants;
  inizializeRequest(
    restaurantsUrl,
    {},
    'GET',
    function(response) {
      responseTestaurants = response;
      restaurantsDownloaded = true;
    },
    function(response) {}
  );
  return responseTestaurants;
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

function getRevieRestaurantReviews(id) {
  var url = restaurantsUrl + '/' + id + '/reviews';
  var reviews;
  inizializeRequest(
    url,
    {},
    'GET',
    function(response) {
      reviews = response;
    },
    function(response) {
      console.log(response);
    }
  );

  return reviews;
}
