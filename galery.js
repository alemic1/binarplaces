$(document).ready(function() {
  var $galery = $('.galery');
  showPictures($galery);
});

$(window).on('hashchange', function(e) {
  var $galery = $('.galery');
  $galery.html('');
  showPictures($galery);
});

function showPictures($galery) {
  $.each(restaurantsToShow, function(index, restaurant) {
    if (restaurant.picture_url != null) {
      $galery.append(
        '<a href="http://binar-taste-api-staging.builder01.binarapps.com' +
          restaurant.picture_url +
          '" data-lightbox="image-1" data-title="' +
          restaurant.name +
          '"><img src="http://binar-taste-api-staging.builder01.binarapps.com' +
          restaurant.picture_url +
          '"  data-toggle="tooltip" data-placement="left" title="' +
          restaurant.name +
          '" class="galeryImg"></a>'
      );
    }
  });
}

