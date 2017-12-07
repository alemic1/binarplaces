$(document).ready(function() {
  var $galery = $('.galery');

  $.each(restaurantsToShow, function(index, restaurant) {
    $galery.append('<img src="./restauracja03.jpg" class="galeryImg">');
  });
});
