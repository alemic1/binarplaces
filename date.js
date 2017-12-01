restaurants = getAllRestaurants();
categories = getAllCategories();

restaurants = restaurants.filter(function(restaurant) {
  return restaurant.id < 11;
});

categories = categories.filter(function(category) {
  return category.id < 8;
});
