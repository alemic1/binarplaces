$(document).ready(function() {
  var $SingInButtom = $('#singInButton');
  var $SingInModal = $('#singInModal');
  var $SingInSingUpSection = $('.singInSingUp');
  var $SingIn = $('.singIn');
  var $AddRestaurantButton = $('.addRestaurantButton');

  var $AddRateButton = $('.addRateButton');

  $SingInButtom.on('click', function() {
    $SingInModal.modal('show');
  });

  if (localStorage.auth_token != undefined && localStorage.auth_token != '') {
    $SingInSingUpSection.html(
      '<p>Jestes zalogowany jako ' +
        localStorage.email +
        '   <span class="singOut">Wyloguj sie</span></p>'
    );
    var $SingOut = $('.singOut');
    $SingOut.on('click', function() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      location.reload();
    });
  } else {
    $AddRateButton.prop('disabled', 'disabled');
    $AddRestaurantButton.prop('disabled', 'disabled');
  }
  $SingIn.on('click', function() {
    localStorage.setItem('auth_token', 'aa');
    localStorage.setItem('email', 'aaaa@ccc');
    location.reload();
  });
});
