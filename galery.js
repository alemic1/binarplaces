$(document).ready(function() {
  var $galery = $('.galery');

  $.each(restaurantsToShow, function(index, restaurant) {
    $galery.append(
      '<a href="restauracja03.jpg" data-lightbox="image-1" data-title="RestaurantName"><img src="restauracja03.jpg" class="galeryImg"></a>'
    );
  });
});
