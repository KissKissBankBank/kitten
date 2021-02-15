import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Item } from './components/item';
import { Badge } from './components/badge';
import { StyledList } from './styles';
export var HeaderMenu = function HeaderMenu(_ref) {
  var backgroundColors = _ref.backgroundColors,
      borderSide = _ref.borderSide,
      borderSideOnHover = _ref.borderSideOnHover,
      largeItem = _ref.largeItem,
      noBorder = _ref.noBorder,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["backgroundColors", "borderSide", "borderSideOnHover", "largeItem", "noBorder", "className", "style"]);

  return /*#__PURE__*/React.createElement(StyledList, _extends({
    className: classNames('k-HeaderMenu', className, {
      'k-HeaderMenu--hasBorders': !noBorder,
      'k-HeaderMenu--hasBorderOnSide': !!borderSide,
      'k-HeaderMenu--hasBorderOnSide-left': borderSide === 'left',
      'k-HeaderMenu--hasBorderOnSide-right': borderSide === 'right',
      'k-HeaderMenu--hasBorderOnSideOnHover': borderSideOnHover,
      'k-HeaderMenu--hasBigItems': largeItem
    }),
    style: _extends({}, style, {
      '--headerMenu-background-colors-hover': backgroundColors === null || backgroundColors === void 0 ? void 0 : backgroundColors.hover
    })
  }, props));
};
HeaderMenu.Item = Item;
HeaderMenu.Badge = Badge;
HeaderMenu.propTypes = {
  backgroundColors: PropTypes.object,
  borderSide: PropTypes.oneOf(['left', 'right', false]),
  borderSideOnHover: PropTypes.bool,
  largeItem: PropTypes.bool,
  noBorder: PropTypes.bool
};
HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false
};