"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Number = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _ = require("../");

var _typography = require("../../../../helpers/utils/typography");

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledNumberFormat = (0, _styledComponents.default)(_ref => {
  let {
    iconSvg,
    ...others
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNumberFormat.default, others);
}).withConfig({
  displayName: "number__StyledNumberFormat",
  componentId: "sc-1a38wzf-0"
})(["padding-right:", ";", ""], (0, _typography.pxToRem)(45), _ref2 => {
  let {
    iconSvg
  } = _ref2;
  return iconSvg && (0, _styledComponents.css)(["background:transparent no-repeat;background-image:url('data:image/svg+xml,", "');background-position:calc(100% - ", ") center;"], iconSvg, (0, _typography.pxToRem)(5));
});

const Number = _ref3 => {
  let {
    label,
    fieldComponent: Field,
    labelComponent: Label,
    inputComponent: Input,
    errorComponent: Error
  } = _ref3;
  const {
    values: {
      number
    },
    setInputValues
  } = (0, _.useFormContext)();
  const ccType = (0, _helpers.getCreditCardType)(number);
  const ccFormat = (0, _helpers.getCreditCardFormat)(ccType);
  const ccIconSvg = (0, _helpers.getIconSvgStringByType)(ccType.type);

  const handleChange = _ref4 => {
    let {
      value
    } = _ref4;
    const {
      type
    } = (0, _helpers.getCreditCardType)(value);
    setInputValues({
      number: value,
      type
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
  fieldComponent: props => /*#__PURE__*/_react.default.createElement("div", props),
  labelComponent: props => /*#__PURE__*/_react.default.createElement("label", props),
  inputComponent: props => /*#__PURE__*/_react.default.createElement("input", props),
  errorComponent: () => null
};