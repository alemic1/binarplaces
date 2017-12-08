var marker;

function initMap(nameClass, isSearchBox) {
  isSearchBox = typeof isSearchBox !== undefined ? isSearchBox : false;

  var map = new google.maps.Map(document.getElementById(nameClass), {
    zoom: 6,
    center: {
      lat: 52,
      lng: 19,
    },
  });

  if (isSearchBox) {
    createGeocoder(map);
  } else {
    createMarkers(map);
  }
}

function createMarkers(map) {
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

function createGeocoder(map) {
  var geocoder = new google.maps.Geocoder();
  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  if (marker != null) marker.setMap(null);
  var address = document.getElementById('address').value;
  geocoder.geocode({address: address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
      latlngSearchedMap = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
      };
    } else {
      var popUp = new $.Popup();
      popUp.open(`<h1>Nie znaleziono takiego adresu}</h1>`, 'html');
    }
  });
}
