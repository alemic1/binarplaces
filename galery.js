$(document).ready(function() {
  var $galery = $('.galery');

  $.each(restaurantsToShow, function(index, restaurant) {
    if (restaurant.picture_url != null) {
      $galery.append('<div id="picture_' + restaurant.id + '"></div>');
      var img = decodeImageBase64(
        restaurant.picture_url,
        `picture_${restaurant.id}`
      );
    }
  });
});
