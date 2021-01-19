import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import { domElementHelper } from '../dom/element-helper';
export var IntersectionObserverClass = function IntersectionObserverClass(options) {
  var _this = this;

  _classCallCheck(this, IntersectionObserverClass);

  this.observedComponents = new Map();

  this.intersectionCallback = function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var elt = entry.target;

      _this.observedComponents.get(elt)();

      _this.unobserve(elt);
    });
  };

  this.observe = function (elt) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    if (_this.observer === null) {
      callback();
      return;
    }

    _this.observer.observe(elt);

    _this.observedComponents.set(elt, callback);
  };

  this.unobserve = function (elt) {
    if (_this.observer === null) return;

    _this.observedComponents.delete(elt);

    _this.observer.unobserve(elt);
  };

  this.options = _extends({
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.01
  }, options);
  this.observer = domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;
};