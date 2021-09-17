"use strict";

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Number = void 0;

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

var _typography = require("../../../../helpers/utils/typography");

var _helpers = require("./helpers");

var _excluded = ["iconSvg"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var StyledNumberFormat = (0, _styledComponents.default)(function (_ref) {
  var iconSvg = _ref.iconSvg,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_reactNumberFormat.default, others);
}).withConfig({
  displayName: "number__StyledNumberFormat",
  componentId: "sc-1a38wzf-0"
})(["padding-right:", ";", ""], (0, _typography.pxToRem)(45), function (_ref2) {
  var iconSvg = _ref2.iconSvg;
  return iconSvg && (0, _styledComponents.css)(["background:transparent no-repeat;background-image:url('data:image/svg+xml,", "');background-position:calc(100% - ", ") center;"], iconSvg, (0, _typography.pxToRem)(5));
});

var Number = function Number(_ref3) {
  var label = _ref3.label,
      Field = _ref3.fieldComponent,
      Label = _ref3.labelComponent,
      Input = _ref3.inputComponent,
      Error = _ref3.errorComponent;

  var _useFormContext = (0, _.useFormContext)(),
      number = _useFormContext.values.number,
      setInputValues = _useFormContext.setInputValues;

  var ccType = (0, _helpers.getCreditCardType)(number);
  var ccFormat = (0, _helpers.getCreditCardFormat)(ccType);
  var ccIconSvg = (0, _helpers.getIconSvgStringByType)(ccType.type);

  var handleChange = function handleChange(_ref4) {
    var value = _ref4.value;

    var _getCreditCardType = (0, _helpers.getCreditCardType)(value),
        type = _getCreditCardType.type;

    setInputValues({
      number: value,
      type: type
    });
  };

  return /*#__PURE__*/_react.default.createElement(Field, null, /*#__PURE__*/_react.default.createElement(Label, {
    htmlFor: "frmCCNum"
  }, label), /*#__PURE__*/_react.default.createElement(StyledNumberFormat, {
    name: "cardnumber",
    id: "frmCCNum",
    autoComplete: "cc-number",
    format: ccFormat,
    inputMode: "numeric",
    placeholder: ccFormat,
    customInput: Input,
    iconSvg: ccIconSvg,
    value: number,
    onValueChange: handleChange
  }), /*#__PURE__*/_react.default.createElement(Error, null));
};

exports.Number = Number;
Number.propTypes = {
  label: _propTypes.default.string,
  fieldComponent: _propTypes.default.elementType,
  labelComponent: _propTypes.default.elementType,
  inputComponent: _propTypes.default.elementType,
  errorComponent: _propTypes.default.elementType
};
Number.defaultProps = {
  label: 'Card Number',
  fieldComponent: function fieldComponent(props) {
    return /*#__PURE__*/_react.default.createElement("div", props);
  },
  labelComponent: function labelComponent(props) {
    return /*#__PURE__*/_react.default.createElement("label", props);
  },
  inputComponent: function inputComponent(props) {
    return /*#__PURE__*/_react.default.createElement("input", props);
  },
  errorComponent: function errorComponent() {
    return null;
  }
};