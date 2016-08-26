var openItems = $('.karl-Menu__listItem').each(function(key, element){
  $(element).on("click", function(){
    $(element).toggleClass("is-opened");
    $(element).siblings(".karl-Menu__subList").toggleClass('is-opened');
  })
});

var openSubItems = $('.karl-Menu__subListItem').each(function(key, element){
  $(element).on("click", function(){
    $(element).toggleClass("is-opened");
    $(element).siblings(".karl-Menu__subSecondList").toggleClass('is-opened');
  })
});

$('.karl-Menu__subSecondListItem').click(function(){
  $('.is-selected').removeClass('is-selected');
  $(this).addClass('is-selected');
});
