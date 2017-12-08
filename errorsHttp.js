function returnResponseForCode(response) {
  switch (response.status) {
    case 400:
      return 'Bledne dane' + response.responseText;
    case 401:
      return 'Musisz potwierdzic email przed zalogowaniem';
    case 403:
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      return 'Twoja sesja wygasła, zaloguj się ponownie';
    case 404:
      return 'Nie znaleziono';
    case 403:
      return 'Twoja sesja wygasła, zaloguj się ponownie';
    case 422:
      var message = 'Błędne dane: ';
      if (
        response.responseText.includes('name') &&
        response.responseText.includes('has already been taken')
      ) {
        message = message + ' nazwa jest juz zajeta ';
      }
      if (
        response.responseText.includes('email') &&
        response.responseText.includes('has already been taken')
      ) {
        message = message + ' email jest juz zajety ';
      }
      if (
        response.responseText.includes('password') &&
        response.responseText.includes('is invalid')
      ) {
        message = message + 'niepoprawne haslo';
      }
      if (
        response.responseText.includes('user') &&
        response.responseText.includes('is invalid')
      ) {
        message = message + 'niepoprawny email';
      }

      return message;
    case 500:
      return 'Blad serwera';
    default:
      return 'Cos poszło nie tak';
  }
}
