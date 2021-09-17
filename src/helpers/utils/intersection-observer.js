"use strict";

exports.__esModule = true;
exports.IntersectionObserverClass = void 0;

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/esnext.map.delete-all.js");

require("core-js/modules/esnext.map.every.js");

require("core-js/modules/esnext.map.filter.js");

require("core-js/modules/esnext.map.find.js");

require("core-js/modules/esnext.map.find-key.js");

require("core-js/modules/esnext.map.includes.js");

require("core-js/modules/esnext.map.key-of.js");

require("core-js/modules/esnext.map.map-keys.js");

require("core-js/modules/esnext.map.map-values.js");

require("core-js/modules/esnext.map.merge.js");

require("core-js/modules/esnext.map.reduce.js");

require("core-js/modules/esnext.map.some.js");

require("core-js/modules/esnext.map.update.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.assign.js");

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

  this.options = Object.assign({
    root: null,
    rootMargin: '0px 0px',
    threshold: 0.01
  }, options);
  this.observer = _elementHelper.domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;
};

exports.IntersectionObserverClass = IntersectionObserverClass;