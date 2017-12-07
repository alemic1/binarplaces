$(document).ready(function() {
  var $addRestaurantModalForm = $('#addRestaurantModalForm');

  $('.addRestaurantButton').on('click', function() {
    setTimeout(function() {
      initMap('searchMap', true);
    }, 300);
  });

  jQuery.validator.setDefaults({
    debug: true,
    success: 'valid',
  });

  $.each(categories, function(index, category) {
    $('.categorySelect').append(
      `<option value="${category.id}">${category.name}</option>`
    );
  });

  $('.addRestaurantButtonModal').on('click', function() {
    $addRestaurantModalForm.submit();
    addRestaurant();
  });

  $addRestaurantModalForm.validate({
    rules: {
      name: {
        required: true,
      },
    },
  });
});

function addRestaurant() {
  var $addRestaurantModalForm = $('#addRestaurantModalForm');

  var nameRestaurant = $('#name').val();
  var adressRestaurant = $('#address').val();
  var categoryIndex = $('#category').val();
  var categoryRestaurant = categories.find(function(category) {
    return category.id == categoryIndex;
  });

  if ($addRestaurantModalForm.valid() && latlngSearchedMap != null) {
    postNewRestaurant(
      nameRestaurant,
      categoryRestaurant.id,
      adressRestaurant,
      latlngSearchedMap.lat,
      latlngSearchedMap.lng
    );
  }
}
