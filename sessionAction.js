function singInUser(email, password) {
  inizializeRequest(
    singInUrl,
    {email: email, password: password},
    'POST',
    function(response) {
      localStorage.setItem('email', email);
      localStorage.setItem('auth_token', response);
    },
    function(response) {
      alert('blad logowania');
      console.log(response);
    }
  );
}

function singUpUser(email, password, confirmPassword, userName) {
  inizializeRequest(
    singUPUrl,
    {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      useName: userName,
    },
    'POST',
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
    'GET',
    function(response) {
      loggedUser = response;
    },
    function(response) {}
  );
}
