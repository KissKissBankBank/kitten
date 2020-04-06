"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../../components/buttons/button/button");

var _typography = require("../../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var COMPONENT_GUTTER = (0, _typography.pxToRem)(10);
var StyledLoading = (0, _styledComponents.default)(_button.Button).withConfig({
  displayName: "button__StyledLoading",
  componentId: "sc-1ws1im9-0"
})(["background-color:", ";border-color:", ";"], _colorsConfig.default.line2, _colorsConfig.default.line2);

var StyledButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "button__StyledButtonContainer",
  componentId: "sc-1ws1im9-1"
})(["padding:0 ", ";"], COMPONENT_GUTTER);

var CardButton = function CardButton(_ref) {
  var text = _ref.text,
      loading = _ref.loading;
  return /*#__PURE__*/_react.default.createElement(StyledButtonContainer, null, !loading && /*#__PURE__*/_react.default.createElement(_button.Button, {
    fluid: true,
    modifier: "helium"
  }, text), loading && /*#__PURE__*/_react.default.createElement(StyledLoading, {
    fluid: true
  }));
};

var _default = CardButton;
exports.default = _default;
CardButton.propTypes = {
  text: _propTypes.default.string,
  loading: _propTypes.default.bool
};
CardButton.defaultProps = {
  text: '',
  loading: false
};