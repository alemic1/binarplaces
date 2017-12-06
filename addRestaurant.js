$(document).ready(function() {
  var $addRestaurantModalForm = $('#addRestaurantModalForm');

  $('.addRestaurantButton').on('click', function() {
    setTimeout(function() {
      initSeachMap();
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
  var nameRestaurant = $('#name').val();
  var adressRestaurant = $('#address').val();
  var categoryIndex = $('#category').val();
  var categoryRestaurant = categories.find(function(category) {
    return category.id == categoryIndex;
  });

  if (
    categoryRestaurant != null &&
    nameRestaurant != null &&
    adressRestaurant != null &&
    latlngSearchedMap.lat !== null
  ) {
    //addNewRestaurant(nameRestaurant,categoryRestaurant, adressRestaurant,latlngSearchedMap.lat,latlngSearchedMap.lng)
  }
}
