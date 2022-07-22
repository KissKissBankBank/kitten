"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeaderMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _item = require("./components/item");

var _badge = require("./components/badge");

var _styles = require("./styles");

const HeaderMenu = _ref => {
  let {
    backgroundColors,
    borderSide,
    borderSideOnHover,
    largeItem,
    noBorder,
    className,
    position,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledList, (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeaderMenu', className, "k-HeaderMenu--" + position, {
      'k-HeaderMenu--hasBorders': !noBorder,
      'k-HeaderMenu--hasBorderOnSide': !!borderSide,
      'k-HeaderMenu--hasBorderOnSide-left': borderSide === 'left',
      'k-HeaderMenu--hasBorderOnSide-right': borderSide === 'right',
      'k-HeaderMenu--hasBorderOnSideOnHover': borderSideOnHover,
      'k-HeaderMenu--hasBigItems': largeItem
    }),
    style: { ...style,
      '--headerMenu-background-colors-hover': backgroundColors == null ? void 0 : backgroundColors.hover
    }
  }, props));
};

exports.HeaderMenu = HeaderMenu;
HeaderMenu.Item = _item.Item;
HeaderMenu.Badge = _badge.Badge;
HeaderMenu.propTypes = {
  backgroundColors: _propTypes.default.object,
  borderSide: _propTypes.default.oneOf(['left', 'right', false]),
  borderSideOnHover: _propTypes.default.bool,
  largeItem: _propTypes.default.bool,
  noBorder: _propTypes.default.bool,
  position: _propTypes.default.oneOf(['left', 'right'])
};
HeaderMenu.defaultProps = {
  backgroundColors: {},
  borderSide: 'left',
  borderSideOnHover: true,
  largeItem: false,
  noBorder: false,
  position: 'left'
};