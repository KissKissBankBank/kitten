// Helper for toggle a class on click.
//
// Usage:
//    <div class='foo'>…</div>
//    <a data-toggle-element='.foo'
//       data-toggle-class='bar' …>…</a>
//
// Result:
//    <div class='foo bar'>…</div>

$('[data-toggle-class]').each(function () {

  $(this).on('click', function () {
    var klass = $(this).data('toggle-class');
    var element = $(this).data('toggle-element');

    $(element).toggleClass(klass);

    return false;
  });
});
