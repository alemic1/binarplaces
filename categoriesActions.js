function getAllCategories() {
  inizializeRequest(
    categoriesUrl,
    {},
    'GET',
    function(response) {
      categories = response;
      categoriesIsDownload = true;
    },
    function() {}
  );
}
