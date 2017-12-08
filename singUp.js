$(document).ready(function() {
  var $singUpSendButton = $('.singUpSendButton');
  var $SingUpButton = $('#singUpButton');
  var $SingUpModal = $('#singUpModal');
  var $singUpForm = $('#singUpForm');

  $SingUpButton.on('click', function() {
    $SingUpModal.modal('show');
  });

  $singUpSendButton.on('click', function() {
    $singUpForm.submit();

    var email = $('#emailRegistration').val();
    var password = $('#passwordRegistration').val();
    var confirmPassword = $('#confirmPasswordRegistration').val();
    var user = $('#userRegistration').val();

    if ($singUpForm.valid()) {
      singUpUser(email, password, confirmPassword, user);
    }
  });

  $singUpForm.validate({
    rules: {
      user: {
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      email: {
        required: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
      confirmPassword: {
        required: true,
        minlength: 6,
        equalTo: '#passwordRegistration',
      },
    },
  });
});
