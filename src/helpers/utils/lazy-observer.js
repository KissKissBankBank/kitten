"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _elementHelper = require("../dom/element-helper");

var LazyObserver = function LazyObserver() {
  var _this = this;

  (0, _classCallCheck2.default)(this, LazyObserver);
  this.observedComponents = new Map();
  this.options = {
    root: null,
    rootMargin: '100px 0px',
    threshold: 0.01
  };

  this.intersectionCallback = function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var elt = entry.target;

      _this.observedComponents.get(elt)();

      _this.unobserve(elt);
    });
  };

  this.observer = _elementHelper.domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;

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
};

var _default = new LazyObserver();

exports.default = _default;