jQuery.validator.setDefaults({
  debug: true,
  success: 'valid',
});

$(function() {
  $('#datepicker').datepicker();
});

$.datepicker.setDefaults({
  showOn: 'both',
  buttonImageOnly: true,
  buttonImage: 'calendar.gif',
  buttonText: 'Calendar',
});

$(document).ready(function() {
  $('#addRateForm').validate({
    rules: {
      user: {
        required: true,
        minlength: 5,
        maxlength: 50,
      },
      email: {
        required: true,
      },
      rate: {
        required: true,
        min: 1,
        max: 5,
      },
      contentRate: {
        maxlength: 100,
      },
    },
  });

  $('.userDetails').append(
    '<label for="user">Użytwkonik</label><input type="text" class="form-control" id="user" name="user" placeholder="Nazwa Uzytkowniak"><br><label for="email">Adres email</label><p class="form-control-static">' +
      localStorage.email +
      '</p>'
  );
});
