function getAllCategories() {
  var categoriesResponse;
  inizializeRequest(
    categoriesUrl,
    {},
    'json',
    'GET',
    [],
    function(response) {
      categoriesResponse = response;
      categoriesDownloaded = true;
    },
    function() {}
  );
  return categoriesResponse;
}
