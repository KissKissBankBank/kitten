"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormActions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var FormActions = function FormActions(props) {
  var className = props.className,
      spreadOutAt = props.spreadOutAt,
      others = _objectWithoutProperties(props, ["className", "spreadOutAt"]);

  var formActionsClassName = (0, _classnames.default)('k-FormActions', className, _defineProperty({}, "k-FormActions--spreadOut@".concat(spreadOutAt), spreadOutAt));
  return _react.default.createElement("div", _extends({
    className: formActionsClassName
  }, others));
};

exports.FormActions = FormActions;

FormActions.Item = function (props) {
  return _react.default.createElement("div", _extends({}, props, {
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