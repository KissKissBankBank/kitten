// Toggle elemnts with `data-overgrid` when calling cltr+g.
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

