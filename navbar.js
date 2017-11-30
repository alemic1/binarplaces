var categoryFiveCounter = 0;
var categoryDropdownCounter = 0;

var categoriesSort = categories.sort(function(a, b) {
  return b.count - a.count;
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

var navbarDropMenu = categoryInDropdown().map(function(category) {
  return '<li><a href="#' + category.id + '">' + category.name + '</a></li>';
});

$(document).ready(function() {
  $.each(navbarCategory, function(index, category) {
    $('.links').append(category);
  });
  $.each(navbarDropMenu, function(index, category) {
    $('.dropdown-menu').append(category);
  });
});
