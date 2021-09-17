"use strict";

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CreditCardForm = exports.useFormContext = void 0;

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.assign.js");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

var _number = require("./components/number");

var _expiry = require("./components/expiry");

var _cvc = require("./components/cvc");

var _excluded = ["children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultProps = {
  values: {
    number: '',
    expiry: '',
    cvc: '',
    type: ''
  },
  onChange: function onChange(_values) {}
};
var FormContext = /*#__PURE__*/(0, _react.createContext)(defaultProps);

var useFormContext = function useFormContext() {
  return (0, _react.useContext)(FormContext);
};

exports.useFormContext = useFormContext;

var CreditCardForm = function CreditCardForm(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)((0, _merge.default)(defaultProps.values)(props.values)),
      inputValues = _useState[0],
      updateInputValues = _useState[1];

  var contextValues = (0, _merge.default)(defaultProps)(Object.assign({}, props, {
    values: inputValues,
    setInputValues: function setInputValues(v) {
      updateInputValues((0, _merge.default)(inputValues)(v));
    }
  }));
  (0, _react.useEffect)(function () {
    contextValues.onChange(inputValues);
  }, [inputValues]);
  return /*#__PURE__*/_react.default.createElement(FormContext.Provider, {
    value: contextValues
  }, children);
};

exports.CreditCardForm = CreditCardForm;
CreditCardForm.Number = _number.Number;
CreditCardForm.Expiry = _expiry.Expiry;
CreditCardForm.Cvc = _cvc.Cvc;