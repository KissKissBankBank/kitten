"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormActions = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var FormActions = function FormActions(props) {
  var className = props.className,
      spreadOutAt = props.spreadOutAt,
      others = (0, _objectWithoutProperties2.default)(props, ["className", "spreadOutAt"]);
  var formActionsClassName = (0, _classnames.default)('k-FormActions', className, (0, _defineProperty2.default)({}, "k-FormActions--spreadOut@".concat(spreadOutAt), spreadOutAt));
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: formActionsClassName
  }, others));
};

exports.FormActions = FormActions;

FormActions.Item = function (props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-FormActions__item', props.className)
  }));
};

FormActions.propTypes = {
  spreadOutAt: _propTypes.default.oneOf(['s-up'])
};
FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null
};
FormActions.Item.defaultProps = {
  className: null,
  children: null
};