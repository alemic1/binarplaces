function getAllCategories() {
  var categoriesResponde;
  inizializeRequest(
    categoriesUrl,
    {},
    'GET',
    function(response) {
      categoriesResponde = response;
      categoriesIsDownload = true;
    },
    function() {}
  );
  return categoriesResponde;
}
