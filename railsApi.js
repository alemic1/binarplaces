function inizializeRequest(
  url,
  data,
  dataType,
  typeget,
  headers,
  successFunction
) {
  $.ajax({
    url: `http://binar-taste-api-staging.builder01.binarapps.com${url}`,
    data: data,
    type: typeget,
    crossDomain: true,
    async: false,
    headers: {
      'Cache-Control': 'max-age=1000',
      ...headers,
    },
    dataType: dataType,
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
