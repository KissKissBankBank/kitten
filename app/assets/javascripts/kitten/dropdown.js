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
