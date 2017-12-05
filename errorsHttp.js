function returnResponseForCode(response) {
  switch (response.status) {
    case 404:
      return 'Nie znaleziono';
    default:
      return 'Cos poszło nie tak';
  }
}
