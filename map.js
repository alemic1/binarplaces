function initMap() {
  var map = new google.maps.Map(document.getElementById('myMap'), {
    zoom: 6,
    center: {
      lat: 52,
      lng: 19,
    },
  });

  if (restaurantsToShow.length != 0) {
    $.each(restaurantsToShow, function(index, restaurant) {
      if (
        restaurant.location.lat !== null &&
        restaurant.location.lon !== null
      ) {
        var stringInfo = `<div><p> ${restaurant.name} </p>
      <p>${restaurant.location.address}</p>
      <p>${restaurant.rate}</p></div>
      `;

        var infowindow = new google.maps.InfoWindow({
          content: stringInfo,
        });

        var marker = new google.maps.Marker({
          position: {
            lat: parseFloat(restaurant.location.lat),
            lng: parseFloat(restaurant.location.lon),
          },
          map: map,
          title: `${restaurant.name}`,
        });

        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }
    });
  }
}
