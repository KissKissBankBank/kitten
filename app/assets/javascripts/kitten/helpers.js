// Helper to toggle a class on click.
//
// Usage:
//    <div class='foo'>…</div>
//    <a data-toggle-element='.foo'
//       data-toggle-class='bar' …>…</a>
//
// Result after clicking:
//    <div class='foo bar'>…</div>

$(document).on('click', '[data-toggle-class]', function () {

  var klass = $(this).data('toggle-class');
  var element = $(this).data('toggle-element');

  $(element).toggleClass(klass);

  return false;
});
