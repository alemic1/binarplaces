var singUPUrl = '/user/sign-up'; //params: email, name, password, password_confirmed
var singInUrl = '/user/sign-in'; //params: email, password; response: {auth_token: “827h348uh2”, valid_until: 1511427170}
var loggedUserUrl = '/user'; // response: {id: 1, name: “Donald Trump”, email: “” }
var categoriesUrl = '/categories'; //response: [{id: 1, name: ‘kuchnia chińska’, count: <ilośc lokali>}, ...]
var restaurantsUrl =
  '/places'; /*
params: lat (opcjonalny), lng (opcjonalny), max_distance (opcjonalny) 
albo wszystkie albo żaden (w przeciwnym razie Bad Request)

response: [{id: “”, name: “”, category_id: 1, location: {address: “”, lat: 52.1, lng: 19.5}, rate: 4.5}, ...]

POST /places - dodawanie lokalu, wymaga zalogowania
        params: name, category_id, address, lat (opcjonalne), lng (opcjonalne), photo
        no response (201)

*/

var restaurantUrl = '/places/:id'; //
var restaurantReviewsUrl = '/places/:id/reviews'; //get - pobiera post -tworzy

function inizializeRequest(
  url,
  data,
  type,
  doneFunction,
  failFunction,
  alwaysFunction
) {
  $.ajax({
    url: ` ${url}`,
    data: data,
    type: `${type}`,
    dataType: 'json',
  })
    .done(function(json) {
      doneFunction();
    })
    .fail(function(xhr, status, errorThrown) {
      failFunction();
    })
    .always(function(xhr, status) {
      alwaysFunction();
    });
}
