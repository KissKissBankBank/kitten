window.karl = (function(karl) {
  karl.initMenu = function() {
    $('[data-menu]').click(function(){
      $('.karl-Container').toggleClass('menu-isOpened');
    })
  }

  return karl
})(window.karl || {})
