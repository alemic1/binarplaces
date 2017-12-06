function getAllCategories() {
  var categoriesResponse;
  inizializeRequest(
    categoriesUrl,
    {},
    'GET',
    function(response) {
      categoriesResponse = response;
      categoriesDownloaded = true;
    },
    function() {}
  );
  return categoriesResponse;
}
