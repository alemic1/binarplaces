var locals = [
  {
    id: 1,
    name: 'aaa',
    category_id: '1',
    location: {adress: 'asd', lat: 52.1, lng: 19.5},
    rate: 4.5,
  },

  {
    id: 2,
    name: 'bbb',
    category_id: '0',
    location: {adress: 'fgdf', lat: 52.1, lng: 19.5},
    rate: 4.5,
  },

  {
    id: 3,
    name: 'ccc',
    category_id: '3',
    location: {adress: 'asda', lat: 52.1, lng: 19.5},
    rate: 4.5,
  },

  {
    id: 4,
    name: 'dd',
    category_id: '3',
    location: {adress: 'aasda', lat: 52.1, lng: 19.5},
    rate: 4.5,
  },
];

function chceckIdCategory() {
  return $(location).attr('href').split('#')[1].split('%')[0];
}

function showCategory() {
  if (id != '')
    var localsToShow = locals.filter(l => {
      return l.category_id === id;
    });
  else var localsToShow = locals;

  if (localsToShow.length == 0) $('#list').html('Brak lokali w tej kategorii');
  else {
    $('#list').html(
      '<table class="table locals"><th>Nazwa</th><th>Adress</th><th>Oceny</th></table>'
    );
    $.each(localsToShow, (i, l) => {
      $('.locals').append(
        '<tr><td>' +
          l.name +
          '</td><td>' +
          l.adress +
          '</td><td>' +
          l.rate +
          '</tr>'
      );
    });
  }
}

var id = '';
id = chceckIdCategory();
console.log(id);
if (id == '') console.log('mam');
showCategory();

$(window).on('hashchange', function(e) {
  id = chceckIdCategory();
  showCategory();
});
