function initSeachMap() {
  var map = new google.maps.Map(document.getElementById('searchMap'), {
    zoom: 8,
    center: {lat: 52, lng: 19},
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({address: address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location,
      });
      latlngSearchedMap = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lat(),
      };
    } else {
      $('.messageErrorAddress').html(`Nie znaleziono takiego adresu`);
    }
  });
}
