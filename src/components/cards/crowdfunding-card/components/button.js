"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../../components/buttons/button/button");

var CardButton = function CardButton(_ref) {
  var text = _ref.text,
      loading = _ref.loading;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-CrowdfundingCard__cardButton k-CrowdfundingCard__paddedContainer"
  }, !loading && /*#__PURE__*/_react.default.createElement(_button.Button, {
    fluid: true,
    modifier: "helium"
  }, text), loading && /*#__PURE__*/_react.default.createElement(_button.Button, {
    fluid: true,
    className: "k-CrowdfundingCard__cardButton__loadingButton"
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