import domElementHelper from '../element-helper';
export var nativeInputValueSetter = function () {
  if (!domElementHelper.canUseDom()) return false;
  var valueDescriptor = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value');
  return valueDescriptor.set;
}();