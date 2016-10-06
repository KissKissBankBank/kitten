window.karl = (function(karl) {

  function isOvergridOn() {
    return !!sessionStorage.getItem('karl-overgrid')
  }

  function showOvergrid() {
    sessionStorage.setItem('karl-overgrid', 'on')
    $('[data-overgrid]').show()
  }

  function hideOvergrid() {
    sessionStorage.removeItem('karl-overgrid')
    $('[data-overgrid]').hide()
  }

  // Toggle an element with the keyboard.
  //
  // For example, to show and hide an element by calling ctrl+a:
  //
  //     <div data-overgrid>
  //       You pressed ctrl+a
  //     </div>
  //
  karl.initOvergrid = function() {
    if (isOvergridOn())
      showOvergrid()

    $(window).on('keydown', function(e) {
      var char = String.fromCharCode(e.keyCode).toLowerCase()
      if (!e.ctrlKey || char != 'g')
        return

      if (isOvergridOn())
        hideOvergrid()
      else
        showOvergrid()
    })
  }

  return karl
})(window.karl || {})

