"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CheckboxButtonSet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkboxButton = require("../../form/checkbox-button");

var _typography = require("../../../helpers/utils/typography");

var _label = require("../../form/label");

var _excluded = ["items", "disabled", "className", "name", "error", "label", "children"],
    _excluded2 = ["id", "className"];

var StyledCheckboxButtonSet = _styledComponents.default.fieldset.withConfig({
  displayName: "checkbox-button-set__StyledCheckboxButtonSet",
  componentId: "sc-15b13i9-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxButtonSet__label{margin-bottom:", ";}.k-Form-CheckboxButtonSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5));

var CheckboxButtonSet = function CheckboxButtonSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      label = _ref.label,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxButtonSet, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-CheckboxButtonSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/_react.default.createElement(_label.Label, {
    tag: "legend",
    className: "k-Form-CheckboxButtonSet__label"
  }, label), children && !label && /*#__PURE__*/_react.default.createElement("legend", null, children), items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
    return /*#__PURE__*/_react.default.createElement(_checkboxButton.CheckboxButton, (0, _extends2.default)({
      id: id,
      error: error,
      name: name,
      key: id
    }, itemProps, {
      className: (0, _classnames.default)('k-Form-CheckboxButtonSet__checkbox', className)
    }));
  }));
};

exports.CheckboxButtonSet = CheckboxButtonSet;
CheckboxButtonSet.propTypes = {
  name: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  label: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    id: _propTypes.default.string.isRequired,
    defaultChecked: _propTypes.default.bool,
    children: _propTypes.default.node
  })),
  disabled: _propTypes.default.bool
};
CheckboxButtonSet.defaultProps = {
  name: 'checkboxSet',
  error: false,
  label: null,
  items: [{
    label: null,
    children: null,
    defaultChecked: true,
    id: 'myCheckboxButton' // Replace by a real value

  }],
  disabled: false
};