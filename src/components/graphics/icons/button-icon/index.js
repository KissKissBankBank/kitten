"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title"];

var ButtonIcon = function ButtonIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "40",
    height: "18",
    viewBox: "0 0 40 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), ">", /*#__PURE__*/_react.default.createElement("path", {
    d: "M40 0v18H0V0h40zM14.363 7.772H13.4v2.405c0 .585.143 1.035.43 1.35.287.315.658.473 1.114.473.225 0 .428-.037.608-.11.135-.055.256-.128.362-.221l.102-.1v.338h.945V7.772H16v2.33c0 .303-.075.552-.224.746-.149.194-.361.291-.637.291-.247 0-.439-.081-.574-.244a.91.91 0 01-.194-.495l-.008-.155V7.772zm11.223-.101c-.298 0-.578.055-.84.164a2.062 2.062 0 00-1.13 1.144c-.11.264-.165.551-.165.86 0 .31.055.597.165.861.11.265.26.493.452.684a2.149 2.149 0 001.519.616 2.118 2.118 0 001.51-.616 2.175 2.175 0 00.624-1.544 2.175 2.175 0 00-.624-1.549 2.073 2.073 0 00-.675-.456 2.118 2.118 0 00-.836-.164zm-6.362-1.055h-.954v1.156h-.608v.86h.608v1.815c0 .523.103.899.308 1.127.205.228.578.342 1.118.342.163 0 .29-.003.38-.009l.127-.008h.008v-.861l-.122.008a2.95 2.95 0 01-.19.009c-.27 0-.45-.05-.54-.152-.075-.084-.12-.237-.132-.458l-.003-.141V8.633h1.611v1.814c0 .523.103.899.308 1.127.206.228.579.342 1.119.342.163 0 .29-.003.38-.009l.126-.008h.008v-.861l-.122.008a2.95 2.95 0 01-.19.009c-.27 0-.45-.05-.54-.152-.075-.084-.119-.237-.131-.458l-.004-.141V8.633h.987v-.86h-.987V6.615h-.954v1.156h-1.611V6.616zM10.118 6H7.654v5.907h2.608c.613 0 1.105-.15 1.476-.451.372-.301.557-.71.557-1.228 0-.265-.063-.52-.19-.768-.126-.248-.333-.459-.62-.633a1.52 1.52 0 00.667-1.266c0-.27-.05-.503-.152-.7a1.34 1.34 0 00-.418-.485 1.86 1.86 0 00-.641-.283 3.243 3.243 0 00-.604-.087L10.118 6zm20.59 1.67a1.464 1.464 0 00-.984.354l-.087.086v-.338h-.945v4.135h.962V9.62c0-.32.077-.58.232-.78.155-.2.381-.3.68-.3.264 0 .466.089.607.266.117.148.186.333.205.557l.006.14v2.404h.962V9.502c0-.585-.146-1.036-.439-1.354-.292-.318-.692-.477-1.198-.477zm-5.122.879c.332 0 .607.122.823.367.217.244.325.552.325.924 0 .371-.108.679-.325.924-.216.244-.49.367-.823.367a1.06 1.06 0 01-.83-.367c-.217-.245-.326-.553-.326-.924 0-.372.109-.68.325-.924a1.06 1.06 0 01.831-.367zm-15.578.801c.35 0 .649.055.9.165.25.11.375.316.375.62 0 .332-.125.558-.376.68-.25.12-.561.18-.932.18H8.658V9.35h1.35zm-.143-2.439c.349 0 .647.047.894.14.248.092.372.294.372.603 0 .304-.118.51-.355.616-.236.107-.523.16-.86.16H8.658V6.911h1.207z",
    fill: color
  }));
};

exports.ButtonIcon = ButtonIcon;
ButtonIcon.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string
};
ButtonIcon.defaultProps = {
  color: '#222',
  title: ''
};