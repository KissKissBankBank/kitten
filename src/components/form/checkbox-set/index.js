"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxSet = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _checkbox = require("../../../components/form/checkbox");

var _typography = require("../../../helpers/utils/typography");

var _label = require("../../../components/form/label");

var StyledCheckboxSet = _styledComponents.default.fieldset.withConfig({
  displayName: "checkbox-set__StyledCheckboxSet",
  componentId: "sc-1x5pmus-0"
})(["margin:0;padding:0;border:0;display:flex;flex-direction:column;line-height:1.3rem;& > legend{padding:0;}.k-Form-CheckboxSet__label{margin-bottom:", ";}.k-Form-CheckboxSet__checkbox{margin:", " 0;&:first-of-type{margin-top:0;}&:last-of-type{margin-bottom:0;}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5));

var CheckboxSet = function CheckboxSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      label = _ref.label,
      children = _ref.children,
      variant = _ref.variant,
      props = (0, _objectWithoutProperties2.default)(_ref, ["items", "disabled", "className", "name", "error", "label", "children", "variant"]);
  return /*#__PURE__*/_react.default.createElement(StyledCheckboxSet, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-CheckboxSet', className),
    disabled: disabled
  }, props), label && /*#__PURE__*/_react.default.createElement(_label.Label, {
    tag: "legend",
    className: "k-Form-CheckboxSet__label"
  }, label), children && !label && /*#__PURE__*/_react.default.createElement("legend", null, children), items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = (0, _objectWithoutProperties2.default)(_ref2, ["id", "className"]);
    return /*#__PURE__*/_react.default.createElement(_checkbox.Checkbox, (0, _extends2.default)({
      id: id,
      error: error,
      name: name,
      variant: variant,
      key: id
    }, itemProps, {
      className: (0, _classnames.default)('k-Form-CheckboxSet__checkbox', className)
    }));
  }));
};

exports.CheckboxSet = CheckboxSet;
CheckboxSet.propTypes = {
  name: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  label: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string,
    id: _propTypes.default.string.isRequired,
    defaultChecked: _propTypes.default.bool,
    children: _propTypes.default.node
  })),
  disabled: _propTypes.default.bool,
  variant: _propTypes.default.oneOf(['andromeda', 'orion'])
};
CheckboxSet.defaultProps = {
  name: 'checkboxSet',
  error: false,
  label: null,
  items: [{
    label: null,
    children: null,
    defaultChecked: true,
    id: 'myCheckbox' // Replace by a real value

  }],
  disabled: false,
  variant: 'andromeda'
};