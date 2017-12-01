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
          '</td><td><div class="stars1" data-toggle="tooltip" data-placement="left" title="' +
          restaurant.rate +
          '"><select class="stars" ><option value="1">1</option> <option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></td></tr>'
      );
      initializeStarRating(restaurant.rate);
      $('.stars1').on('click', function() {
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
  $.each(rates, function(index, rate) {
    var date = rate.created_at.split('-').reverse();
    date[1]--;
    message = moment(date).fromNow();

    $('.rate').append(
      '<tr><td>' +
        rate.username +
        '</td><td>' +
        rate.rate +
        '</td><td><span  data-toggle="tooltip" data-placement="bottom" title="' +
        message +
        '">' +
        rate.created_at +
        '</span></td><td>' +
        rate.text +
        '</td></tr>'
    );
  });
}
