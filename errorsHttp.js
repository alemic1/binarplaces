function returnResponseForCode(response) {
  switch (response.status) {
    case 400:
      return 'Bledne dane' + response.responseText;
    case 403:
      localStorage.removeItem('auth_token');
      localStorage.removeItem('email');
      return 'Twoja sesja wygasła, zaloguj się ponownie';
    case 404:
      return 'Nie znaleziono';
    case 403:
      return 'Twoja sesja wygasła, zaloguj się ponownie';
    case 422:
      return 'Błędne zapytanie';
    case 500:
      return 'Blad serwera';
    default:
      return 'Cos poszło nie tak';
  }
}
