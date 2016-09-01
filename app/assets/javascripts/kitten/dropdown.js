var subItems = $("[data-karl-menu] a")

$(document).ready(function(){
  subItems.each(function(){
    // Parents
    if ($(this).next('ul').find('li').length > 0) {
      $(this).addClass('with-arrow');

      $(this).on("click", function(){
        $(this).toggleClass("is-opened");
        $(this).siblings("ul").toggleClass('is-opened');
      });
    }
    // Child
    else {
      $(this).on("click", function(){
        $('.is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
      });
    }
  });
});
