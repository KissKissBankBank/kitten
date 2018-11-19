window.karl = (function(karl) {
  karl.initToggleClassListener = function() {
    $(document).on('click', '[data-toggle-class]', function() {
      var klass = $(this).data('toggle-class')
      var element = $(this).data('toggle-element')

      $(element).toggleClass(klass)

      // Trigger a custom event in plain JS and passing the DOM node as parameter.
      // This is used only for demo purpose on the styleguide.
      var ev = new CustomEvent('karl:element' + element + ':classToggled', {
        detail: {
          targetElement: $(element)[0],
        },
      })
      window.dispatchEvent(ev)

      return false
    })
  }

  return karl
})(window.karl || {})

$(document).ready(function() {
  window.karl.initToggleClassListener()
})
