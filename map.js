function initMap() {
  if (restaurantsToShow.length != 0) {
    var map = new google.maps.Map(document.getElementById('myMap'), {
      zoom: 13,
      center: {
        lat: restaurantsToShow[0].location.lat,
        lng: restaurantsToShow[0].location.lng,
      },
    });

    $.each(restaurantsToShow, function(index, restaurant) {
      var stringInfo = `<div><p> ${restaurant.name} </p>
      <p>${restaurant.location.adress}</p>
      <p>${restaurant.rate}</p></div>
      `;

      var infowindow = new google.maps.InfoWindow({
        content: stringInfo,
      });

      var marker = new google.maps.Marker({
        position: {lat: restaurant.location.lat, lng: restaurant.location.lng},
        map: map,
        title: `${restaurant.name}`,
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    });
  } else {
    var map = new google.maps.Map(document.getElementById('myMap'), {
      zoom: 4,
      center: {
        lat: 52,
        lng: 19,
      },
    });
  }
}
