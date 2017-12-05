function returnResponseForCode(response) {
  switch (response.status) {
    case 404:
      return 'Nie znaleziono';
    case 403:
      return 'Nie masz dostępu do tej funkcji';
    case 422:
      return 'Twoja sesja wygasła, zaloguj się ponownie';
    case 500:
      return 'Blad serwera';
    default:
      return 'Cos poszło nie tak';
  }
}
