window.karl = (function(karl) {
  var $menu = $('[data-karl-menu]')
  var subItems = $('[data-karl-menu-list] a')

  karl.initMenu = function() {

    // Manage menu opening
    $('[data-menu]').click(function() {
      // Simulate menu closing on XS media query with a `is-clicked` class.
      if ($menu.hasClass('is-opened') && $menu.hasClass('is-clicked')) {
        $menu.removeClass('is-clicked')
      } else {
        $menu.toggleClass('is-opened')
        $menu.removeClass('is-clicked')
      }
    })

    // Manage menu closing on xs media query.
    $("[data-karl-menu-link]").click(function(){
      $menu.addClass('is-clicked')
    })

    // Manage menu list dropdowns
    subItems.each(function(){

      var $handle  = $(this)

      // Parents
      if ($handle.next('ul').find('li').length > 0) {
        $handle.addClass('with-arrow')

        $handle.on("click", function(){
          $handle.toggleClass("is-opened")
          $handle.siblings("ul").toggleClass('is-opened')
        })

      // Child
      } else {
        $handle.on("click", function(){
          $('.is-selected').removeClass('is-selected')
          $handle.addClass('is-selected')
        })
      }
    })
  }

  return karl
})(window.karl || {})
