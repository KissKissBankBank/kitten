"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useFormContext = exports.CreditCardForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _merge = _interopRequireDefault(require("lodash/fp/merge"));

var _number = require("./components/number");

var _expiry = require("./components/expiry");

var _cvc = require("./components/cvc");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultProps = {
  values: {
    number: '',
    expiry: '',
    cvc: '',
    type: ''
  },
  onChange: _values => {}
};
const FormContext = /*#__PURE__*/(0, _react.createContext)(defaultProps);

const useFormContext = () => (0, _react.useContext)(FormContext);

exports.useFormContext = useFormContext;

const CreditCardForm = _ref => {
  let {
    children,
    ...props
  } = _ref;
  const [inputValues, updateInputValues] = (0, _react.useState)((0, _merge.default)(defaultProps.values)(props.values));
  const contextValues = (0, _merge.default)(defaultProps)({ ...props,
    values: inputValues,
    setInputValues: v => {
      updateInputValues((0, _merge.default)(inputValues)(v));
    }
  });
  (0, _react.useEffect)(() => {
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