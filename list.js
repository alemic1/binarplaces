var idRestaurantClicked;

function initializeStarRating(val) {
  $('.stars').barrating({
    theme: 'fontawesome-stars-o',
    initialRating: val,
    hoverState: false,
    readonly: true,
  });
}

function showCategory() {
  if (restaurantsToShow.length == 0) {
    $('#list').html('Brak lokali w tej kategorii');
  } else {
    $('#list').html(
      '<div class="table-responsive "><table class="table table-striped"><thead><tr><th>Nazwa</th><th>Adress</th><th>Oceny</th></tr></thead><tbody class="restaurants"></tbody></table></div>'
    );
    $.each(restaurantsToShow, function(index, restaurant) {
      $('.restaurants').append(
        '<tr><td>' +
          restaurant.name +
          '</td><td>' +
          restaurant.location.address +
          '</td><td><div class="stars1 stars' +
          restaurant.id +
          '" data-toggle="tooltip" data-placement="left" title="' +
          restaurant.rate +
          '"><select class="stars" ><option value="1">1</option> <option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></td></tr>'
      );

      initializeStarRating(restaurant.rate);
      $('.stars' + restaurant.id).on('click', function() {
        idRestaurantClicked = restaurant.id;
        rates = getRevieRestaurantReviews(idRestaurantClicked);
        $('#myModal').modal('show');
        createModal(restaurant);
      });
    });
  }
}

function createModal(restaurant) {
  $('.ratesModalTitle').html('Oceny dla lokalu ' + restaurant.name);
  $('.ratesModalBody').html(
    '<table class="table"><thead><tr><th>Uzytkownik</th><th>Ocena</th><th>Data</th><th>tres</th></tr></thead><tbody class="rate"></tbody></table>'
  );
  $('.rate').sortable();
  $.each(rates, function(index, rate) {
    message = moment(rate.created_at).fromNow();
    $('.rate').append(
      '<tr><td>' +
        rate.username +
        '</td><td>' +
        rate.rate +
        '</td><td><span  data-toggle="tooltip" data-placement="bottom" title="' +
        message +
        '">' +
        moment(rate.created_at).format('DD-MM-YYYY') +
        '</span></td><td>' +
        rate.content +
        '</td><td class="deleteEdit"></td></tr>'
    );
    user = getLoggedUser();
    if (user.name == rate.username) {
      $('.deleteEdit').html(
        '<span class="glyphicon glyphicon-pencil" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Edytuj"></span><span class="glyphicon glyphicon-remove" aria-hidden="true" data-toggle="tooltip" data-placement="bottom" title="Usuń"></span>'
      );

      var $editRate = $('.glyphicon-pencil');
      var $deleteRate = $('.glyphicon-remove');

      $deleteRate.on('click', function() {
        var popUp = new $.Popup();
        popUp.open(
          `<h1>Chcesz usunac te recenzje?</h1><button type="button" class="btn btn-danger">Usun</button><button type="button" class="btn btn-primary">Nie Usuwaj</button>`,
          'html'
        );
      });
    }
  });
}
