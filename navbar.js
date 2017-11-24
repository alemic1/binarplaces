var categoriesSort = categories.sort((a, b) => {
  return b.count - a.count;
});

var tmp = 0;

var firstFiveCategory = categoriesSort.filter(c => {
  tmp++;
  return tmp <= 5;
});
var tmp1 = 0;
var inne = categoriesSort.filter(c => {
  tmp1++;
  return tmp1 > 5;
});

var navbarCategory = firstFiveCategory.map(c => {
  return (
    '<p class="navbar-text "><a class="navbar-link" href="#' +
    c.id +
    ' ">' +
    c.name +
    '</a></p> '
  );
});

var navbarDropMenu = inne.map(c => {
  return '<li><a href="#' + c.id + '">' + c.name + '</a></li>';
});

$(document).ready(function() {
  $.each(navbarCategory, (i, c) => {
    $('.links').append(c);
  });
  $.each(navbarDropMenu, (i, c) => {
    $('.dropdown-menu').append(c);
  });
});
