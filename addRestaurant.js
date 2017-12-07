var addedImgToBase64;

$(document).ready(function() {
  var $addRestaurantModalForm = $('#addRestaurantModalForm');
  $('.addRestaurantButton').on('click', function() {
    setTimeout(function() {
      initMap('searchMap', true);
    }, 300);
    encodeImageFileAsURL();
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
    addNewRestaurant(
      nameRestaurant,
      categoryRestaurant.id,
      adressRestaurant,
      latlngSearchedMap.lat,
      latlngSearchedMap.lng,
      addedImgToBase64
    );
  }
}

function encodeImageFileAsURL() {
  var filesSelected = document.getElementById('imgAddedRestaurant').files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result;
      decodeImageBase64(srcData, 'imgFile');
    };
    fileReader.readAsDataURL(fileToLoad);
  }

  function decodeImageBase64(base64, imgId) {
    var newImage = document.createElement('img');
    newImage.src = base64;
    document.getElementById(imgId).innerHTML = newImage.outerHTML;
  }
}
