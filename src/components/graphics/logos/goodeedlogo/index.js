"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GoodeedLogo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratio = require("../../../../helpers/utils/ratio");

const GoodeedLogo = _ref => {
  let {
    color,
    width,
    height,
    ...props
  } = _ref;
  const DEFAULT_WIDTH = 122;
  const DEFAULT_HEIGHT = 22;
  const computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });
  const viewBox = {
    x: DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": "Goodeed",
    width: computed.width,
    height: computed.height,
    viewBox: "0 0 " + viewBox.x + " " + viewBox.y,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Goodeed"), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    x1: "100%",
    y1: "76.906%",
    x2: "0%",
    y2: "0%",
    id: "GoodeedLogo-a"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#53B1E7",
    offset: "0%"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    stopColor: "#75D6FF",
    offset: "100%"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    d: "M761.391 36.1c-.247.238-.676.357-1.287.357H752.1c-.394 0-.64.037-.738.11-.098.073-.148.256-.148.548 0 .876.295 1.607.886 2.19.59.585 1.334.877 2.231.877.918 0 1.859-.48 2.821-1.44.656-.668 1.377-1.002 2.165-1.002.656 0 1.186.178 1.591.532.405.355.607.803.607 1.345 0 1.211-.695 2.238-2.083 3.083-1.389.845-3.078 1.268-5.068 1.268-2.603 0-4.681-.751-6.233-2.253-1.477-1.429-2.252-3.311-2.323-5.646-.242.259-.681.388-1.319.388h-8.004c-.394 0-.64.037-.738.11-.098.073-.148.256-.148.548 0 .876.295 1.607.886 2.19.59.585 1.334.877 2.231.877.918 0 1.859-.48 2.821-1.44.656-.668 1.378-1.002 2.165-1.002.656 0 1.186.178 1.591.532.405.355.607.803.607 1.345 0 1.211-.694 2.238-2.083 3.083-1.389.845-3.078 1.268-5.068 1.268-2.603 0-4.68-.751-6.233-2.253a7.51 7.51 0 01-.605-.659c.01.1.015.204.015.315 0 .647-.164 1.174-.492 1.581-.328.407-.766.61-1.312.61h-.197l-1.148-.188a7.532 7.532 0 00-1.116-.063c-.569 0-1.039.021-1.411.063-.547.063-.842.094-.886.094-.678 0-1.017-.375-1.017-1.126v-1.158c-1.138 1.857-2.844 2.785-5.118 2.785-2.012 0-3.669-.787-4.97-2.363-.82-.99-1.38-2.145-1.684-3.462-.336 1.427-.967 2.617-1.891 3.572-1.455 1.502-3.483 2.253-6.086 2.253-2.712 0-4.806-.73-6.282-2.191-.964-.954-1.614-2.162-1.948-3.624-.337 1.422-.967 2.61-1.89 3.562-1.455 1.502-3.483 2.253-6.085 2.253-2.712 0-4.806-.73-6.282-2.191-1.306-1.291-2.034-3.05-2.184-5.271a1.48 1.48 0 01-.193.012h-.788c-.59 0-.885.473-.885 1.42 0 .4.011.821.033 1.263l.066 1.357c.022.463.033.905.033 1.326 0 1.409-.809 2.114-2.427 2.114-1.531 0-2.296-.512-2.296-1.534v-.188c-1.512 1.15-3.229 1.723-5.154 1.723a9.477 9.477 0 01-4.757-1.267c-1.487-.845-2.57-1.945-3.248-3.302-.874-1.732-1.311-3.745-1.311-6.04 0-3.505.853-6.28 2.559-8.324 1.706-2.045 4.023-3.067 6.954-3.067 2.296 0 4.21.741 5.741 2.222.197-1.231.853-1.846 1.968-1.846 1.356 0 2.034.626 2.034 1.878 0 .209-.044.626-.131 1.252-.131.939-.197 1.575-.197 1.909 0 .376.021.657.066.845.044.668.066 1.044.066 1.127 0 .543-.252.996-.755 1.361s-1.148.548-1.936.548c-1.269 0-2.034-.595-2.296-1.784s-.64-2.008-1.132-2.457c-.492-.448-1.274-.673-2.346-.673-1.422 0-2.521.631-3.297 1.893-.777 1.263-1.164 3.051-1.164 5.367 0 1.961.377 3.489 1.132 4.585.755 1.095 1.799 1.643 3.133 1.643.853 0 1.558-.235 2.116-.704s.837-1.059.837-1.768c0-.877-.383-1.315-1.148-1.315h-.197a1.002 1.002 0 01-.23.031c-.35.042-.547.062-.59.062-.438 0-.809-.182-1.115-.548-.307-.365-.459-.818-.459-1.361 0-.626.219-1.127.656-1.502.437-.375 1.006-.563 1.706-.563.459 0 1.153.058 2.083.172.929.115 1.635.172 2.116.172.722 0 1.52-.063 2.395-.191.7-.101 1.181-.153 1.443-.153.504 0 .938.104 1.3.312.36-1.202.954-2.219 1.783-3.05 1.465-1.471 3.521-2.206 6.167-2.206 2.602 0 4.653.73 6.151 2.19.976.952 1.635 2.135 1.975 3.547.337-1.414.975-2.591 1.912-3.531 1.465-1.471 3.521-2.206 6.167-2.206 2.602 0 4.653.73 6.151 2.19.98.956 1.64 2.144 1.979 3.564.303-1.27.847-2.364 1.629-3.283 1.28-1.502 2.958-2.253 5.036-2.253 1.662 0 3.193.616 4.593 1.846V27.07c0-.751-.274-1.127-.82-1.127-.131 0-.394.021-.787.062a2.996 2.996 0 01-.853.125c-.416 0-.766-.167-1.05-.501-.285-.334-.426-.751-.426-1.252 0-1.335.743-2.003 2.231-2.003.481 0 .831.011 1.05.031.874.084 1.465.125 1.771.125.284 0 .7-.026 1.246-.078.547-.052.951-.078 1.214-.078.547 0 .924.121 1.132.362.208.242.312.687.312 1.337V38.39c0 1.07.208 1.604.623 1.604.131 0 .295-.044.492-.132.131-.058.306-.087.525-.087.233 0 .437.033.613.098-.628-1.187-.941-2.576-.941-4.167 0-2.524.771-4.563 2.313-6.118 1.542-1.554 3.56-2.331 6.053-2.331 2.318 0 4.171.637 5.56 1.909 1.123 1.031 1.793 2.342 2.007 3.934a7.68 7.68 0 011.995-3.512c1.542-1.554 3.559-2.331 6.052-2.331 2.318 0 4.171.637 5.561 1.909 1.074.985 1.732 2.226 1.975 3.724.309-1.218.842-2.272 1.599-3.161 1.279-1.502 2.957-2.253 5.035-2.253 1.662 0 3.193.616 4.593 1.846V27.07c0-.751-.274-1.127-.82-1.127-.131 0-.394.021-.787.062a3.001 3.001 0 01-.853.125c-.416 0-.766-.167-1.05-.501-.285-.334-.426-.751-.426-1.252 0-1.335.743-2.003 2.231-2.003.481 0 .831.011 1.05.031.874.084 1.465.125 1.771.125.284 0 .7-.026 1.246-.078.547-.052.951-.078 1.214-.078.547 0 .924.121 1.132.362.208.242.312.687.312 1.337V38.39c0 1.07.208 1.604.623 1.604.131 0 .295-.044.492-.132.131-.058.306-.087.525-.087.94 0 1.411.532 1.411 1.596 0 .647-.164 1.174-.492 1.581-.328.407-.766.61-1.312.61H779l-1.148-.188a7.526 7.526 0 00-1.115-.063c-.569 0-1.039.021-1.411.063-.547.063-.842.094-.886.094-.678 0-1.017-.375-1.017-1.126v-1.158c-1.138 1.857-2.843 2.785-5.118 2.785-2.012 0-3.669-.787-4.97-2.363-1.219-1.474-1.866-3.309-1.944-5.505zM688.117 31c-.963 0-1.722.402-2.28 1.205-.558.803-.837 1.904-.837 3.301 0 1.419.279 2.525.837 3.317.558.793 1.339 1.189 2.346 1.189 2.034 0 3.051-1.502 3.051-4.507S690.194 31 688.117 31zm16.367 0c-.964 0-1.723.402-2.28 1.205-.558.803-.837 1.904-.837 3.301 0 1.419.279 2.525.837 3.317.558.793 1.339 1.189 2.346 1.189 2.034 0 3.05-1.502 3.05-4.507S706.56 31 704.485 31zm15.926.42c-.81 0-1.471.365-1.985 1.095-.514.731-.803 1.721-.869 2.973v.407c0 1.273.257 2.274.771 3.004.514.731 1.208 1.096 2.083 1.096.962 0 1.744-.396 2.345-1.189.601-.793.902-1.846.902-3.161 0-1.272-.295-2.295-.886-3.067-.59-.772-1.377-1.158-2.361-1.158zm15.353 1.283c0 .125.033.23.098.313.066.083.295.125.689.125h3.674c.328 0 .53-.036.607-.109.076-.073.115-.204.115-.391 0-.542-.251-1.017-.754-1.424-.503-.407-1.094-.61-1.771-.61-.875 0-1.586.324-2.132.97-.351.417-.526.792-.526 1.126zm15.614 0c0 .125.033.23.098.313.066.083.295.125.689.125h3.674c.328 0 .53-.036.607-.109.076-.073.115-.204.115-.391 0-.542-.252-1.017-.755-1.424-.503-.407-1.094-.61-1.771-.61-.875 0-1.586.324-2.132.97-.35.417-.525.792-.525 1.126zm18.109-1.283c-.81 0-1.471.365-1.985 1.095-.514.731-.804 1.721-.869 2.973v.407c0 1.273.256 2.274.771 3.004.513.731 1.208 1.096 2.083 1.096.962 0 1.744-.396 2.345-1.189.601-.793.902-1.846.902-3.161 0-1.272-.295-2.295-.886-3.067-.59-.772-1.377-1.158-2.361-1.158z",
    transform: "translate(-659 -22)",
    fill: color
  }));
};

exports.GoodeedLogo = GoodeedLogo;
GoodeedLogo.propTypes = {
  color: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
GoodeedLogo.defaultProps = {
  color: 'url(#GoodeedLogo-a)',
  width: null,
  height: null
};