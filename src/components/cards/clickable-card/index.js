"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickableCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledClickableCard = _styledComponents.default.button.withConfig({
  displayName: "clickable-card__StyledClickableCard",
  componentId: "f2yk28-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:center;&.k-ClickableCard--fluid{width:100%;}", " .k-ClickableCard__image{display:block;margin-bottom:", ";position:relative;width:100%;padding-top:100%;overflow:hidden;transition:box-shadow 0.15s ease;& > *{position:absolute;top:0;left:0;height:100%;width:100%;object-position:center;object-fit:none;z-index:-1;", "}}.k-ClickableCard__image--contain > *{object-fit:contain;}.k-ClickableCard__image--cover > *{object-fit:cover;}.k-ClickableCard__image--circle{border-radius:50%;}.k-ClickableCard__content{display:block;& *{transition:color 0.15s ease;}}&:hover,&:focus{", "}&[aria-checked='true']{", "}&:disabled{opacity:0.5;pointer-events:none;}"], function (_ref) {
  var size = _ref.size;
  return size && (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(size));
}, (0, _typography.pxToRem)(20), function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return (0, _styledComponents.css)(["background-color:", ";"], backgroundColor);
}, function (_ref3) {
  var borderColor = _ref3.borderColor;
  return (0, _styledComponents.css)([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ";}"], (0, _typography.pxToRem)(2), borderColor);
}, function (_ref4) {
  var borderColor = _ref4.borderColor;
  return (0, _styledComponents.css)([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ",inset 0 0 0 ", " ", ";}.k-ClickableCard__content *{color:", ";}"], (0, _typography.pxToRem)(2), borderColor, (0, _typography.pxToRem)(10), _colorsConfig.default.background1, borderColor);
});

var ClickableCard = function ClickableCard(_ref5) {
  var backgroundColor = _ref5.backgroundColor,
      borderColor = _ref5.borderColor,
      children = _ref5.children,
      disabled = _ref5.disabled,
      fluid = _ref5.fluid,
      size = _ref5.size,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["backgroundColor", "borderColor", "children", "disabled", "fluid", "size"]);
  return /*#__PURE__*/_react.default.createElement(StyledClickableCard, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ClickableCard', 'k-u-reset-button', props.className, {
      'k-ClickableCard--fluid': fluid
    }),
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    size: size,
    disabled: disabled
  }), children);
};

exports.ClickableCard = ClickableCard;

var ClickableCardImage = function ClickableCardImage(_ref6) {
  var children = _ref6.children,
      fit = _ref6.fit,
      shape = _ref6.shape,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["children", "fit", "shape"]);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ClickableCard__image', props.className, "k-ClickableCard__image--".concat(shape), "k-ClickableCard__image--".concat(fit))
  }), children);
};

var ClickableCardContent = function ClickableCardContent(_ref7) {
  var children = _ref7.children,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["children"]);
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ClickableCard__content', props.className)
  }), children);
};

ClickableCard.Image = ClickableCardImage;
ClickableCard.Content = ClickableCardContent;
ClickableCard.defaultProps = {
  backgroundColor: _colorsConfig.default.primary6,
  borderColor: _colorsConfig.default.primary1,
  disabled: false,
  fluid: false
};
ClickableCard.propTypes = {
  /**
    Image background color (as a CSS color string)
  */
  backgroundColor: _propTypes.default.string,

  /**
    Image border and text hover color (as a CSS color string)
  */
  borderColor: _propTypes.default.string,

  /**
    Is card disabled?
  */
  disabled: _propTypes.default.bool,

  /**
    Card width, in pixels, without unit
  */
  size: _propTypes.default.number
};
ClickableCardImage.defaultProps = {
  fit: 'cover',
  shape: 'square'
};
ClickableCardImage.propTypes = {
  /**
    Image fit in the zone
  */
  fit: _propTypes.default.oneOf(['cover', 'contain', 'none']),

  /**
    Shape of the image zones
  */
  shape: _propTypes.default.oneOf(['circle', 'square'])
};