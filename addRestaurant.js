$(document).ready(function() {
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
    $('#addRestaurantModalForm').submit();
  });

  $('#addRestaurantModalForm').validate({
    rules: {
      name: {
        required: true,
      },
      town: {
        required: true,
      },
      street: {
        required: true,
      },
      number: {
        required: true,
        min: 1,
      },
    },
  });
});
