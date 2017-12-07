$(document).ready(function() {
  var $editRate = $('.glyphicon-pencil');
  var $deleteRate = $('.glyphicon-remove');

  $deleteRate.on('click', function() {
    var popUp = new $.Popup();
    popup.open(
      `<h1>Chcesz usunac te recenzje?</h1><button>Usun></button><button>Nie usuwaj</button>`,
      'html'
    );
  });
});
