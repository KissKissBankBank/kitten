"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ButtonImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

const StyledButtonImage = _styledComponents.default.button.withConfig({
  displayName: "button-image__StyledButtonImage",
  componentId: "sc-1g89n03-0"
})(["width:", ";height:", ";border-radius:var(--border-radius-rounded);box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer;border:0;padding:0;opacity:1;transition:opacity 0.2s;&:hover,&:focus{opacity:0.8;}&.k-ButtonImage--small{width:", ";height:", ";}&.k-ButtonImage--large{@media (min-width:", "px){width:", ";height:", ";}}&.k-ButtonImage--huge{width:", ";height:", ";}&.k-ButtonImage--withoutPointerEvents{pointer-events:none;}&.k-ButtonImage--withBorder{border:var(--border);}.k-ButtonImage__img{display:block;margin:0;padding:0;border:0;width:100%;height:100%;object-fit:cover;}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(30), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(80), (0, _typography.pxToRem)(80));

const ButtonImage = _ref => {
  let {
    tag,
    className,
    size,
    withoutPointerEvents,
    withBorder,
    img,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledButtonImage, (0, _extends2.default)({
    as: tag,
    className: (0, _classnames.default)('k-ButtonImage', "k-ButtonImage--" + size, {
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
  size: 'medium',
  withoutPointerEvents: false,
  withBorder: false,
  img: {}
};
ButtonImage.propTypes = {
  tag: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'medium', 'large', 'huge']),
  withoutPointerEvents: _propTypes.default.bool,
  withBorder: _propTypes.default.bool,
  img: _propTypes.default.object
};