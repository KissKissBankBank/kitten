import { domElementHelper } from '../../dom/element-helper';
export class IntersectionObserverClass {
  constructor(options) {
    var _this = this;

    this.observedComponents = new Map();

    this.intersectionCallback = entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const elt = entry.target;
        this.observedComponents.get(elt)();
        this.unobserve(elt);
      });
    };

    this.observe = function (elt, callback) {
      if (callback === void 0) {
        callback = () => {};
      }

      if (_this.observer === null) {
        callback();
        return;
      }

      _this.observer.observe(elt);

      _this.observedComponents.set(elt, callback);
    };

    this.unobserve = elt => {
      if (this.observer === null) return;
      this.observedComponents.delete(elt);
      this.observer.unobserve(elt);
    };

    this.options = {
      root: null,
      rootMargin: '0px 0px',
      threshold: 0.01,
      ...options // merge option parameters

    };
    this.observer = domElementHelper.canUseDom() && 'IntersectionObserver' in window ? new IntersectionObserver(this.intersectionCallback, this.options) : null;
  }

}