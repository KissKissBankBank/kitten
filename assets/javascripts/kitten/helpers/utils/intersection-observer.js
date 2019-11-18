import { domElementHelper } from '../dom/element-helper'

export class IntersectionObserverClass {
  constructor(options) {
    this.options = {
      root: null,
      rootMargin: '100px 0px',
      threshold: 0.01,
      ...options, // merge option parameters
    }

    this.observer =
      domElementHelper.canUseDom() && 'IntersectionObserver' in window
        ? new IntersectionObserver(this.intersectionCallback, this.options)
        : null
  }

  observedComponents = new Map()

  intersectionCallback = entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return

      const elt = entry.target
      this.observedComponents.get(elt)()
      this.unobserve(elt)
    })
  }

  observe = (elt, callback = () => {}) => {
    if (this.observer === null) {
      callback()
      return
    }

    this.observer.observe(elt)
    this.observedComponents.set(elt, callback)
  }

  unobserve = elt => {
    if (this.observer === null) return

    this.observedComponents.delete(elt)
    this.observer.unobserve(elt)
  }
}
