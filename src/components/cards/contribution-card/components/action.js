"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../components/buttons/button");

var Action = function Action(props) {
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    borderRadius: 4,
    type: "submit"
  }, props, {
    className: (0, _classnames.default)('k-ContributionCard__action', props.className)
  }));
};

exports.Action = Action;