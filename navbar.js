var categories = [
  {id: 0, name: 'kuchania chinska', count: 10},
  {id: 1, name: 'kuchania wietnamska', count: 3},
  {id: 2, name: 'kuchania indyjska', count: 4},
  {id: 3, name: 'Pizzerie', count: 10},
  {id: 4, name: 'Kawiarnie', count: 6},
  {id: 5, name: 'Bary', count: 2},
];

var locals = [
  {
    id: 1,
    name: 'aaa',
    category_id: 1,
    location: {adress: '', lat: 52.1, lng: 19.5},
    rate: 4.5,
  },
];

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
