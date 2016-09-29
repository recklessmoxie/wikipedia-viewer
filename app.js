var query = '';
var baseURL = 'https://en.wikipedia.org/wiki/'

function emptyInput() {
  $('#searchResults').empty();
}

$('#getIt').hide();

$('#searchText').click(function () {
  $('#getIt').show();
});

// Help writing portion below provided courtesy of: http://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery//


$('#searchText').keyup(function (e) {
  if (e.which == 13) {
    $('#getIt').click();
    e.preventDefault();
  }
});

$('#getIt').click(function () {
  emptyInput();
  $('#results').removeClass('results').addClass('animated slideInUp');
  query = $('#searchText').val();
  var queryURL =
    'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=' +
    query + '&callback=?'

  $.getJSON(queryURL, function (data) {
    for (var n = 0; n < 10; n++) {
      var term = data.query.search[n].title,
        snip = data.query.search[n].snippet,
        titleLink = '<a class="title" href="' + baseURL + term +
        '" target="_blank">' +
        term + '</a>';
      $('#searchResults').append('<dt>' +
        titleLink + '</dt>');
      $('#searchResults').append('<dd class="snip">' + snip +
        ' &hellip;' + '</dd>');
    }
  });
})
