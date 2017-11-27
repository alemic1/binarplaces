function chceckIdCategory() {
  var splitOne = $(location).attr('href').split('#');
  if (splitOne[1] != null) splitOne = splitOne[1].split('%')[0];
  else splitOne = -1;

  return splitOne;
}

function makingStars(val) {
  $('.stars').barrating({
    theme: 'fontawesome-stars-o',
    initialRating: val,
    hoverState: false,
    readonly: true,
  });
}

function showCategory() {
  if (id != -1)
    var localsToShow = locals
      .filter(l => {
        return l.category_id === id;
      })
      .sort((a, b) => {
        return b.rate - a.rate;
      });
  else
    var localsToShow = locals.sort((a, b) => {
      return b.rate - a.rate;
    });

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
          l.location.adress +
          '</td><td><div class="stars1"><select class="stars" ><option value="1">1</option> <option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></td></tr>'
      );
      makingStars(l.rate);
      $('.stars1').on('click', function() {
        $('#myModal').modal('show');
        createModal(l);
      });
    });
  }
}

var id = '';

$(document).ready(function() {
  id = chceckIdCategory();

  showCategory();
});

$(window).on('hashchange', function(e) {
  id = chceckIdCategory();
  showCategory();
});

function createModal(local) {
  $('.ratesModalTitle').html('Oceny dla lokalu ' + local.name);
  $('.ratesModalBody').html(
    '<table class="table rate"><th>Uzytkownik</th><th>Ocena</th><th>Data</th><th>tres</th></table>'
  );
  $.each(rates, (i, r) => {
    var date = r.created_at.split('-').reverse();
    var now = moment().format('YYYY-MM-DD').split('-');
    var diffDays = moment(now).diff(date, 'days');
    var diffMonths = moment(now).diff(date, 'month');
    var diffYears = moment(now).diff(date, 'year');
    var message = '';
    if (diffDays == 1) {
      message = 'wczoraj';
    } else if (diffDays < 30) {
      message = diffDays + ' dni temu';
    } else if (diffMonths == 1) {
      message = 'miesiac temu';
    } else if (diffMonths < 12) {
      message = diffMonths + ' miesiecy temu';
    } else if (diffYears == 1) {
      message = 'rok temu';
    } else {
      message = diffYears + ' lata temu';
    }
    $('.rate').append(
      '<tr><td>' +
        r.username +
        '</td><td>' +
        r.rate +
        '</td><td><span  data-toggle="tooltip" data-placement="bottom" title="' +
        message +
        '">' +
        r.created_at +
        '</span></td><td>' +
        r.text +
        '</td></tr>'
    );
  });
}
