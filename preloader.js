$(document).ready(function() {
  if (restaurantsDownloaded && categoriesDownloaded) {
    $('.sk-fading-circle').css('display', 'none');
    $('.main').css('display', 'block');
  }
});
