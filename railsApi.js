function inizializeRequest(url, data, typeget, successFunction, errorFunction) {
  $.ajax({
    url: `http://binar-taste-api-staging.builder01.binarapps.com/api/v1${url}`,
    data: data,
    type: typeget,
    crossDomain: true,
    dataType: 'json',
    headers: {
      'Cache-Control': 'max-age=1000',
    },
    error: function(response) {
      errorFunction(response);
    },
    success: function(response) {
      successFunction(response); // server response
    },
  });
}
