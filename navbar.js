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
    '<p class="navbar-text "><a class="navbar-link" href="#' +
    category.id +
    ' ">' +
    category.name +
    '</a></p> '
  );
});

var navbarDropMenu = categoryInDropdown.map(function(category) {
  return '<li><a href="#' + category.id + '">' + category.name + '</a></li>';
});

$(document).ready(function() {
  $.each(navbarCategory, function(index, category) {
    $('.navbarLinks').append(category);
  });
  $.each(navbarDropMenu, function(index, category) {
    $('.dropdown-menu').append(category);
  });
});
