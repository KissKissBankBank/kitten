import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.map.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/esnext.map.delete-all.js";
import "core-js/modules/esnext.map.every.js";
import "core-js/modules/esnext.map.filter.js";
import "core-js/modules/esnext.map.find.js";
import "core-js/modules/esnext.map.find-key.js";
import "core-js/modules/esnext.map.includes.js";
import "core-js/modules/esnext.map.key-of.js";
import "core-js/modules/esnext.map.map-keys.js";
import "core-js/modules/esnext.map.map-values.js";
import "core-js/modules/esnext.map.merge.js";
import "core-js/modules/esnext.map.reduce.js";
import "core-js/modules/esnext.map.some.js";
import "core-js/modules/esnext.map.update.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/es.object.assign.js";
import { domElementHelper } from '../dom/element-helper';
export var IntersectionObserverClass = function IntersectionObserverClass(options) {
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
  this.observer = domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;
};