"use strict";

exports.__esModule = true;
exports.domElementHelper = void 0;
const domElementHelper = {
  /**
   * Return element computed height with or without borders included.
   *
   * @param {HTMLElement} element
   * @param {boolean} withBorder
   */
  getComputedHeight(element, withBorder) {
    if (withBorder) {
      return element.getBoundingClientRect().height;
    }

    return element.clientHeight;
  },

  /**
   * Return element computed width.
   *
   * @param {HTMLElement} element
   */
  getComputedWidth(element) {
    if (!element) return;
    return element.getBoundingClientRect().width;
  },

  /**
   * Return element position left.
   *
   * @param {HTMLElement} element
   */
  getComputedLeft(element) {
    if (!element) return;
    return element.getBoundingClientRect().left;
  },

  /**
   * Return value of property's style for element.
   *
   * @param {HTMLElement} element
   * @param {string} property
   */
  getComputedStyle(element, property) {
    if (!element) return;
    const styles = window.getComputedStyle(element);
    return styles.getPropertyValue(property);
  },

  /**
   * Return if DOM API can be used.
   */
  canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  }

};
exports.domElementHelper = domElementHelper;