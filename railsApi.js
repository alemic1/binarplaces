function inizializeRequest(url, data, typeget, successFunction, errorFunction) {
  $.ajax({
    url: `http://binar-taste-api-staging.builder01.binarapps.com/api/v1${url}`,
    data: data,
    type: typeget,
    crossDomain: true,
    dataType: 'json',
    async: false,
    headers: {
      'Cache-Control': 'max-age=1000',
    },
    error: function(response) {
      console.log(response);
      $(document).ready(function() {
        var message = returnResponseForCode(response);
        var popup = new $.Popup();
        popup.open(`<h1>${message}</h1>`, 'html');
      });
    },
    success: function(response) {
      successFunction(response);
    },
  });
}
