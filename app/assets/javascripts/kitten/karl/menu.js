window.karl = (function(karl) {
  var $menu = $('.karl-Menu')

  karl.initMenu = function() {
    $('[data-menu]').click(function() {
      // Simulate menu closing on XS media query with a `is-clicked` class.
      if ($menu.hasClass('is-opened') && $menu.hasClass('is-clicked')) {
        $menu.removeClass('is-clicked');
      } else {
        $menu.toggleClass('is-opened');
        $menu.removeClass('is-clicked');
      }
    });

    $('.karl-Menu__link').click(function(){
      $menu.addClass('is-clicked');
    })
  }

  return karl
})(window.karl || {})


// Dropdown list
var subItems = $("[data-karl-menu] a")

$(document).ready(function(){
  subItems.each(function(){
    var $handle  = $(this)

    // Parents
    if ($handle.next('ul').find('li').length > 0) {
      $handle.addClass('with-arrow');

      $handle.on("click", function(){
        $handle.toggleClass("is-opened");
        $handle.siblings("ul").toggleClass('is-opened');
      });

    // Child
    } else {
      $handle.on("click", function(){
        $('.is-selected').removeClass('is-selected');
        $handle.addClass('is-selected');
      });
    }
  });
});


