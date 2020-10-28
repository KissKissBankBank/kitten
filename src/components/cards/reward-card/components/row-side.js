"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardRowSide = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var RewardCardRowSide = function RewardCardRowSide(_ref) {
  var withVerticalMargins = _ref.withVerticalMargins,
      props = (0, _objectWithoutProperties2.default)(_ref, ["withVerticalMargins"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-RewardCard__rowSide', props.className, {
      'k-RewardCard__rowSide--hasMargins': withVerticalMargins
    })
  }));
};

exports.RewardCardRowSide = RewardCardRowSide;
RewardCardRowSide.propTypes = {
  withVerticalMargins: _propTypes.default.bool,
  children: _propTypes.default.node
};
RewardCardRowSide.defaultProps = {
  withVerticalMargins: true,
  children: ''
};