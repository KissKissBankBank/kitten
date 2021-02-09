import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowIcon } from '../../../icons/arrow-icon';
import { Button } from '../../../../components/buttons/button/button';
export var Item = function Item(_ref) {
  var children = _ref.children,
      external = _ref.external,
      liProps = _ref.liProps,
      modifier = _ref.modifier,
      button = _ref.button,
      size = _ref.size,
      isSelected = _ref.isSelected,
      other = _objectWithoutProperties(_ref, ["children", "external", "liProps", "modifier", "button", "size", "isSelected"]);

  return /*#__PURE__*/React.createElement("li", _extends({
    role: "menuitem"
  }, liProps, {
    className: classNames('k-HeaderMenu__item', liProps.className, "k-HeaderMenu__item--".concat(size), {
      'k-HeaderMenu__item--external': external,
      'k-HeaderMenu__item--isSelected': isSelected,
      'k-HeaderMenu__item--hasButton': button,
      'k-HeaderMenu__item--light': modifier === 'light'
    })
  }), button ? /*#__PURE__*/React.createElement(Button, _extends({}, other, {
    className: classNames('k-HeaderMenu__item__button', other.className),
    as: "a",
    modifier: modifier,
    fluid: true
  }), children) : /*#__PURE__*/React.createElement("a", _extends({}, other, {
    className: classNames('k-HeaderMenu__item__link', other.className),
    "aria-current": isSelected ? 'page' : null
  }), children, external && /*#__PURE__*/React.createElement(ArrowIcon, {
    className: "k-HeaderMenu__item__arrow headerMenuArrowIcon",
    version: "solid",
    direction: "right"
  })));
};
Item.propTypes = {
  external: PropTypes.bool,
  button: PropTypes.bool,
  href: PropTypes.string,
  isSelected: PropTypes.bool,
  liProps: PropTypes.object,
  modifier: PropTypes.oneOf([null, undefined, 'light', 'default', 'hydrogen', 'helium', 'lithium', 'beryllium', 'carbon', 'oxygen', 'copper', 'checked']),
  size: PropTypes.oneOf(['normal', 'tiny', 'big'])
};
Item.defaultProps = {
  external: false,
  button: false,
  modifier: null,
  href: null,
  isSelected: false,
  liProps: {},
  size: 'normal'
};