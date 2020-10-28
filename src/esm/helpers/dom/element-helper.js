/**
 * @module '../../helpers/dom/element-helper'
 */
export var domElementHelper = {
  /**
   * Return element computed height with or without borders included.
   *
   * @param {HTMLElement} element
   * @param {boolean} withBorder
   */
  getComputedHeight: function getComputedHeight(element, withBorder) {
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
  getComputedWidth: function getComputedWidth(element) {
    if (!element) return;
    return element.getBoundingClientRect().width;
  },

  /**
   * Return element position left.
   *
   * @param {HTMLElement} element
   */
  getComputedLeft: function getComputedLeft(element) {
    if (!element) return;
    return element.getBoundingClientRect().left;
  },

  /**
   * Return value of property's style for element.
   *
   * @param {HTMLElement} element
   * @param {string} property
   */
  getComputedStyle: function getComputedStyle(element, property) {
    if (!element) return;
    var styles = window.getComputedStyle(element);
    return styles.getPropertyValue(property);
  },

  /**
   * Return if DOM API can be used.
   */
  canUseDom: function canUseDom() {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  }
}; // DEPRECATED: do not use default export.

export default domElementHelper;