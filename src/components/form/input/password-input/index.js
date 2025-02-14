"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PasswordInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textInput = require("../../../form/input/text-input");

var _passwordIcon = require("../../../graphics/icons/password-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PasswordInput = _ref => {
  let {
    name,
    iconLabel,
    hiddenIconLabel,
    ...others
  } = _ref;
  const [isHidden, setIsHidden] = (0, _react.useState)(true);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, others, {
    name: name,
    type: isHidden ? 'password' : 'text',
    has: "button",
    buttonIsInset: true,
    buttonProps: {
      'aria-label': isHidden ? iconLabel : hiddenIconLabel,
      'aria-pressed': !isHidden,
      onClick: handleClick,
      className: 'k-PasswordInput__icon',
      children: /*#__PURE__*/_react.default.createElement(_passwordIcon.PasswordIcon, {
        color: "var(--color-" + (isHidden ? 'grey-900' : 'primary-500') + ")"
      })
    }
  }));
};

exports.PasswordInput = PasswordInput;
PasswordInput.propTypes = {
  iconLabel: _propTypes.default.string.isRequired,
  hiddenIconLabel: _propTypes.default.string.isRequired,
  name: _propTypes.default.string
};
PasswordInput.defaultProps = {
  name: 'password'
};