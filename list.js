function chceckIdCategory() {
  return $(location).attr('href').split('#')[1].split('%')[0];
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
  if (id != '')
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
  $('.modal-title').html('Oceny dla lokalu ' + local.name);
  $('.modal-body').html(
    '<table class="table rate"><th>Uzytkownik</th><th>Ocena</th><th>Data</th><th>tres</th></table>');
  $.each(rates, (i,r)=>{
    $(".rate").append("<tr><td>" + r.username + "</td><td>" + r.rate + "</td><td>"+ r.created_at + "</td><td>" + r.text + "</td></tr>")
  })
  
}
