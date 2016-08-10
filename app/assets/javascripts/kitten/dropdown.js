var openItems = $('.k-StyleguideMenu__listItem').each(function(key, element){
  $(element).on("click", function(){
    $(element).toggleClass("is-opened");
    $(element).siblings(".k-StyleguideMenu__subList").toggleClass('is-opened');
  })
});

var openSubItems = $('.k-StyleguideMenu__subListItem').each(function(key, element){
  $(element).on("click", function(){
    $(element).toggleClass("is-opened");
    $(element).siblings(".k-StyleguideMenu__subSubList").toggleClass('is-opened');
  })
});
