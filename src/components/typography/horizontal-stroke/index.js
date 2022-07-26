"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledHorizontalStroke = exports.SMALL = exports.MICRO = exports.MEDIUM = exports.LARGE = exports.HorizontalStroke = exports.HUGE = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _strokeModifierStyles = require("./common/stroke-modifier-styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const MICRO = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(2));
exports.MICRO = MICRO;
const SMALL = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2));
exports.SMALL = SMALL;
const MEDIUM = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(4));
exports.MEDIUM = MEDIUM;
const LARGE = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(4));
exports.LARGE = LARGE;
const HUGE = (0, _styledComponents.css)(["width:", ";height:", ";"], (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(6));
exports.HUGE = HUGE;

const StyledHorizontalStroke = _styledComponents.default.div.withConfig({
  displayName: "horizontal-stroke__StyledHorizontalStroke",
  componentId: "sc-1ynlu5y-0"
})(["border:none;background:", ";&.k-HorizontalStroke--size--micro{", "}&.k-HorizontalStroke--size--small{", "}&.k-HorizontalStroke--size--medium{", "}&.k-HorizontalStroke--size--large{", "}&.k-HorizontalStroke--size--huge{", "}", ""], _ref => {
  let {
    color
  } = _ref;
  return color || _colorsConfig.default.font1;
}, MICRO, SMALL, MEDIUM, LARGE, HUGE, (0, _strokeModifierStyles.strokeModifierStylesWithoutMargin)('&.k-HorizontalStroke--modifier'));

exports.StyledHorizontalStroke = StyledHorizontalStroke;

const HorizontalStroke = _ref2 => {
  let {
    className,
    style,
    size,
    modifier,
    customSize,
    color,
    ...props
  } = _ref2;

  const modifierClassName = () => {
    if (!modifier) return "k-HorizontalStroke--size--" + size;
    return "k-HorizontalStroke--modifier--" + modifier;
  };

  const customStyles = () => {
    if (!customSize) return;
    return {
      height: customSize && customSize.height,
      width: customSize && customSize.width
    };
  };

  return /*#__PURE__*/_react.default.createElement(StyledHorizontalStroke, (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-HorizontalStroke', className, modifierClassName()),
    style: { ...customStyles(),
      ...style
    },
    color: color
  }));
};

exports.HorizontalStroke = HorizontalStroke;
HorizontalStroke.propTypes = {
  size: _propTypes.default.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  modifier: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary']),
  customSize: _propTypes.default.shape({
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),
  color: _propTypes.default.string
};
HorizontalStroke.defaultProps = {
  size: 'medium',
  customSize: {
    width: null,
    height: null
  },
  color: _colorsConfig.default.font1
};