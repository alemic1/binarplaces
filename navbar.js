var categoriesSort = categories.sort(function(a, b) {
  return b.count - a.count;
});

var categoryFiveCounter = 0;

var firstFiveCategory = categoriesSort.filter(function(category) {
  categoryFiveCounter++;
  return categoryFiveCounter <= 5;
});
var categoryDropdownCounter = 0;
var categoryInDropdown = categoriesSort.filter(function(category) {
  categoryDropdownCounter++;
  return categoryDropdownCounter > 5;
});

var navbarCategory = firstFiveCategory.map(function(category) {
  return (
    '<p class="navbar-text text-capitalize"><a class="navbar-link" href="#' +
    category.id +
    ' ">' +
    category.name +
    '</a></p> '
  );
});

var navbarDropTop5 = firstFiveCategory.map(function(category) {
  return (
    '<li><a class="text-capitalize" href="#' +
    category.id +
    '">' +
    category.name +
    '</a></li>'
  );
});

var navbarDropMenu = categoryInDropdown.map(function(category) {
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
