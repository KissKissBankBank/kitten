// TODO: When js files will be packed with Babel and Webpack, we have to migrate
// this module into an ES6 module.
window.karl = (function(karl) {

  // Toggle an element with the keyboard.
  //
  // For example, to show and hide an element by calling ctrl+a:
  //
  //     <div data-display-shortcut="a" style="display: none">
  //       You pressed ctrl+a
  //     </div>
  //
  karl.displayShortcut = function() {
    $(window).on('keydown', function(e) {
      if (!e.ctrlKey)
        return

      var char = String.fromCharCode(e.keyCode).toLowerCase()
      $('[data-display-shortcut="' + char + '"]').toggle()
    })
  }

  return karl
})(window.karl || {})
