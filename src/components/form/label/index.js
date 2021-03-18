"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _typography = require("../../../helpers/utils/typography");

var StyledLabel = _styledComponents.default.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "l6ih7y-0"
})(["display:block;", " cursor:pointer;&.k-Label--tiny{line-height:1.3;font-size:", ";}&.k-Label--micro{line-height:1.3;font-size:", ";}&.k-Label--withoutPointerEvents{pointer-events:none;}"], _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(0), (0, _typography.stepToRem)(-1));

var Label = function Label(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      focusId = _ref.focusId,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      htmlFor = _ref.htmlFor,
      other = (0, _objectWithoutProperties2.default)(_ref, ["tag", "className", "children", "focusId", "size", "withoutPointerEvents", "htmlFor"]);

  var handleClick = function handleClick(e) {
    if (_elementHelper.default.canUseDom() && focusId) {
      e.preventDefault();
      document.getElementById(focusId).focus();
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledLabel, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Label', className, "k-Label--".concat(size), {
      'k-Label--withoutPointerEvents': withoutPointerEvents
    }),
    htmlFor: focusId || htmlFor,
    onClick: handleClick,
    as: tag
  }, other), children);
};

exports.Label = Label;
Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false
};
Label.propTypes = {
  focusId: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
  size: _propTypes.default.oneOf([null, undefined, 'normal', 'tiny', 'micro']),
  withoutPointerEvents: _propTypes.default.bool
};