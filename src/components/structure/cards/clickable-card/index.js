"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ClickableCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledClickableCard = _styledComponents.default.button.withConfig({
  displayName: "clickable-card__StyledClickableCard",
  componentId: "sc-1g013xo-0"
})(["box-sizing:border-box;display:flex;flex-direction:column;align-items:stretch;opacity:1;transition:opacity 0.15s ease;&.k-ClickableCard--fluid{width:100%;}", " .k-ClickableCard__image{display:block;margin-bottom:", ";position:relative;width:100%;padding-top:100%;overflow:hidden;transition:box-shadow 0.15s ease;& > *{position:absolute;top:0;left:0;height:100%;width:100%;object-position:center;object-fit:none;z-index:-1;", "}}.k-ClickableCard__image--contain > *{object-fit:contain;}.k-ClickableCard__image--cover > *{object-fit:cover;}.k-ClickableCard__image--circle{border-radius:var(--border-radius-rounded);}.k-ClickableCard__content{display:block;& *{transition:color 0.15s ease;}}&:hover,&:focus{", "}&[aria-checked='true']{", "}&:disabled{opacity:0.5;pointer-events:none;}"], _ref => {
  let {
    size
  } = _ref;
  return size && (0, _styledComponents.css)(["width:", ";"], (0, _typography.pxToRem)(size));
}, (0, _typography.pxToRem)(20), _ref2 => {
  let {
    backgroundColor
  } = _ref2;
  return (0, _styledComponents.css)(["background-color:", ";"], backgroundColor);
}, _ref3 => {
  let {
    borderColor
  } = _ref3;
  return (0, _styledComponents.css)([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ";}"], (0, _typography.pxToRem)(2), borderColor);
}, _ref4 => {
  let {
    borderColor
  } = _ref4;
  return (0, _styledComponents.css)([".k-ClickableCard__image{box-shadow:inset 0 0 0 ", " ", ",inset 0 0 0 ", " ", ";}.k-ClickableCard__content *{color:", ";}"], (0, _typography.pxToRem)(2), borderColor, (0, _typography.pxToRem)(10), _colorsConfig.default.background1, borderColor);
});

const ClickableCard = _ref5 => {
  let {
    backgroundColor,
    borderColor,
    children,
    disabled,
    fluid,
    size,
    ...props
  } = _ref5;
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

const ClickableCardImage = _ref6 => {
  let {
    children,
    fit,
    shape,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ClickableCard__image', props.className, "k-ClickableCard__image--" + shape, "k-ClickableCard__image--" + fit)
  }), children);
};

const ClickableCardContent = _ref7 => {
  let {
    children,
    ...props
  } = _ref7;
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