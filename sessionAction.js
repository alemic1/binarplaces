function singInUser(email, password) {
  inizializeRequest(
    singInUrl,
    {email: email, password: password},
    'POST',
    [],
    function(response) {
      localStorage.setItem('email', email);
      localStorage.setItem('auth_token', response.auth_token);
      location.reload();
    },
    function(response) {}
  );
}

function singUpUser(email, password, confirmPassword, userName) {
  inizializeRequest(
    singUPUrl,
    {
      email: email,
      password: password,
      password_confirmation: confirmPassword,
      name: userName,
    },
    'test',
    'POST',
    [],
    function(response) {},
    function(response) {
      console.log('blad rejestracji');
    }
  );
}

function getLoggedUser() {
  var loggedUser;
  inizializeRequest(
    loggedUserUrl,
    {},
    'json',
    'GET',
    {
      'X-USER-TOKEN': localStorage.auth_token,
      'X-USER-EMAIL': localStorage.email,
    },
    function(response) {
      loggedUser = response;
    },
    function(response) {}
  );
}
