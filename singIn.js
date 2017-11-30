$(document).ready(function() {
  var $SingInButtom = $('#singInButton');
  var $SingInModal = $('#singInModal');
  var $SingUpButton =$('#singUpButton');
  var $SingUpModal = $('singUpModal');
  var $SingInSingUp = $('.singInSingUp')
  var $SingOut = $('.singOut')
  var $AddRateButton = $('addRateButton')

  $SingInButtom.on('click', function() {
    $SingInModal.modal('show');
    localStorage.setItem('auth_token', 'aa');
    localStorage.setItem('email', 'aaaa@ccc');
    location.reload();
  });

  $SingUpButton.on('click', function() {
    $SingUpModal.modal('show');
  });
  if (localStorage.auth_token != undefined && localStorage.auth_token != '') {
    $SingInSingUp.html(
      '<p>Jestes zalogowany jako ' +
        localStorage.email +
        '   <span class="singOut">Wyloguj sie</span></p>'
    );
    $SingOut.on('click', function() {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      location.reload();
    });
  } else {
    $AddRateButton.prop('disabled', 'disabled');
  }
});
