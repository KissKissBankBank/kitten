window.karl   = (function(karl) {
  var $menu   = $('[data-karl-menu]')
  var $links  = $('[data-karl-menu-link]')
  var $toggle = $('[data-karl-menu-toggle]')
  var $items  = $('[data-karl-menu-list] a')

  karl.initMenu = function() {

    // Manage menu opening
    $toggle.click(function() {
      // Simulate menu closing on XS media query with a `is-clicked` class.
      if ($menu.hasClass('is-opened') && $menu.hasClass('is-clicked')) {
        $menu.removeClass('is-clicked')
      } else {
        $menu.toggleClass('is-opened')
        $menu.removeClass('is-clicked')
      }
    })

    // Manage menu closing on xs media query.
    $links.click(function() {
      $menu.addClass('is-clicked')
    })

    // Manage menu list dropdowns
    $items.each(function() {

      var $handle = $(this)

      // Parents
      if ($handle.next('ul').find('li').length > 0) {
        $handle.addClass('with-arrow')

        $handle.on("click", function() {
          $handle.toggleClass("is-opened")
          $handle.siblings("ul").toggleClass('is-opened')
        })

      // Child
      } else {
        $handle.on("click", function() {
          $('.is-selected').removeClass('is-selected')
          $handle.addClass('is-selected')
        })
      }
    })
  }

  return karl
})(window.karl || {})
