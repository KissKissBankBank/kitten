"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RadioButtonSet = void 0;

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.map.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radioButton = require("../../../components/form/radio-button");

var _typography = require("../../../helpers/utils/typography");

var _label = require("../../../components/form/label");

var _excluded = ["items", "disabled", "className", "name", "error", "variant", "design", "label", "children"],
    _excluded2 = ["id", "className"];

var StyledRadioButtonSet = _styledComponents.default.fieldset.withConfig({
  displayName: "radio-button-set__StyledRadioButtonSet",
  componentId: "sc-1bde3vb-0"
})(["margin:0;padding:0;border:0;line-height:1.3rem;& > legend{padding:0;}.k-Form-RadioButtonSet__label{margin-bottom:", ";}.k-Form-RadioButtonSet__radioContainer{display:flex;flex-direction:column;gap:", " 0;.k-Form-RadioButtonSet__radioButton.k-Form-RadioButton{margin:0;}}"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5));

var RadioButtonSet = function RadioButtonSet(_ref) {
  var items = _ref.items,
      disabled = _ref.disabled,
      className = _ref.className,
      name = _ref.name,
      error = _ref.error,
      variant = _ref.variant,
      design = _ref.design,
      label = _ref.label,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(StyledRadioButtonSet, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-RadioButtonSet', className, "k-Form-RadioButtonSet--" + variant),
    disabled: disabled
  }, props), label && /*#__PURE__*/_react.default.createElement(_label.Label, {
    tag: "legend",
    className: "k-Form-RadioButtonSet__label"
  }, label), children && !label && /*#__PURE__*/_react.default.createElement("legend", null, children), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-RadioButtonSet__radioContainer"
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        className = _ref2.className,
        itemProps = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
    return /*#__PURE__*/_react.default.createElement(_radioButton.RadioButton, (0, _extends2.default)({
      id: id,
      variant: variant,
      design: design,
      error: error,
      name: name,
      key: id
    }, itemProps, {
      className: (0, _classnames.default)('k-Form-RadioButtonSet__radioButton', className)
    }));
  })));
};

exports.RadioButtonSet = RadioButtonSet;
RadioButtonSet.propTypes = {
  name: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  label: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired,
    defaultChecked: _propTypes.default.bool
  })),
  variant: _propTypes.default.oneOf(['andromeda', 'orion']),
  design: _propTypes.default.oneOf(['disc', 'check']),
  disabled: _propTypes.default.bool
};
RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  label: null,
  items: [{
    text: 'filter 1',
    children: 'lorem ipsum dolor',
    defaultChecked: true,
    id: 'myRadioButton' // Replace by a real value

  }],
  variant: 'andromeda',
  design: 'disc',
  disabled: false
};