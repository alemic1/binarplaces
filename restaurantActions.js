function getAllRestaurants() {
  var responseTestaurants;
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

function addNewRestaurant(name, category_id, adress, lat, lng, photo) {
  var date = {
    name: name,
    category_id: category_id,
    address: adress,
  };

  if (lat != undefined && lng != undefined) {
    date = {
      ...date,
      lat: lat,
      lon: lng,
    };
  }

  if (photo != null) {
    date = {
      ...date,
      picture: photo,
    };
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
    'json',
    'GET',
    [],
    function(response) {
      reviews = response;
    },
    function(response) {
      console.log(response);
    }
  );

  return reviews;
}

function addNewReview(id, rate, content) {
  var url = restaurantsUrl + '/' + id + '/reviews';
  var data = {
    rate: rate,
    content: content,
  };
  inizializeRequest(
    url,
    data,
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
