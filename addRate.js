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
});
