"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.IntersectionObserverClass = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _elementHelper = require("../dom/element-helper");

var IntersectionObserverClass = function IntersectionObserverClass(options) {
  var _this = this;

  this.observedComponents = new Map();

  this.intersectionCallback = function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var elt = entry.target;

      _this.observedComponents.get(elt)();

      _this.unobserve(elt);
    });
  };

  this.observe = function (elt, callback) {
    if (callback === void 0) {
      callback = function callback() {};
    }

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

  this.options = (0, _extends2.default)({
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.01
  }, options);
  this.observer = _elementHelper.domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;
};

exports.IntersectionObserverClass = IntersectionObserverClass;