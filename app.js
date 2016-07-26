$('#search-submit').click(function () {
  $('#click').toggle();
});

$('#search-text').click(function () {
  $('#click').hide();
});

$('#click').click(function () {
  $('#click').hide();
  $('#search-text').toggle();
});
