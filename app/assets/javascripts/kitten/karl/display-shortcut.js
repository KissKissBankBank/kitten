// TODO: When js files will be packed with Babel and Webpack, we have to migrate
// this module into an ES6 module.
window.karl = (function(karl) {
  karl.displayShortcut = function() {
    $(window).on('keydown', function (e) {
      if (!event.ctrlKey) return;
      var char = String.fromCharCode(e.keyCode).toLowerCase();
      $('[data-display-shortcut="'+char+'"]').toggle()
    });
  }

  return karl
})(window.karl || {})
