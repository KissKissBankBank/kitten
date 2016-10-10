//= require kitten/karl/init-toggle-class-listener
//= require kitten/karl/display-shortcut
//= require kitten/karl/overgrid
//= require kitten/karl/menu

$(document).ready(function() {
  window.karl.initToggleClassListener()
  window.karl.displayShortcut()
  window.karl.initMenu()
  window.karl.initOvergrid()
})
