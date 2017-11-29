function getAllCategories() {
  var categories;
  inizializeRequest(categories, {}, 'GET', function(response) {
    categories = response;
  });
  return categories;
}
