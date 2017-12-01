$(document).ready(function() {
  if (restaurantsDownloaded && categoriesDownloaded) {
    $('.sk-fading-circle').css('display', 'none');
    $('.bodyApp').css('display', 'block');
  }
});
