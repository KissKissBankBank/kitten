"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ButtonItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

var _arrowIcon = require("../../../graphics/icons/arrow-icon");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Item = _styledComponents.default.div.withConfig({
  displayName: "button-item__Item",
  componentId: "sc-c6wx4k-0"
})(["display:flex;position:relative;border:var(--border);border-top:none;cursor:pointer;padding-left:", ";padding-right:", ";background-color:", ";transition:background-color 0.2s ease;:hover{background-color:", ";}&:focus{z-index:1;}&.k-List__button--withTopBorder{border-top:var(--border);}&[aria-disabled='true']{color:", ";cursor:not-allowed;:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isActive:not([aria-disabled='true']){color:", ";background-color:", ";border-color:", ";:hover{background-color:", ";}.k-List__button__arrowIcon{fill:", ";}}&.k-List__button--isFocused:not([aria-disabled='true']){.k-List__button__arrowIcon{left:", ";}}", " .k-List__button__content{flex-grow:1;}.k-List__button__arrow{display:flex;align-items:center;}.k-List__button__arrowIcon{position:relative;left:0;transition:left 0.2s;}"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(20), _colorsConfig.default.background1, _colorsConfig.default.background2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.background1, (0, _typography.pxToRem)(5), _ref => {
  let {
    styles
  } = _ref;
  return styles;
});

const ButtonItem = _ref2 => {
  let {
    children,
    disabled,
    style,
    withTopBorder,
    onClick,
    onKeyPress,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    className,
    hasArrow,
    active,
    ...others
  } = _ref2;
  const [focus, setFocus] = (0, _react.useState)(false);

  const handleKeyPress = event => {
    const enterKey = 13;
    const spaceKey = 32;

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault;
        onClick();
        onKeyPress();
        break;
    }
  };

  const handleFocus = () => {
    setFocus(true);
    onFocus();
  };

  const handleBlur = () => {
    setFocus(false);
    onBlur();
  };

  const handleMouseEnter = () => {
    setFocus(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setFocus(false);
    onMouseLeave();
  };

  return /*#__PURE__*/_react.default.createElement(Item, (0, _extends2.default)({
    role: others.as !== 'a' ? 'button' : null,
    tabIndex: disabled ? '-1' : '0',
    onClick: disabled ? null : onClick,
    onKeyPress: disabled ? null : handleKeyPress,
    onMouseEnter: handleMouseEnter,
    onFocus: handleFocus,
    onMouseLeave: handleMouseLeave,
    onBlur: handleBlur,
    styles: style,
    "aria-disabled": disabled,
    className: (0, _classnames.default)('k-List__button', className, {
      'k-List__button--withTopBorder': withTopBorder,
      'k-List__button--isActive': active,
      'k-List__button--isFocused': focus
    })
  }, others), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-List__button__content"
  }, children), hasArrow && /*#__PURE__*/_react.default.createElement("div", {
    className: "k-List__button__arrow",
    "aria-hidden": true
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: "k-List__button__arrowIcon"
  })));
};

exports.ButtonItem = ButtonItem;
ButtonItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  disabled: _propTypes.default.bool,
  withTopBorder: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  hasArrow: _propTypes.default.bool,
  active: _propTypes.default.bool
};
ButtonItem.defaultProps = {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onKeyPress: () => {},
  hasArrow: true,
  active: false
};