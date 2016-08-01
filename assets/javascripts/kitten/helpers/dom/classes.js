// Helper method to join classes together by a space.
// Example:
//   classes('foo', null, 'bar') # => 'foo bar'
window.classes = function() {
  const args = Array.prototype.slice.call(arguments)
  return args.filter(function(value) { return value }).join(' ')
}
