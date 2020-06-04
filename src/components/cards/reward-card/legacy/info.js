"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _deprecated = require("../../../../helpers/utils/deprecated");

var Info = function Info(_ref) {
  var label = _ref.label,
      value = _ref.value,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  if (!label) return null;

  var InfoBase = /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    color: "font1",
    weight: "regular",
    className: "k-LegacyRewardCard__list"
  }, "".concat(label, " "), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "light"
  }, value)));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (viewportIsTabletOrLess || isTinyVersion) && /*#__PURE__*/_react.default.createElement("div", null, InfoBase), !viewportIsTabletOrLess && !isTinyVersion && InfoBase);
};

exports.Info = Info;
Info.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  viewportIsTabletOrLess: _propTypes.default.bool.isRequired,
  isTinyVersion: _propTypes.default.bool.isRequired
};
Info.defaultProps = {
  label: null,
  value: null
};