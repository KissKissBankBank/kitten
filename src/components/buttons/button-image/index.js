"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var StyledButtonImage = _styledComponents.default.button.withConfig({
  displayName: "button-image__StyledButtonImage",
  componentId: "sc-1kqp0ma-0"
})(["width:", ";height:", ";border-radius:50%;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer;border:0;padding:0;opacity:1;transition:opacity 0.2s;&:hover,&:focus{opacity:0.8;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-ButtonImage--tiny{width:", ";height:", ";}&.k-ButtonImage--big{@media (min-width:", "px){width:", ";height:", ";}}&.k-ButtonImage--huge{width:", ";height:", ";}&.k-ButtonImage--withoutPointerEvents{pointer-events:none;}&.k-ButtonImage--withBorder{border:", " solid ", ";}.k-ButtonImage__img{display:block;margin:0;padding:0;border:0;width:100%;height:100%;object-fit:cover;}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _colorsConfig.default.primary4, (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(2), _colorsConfig.default.line1);

var ButtonImage = function ButtonImage(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      withBorder = _ref.withBorder,
      img = _ref.img,
      others = (0, _objectWithoutProperties2.default)(_ref, ["tag", "className", "size", "withoutPointerEvents", "withBorder", "img"]);
  return /*#__PURE__*/_react.default.createElement(StyledButtonImage, (0, _extends2.default)({
    as: tag,
    className: (0, _classnames.default)('k-ButtonImage', "k-ButtonImage--".concat(size), {
      'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
      'k-ButtonImage--withBorder': withBorder
    }, className)
  }, others), !!img && /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, img, {
    className: (0, _classnames.default)('k-ButtonImage__img', img.className),
    alt: img.alt || ''
  })));
};

exports.ButtonImage = ButtonImage;
ButtonImage.defaultProps = {
  tag: 'button',
  className: null,
  size: 'regular',
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null
  }
};
ButtonImage.propTypes = {
  tag: _propTypes.default.string,
  className: _propTypes.default.string,
  size: _propTypes.default.oneOf(['tiny', 'regular', 'big', 'huge']),
  withoutPointerEvents: _propTypes.default.bool,
  withBorder: _propTypes.default.bool,
  img: _propTypes.default.shape({
    className: _propTypes.default.string
  })
};