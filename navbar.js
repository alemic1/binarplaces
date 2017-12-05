var categoryFiveCounter = 0;
var categoryDropdownCounter = 0;

var categoriesSort = categories.sort(function(a, b) {
  return b.places_count - a.places_count;
});

var firstFiveCategory = function() {
  categoryFiveCounter = 0;
  var categoryResult = categoriesSort.filter(function(category) {
    categoryFiveCounter++;
    return categoryFiveCounter <= 5;
  });
  return categoryResult;
};

var categoryInDropdown = function() {
  categoryDropdownCounter = 0;
  var categoryResult = categoriesSort.filter(function(category) {
    categoryDropdownCounter++;
    return categoryDropdownCounter > 5;
  });
  return categoryResult;
};

var navbarCategory = firstFiveCategory().map(function(category) {
  return (
    '<p class="navbar-text "><a class="navbar-link" href="#' +
    category.id +
    ' ">' +
    category.name +
    '</a></p> '
  );
});

var navbarDropTop5 = firstFiveCategory().map(function(category) {
  return (
    '<li><a class="text-capitalize" href="#' +
    category.id +
    '">' +
    category.name +
    '</a></li>'
  );
});

var navbarDropMenu = categoryInDropdown().map(function(category) {
  return (
    '<li><a class="text-capitalize" href="#' +
    category.id +
    '">' +
    category.name +
    '</a></li>'
  );
});

$(document).ready(function() {
  $.each(navbarCategory, function(index, category) {
    $('.navbarLinks').append(category);
  });
  $.each(navbarDropTop5, function(index, category) {
    $('.top5').append(category);
  });
  $.each(navbarDropMenu, function(index, category) {
    $('.notTop5').append(category);
  });
});
