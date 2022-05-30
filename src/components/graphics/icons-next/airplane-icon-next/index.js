"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.AirplaneIconNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "title", "direction"];

var AirplaneIconNext = function AirplaneIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      direction = _ref.direction,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: "19",
    height: "18",
    viewBox: "0 0 19 18",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), direction == "up-left" && /*#__PURE__*/_react.default.createElement("path", {
    d: "M9.837 17.603c.353-.22.653-.524.877-.89l7.33-11.974a2.98 2.98 0 0 0 .434-1.472 2.999 2.999 0 0 0-.35-1.497A2.72 2.72 0 0 0 17.102.695a2.462 2.462 0 0 0-1.4-.331l-13.28.86a2.49 2.49 0 0 0-1.254.439 2.752 2.752 0 0 0-.896 1.041c-.212.424-.32.9-.312 1.38.006.482.127.953.35 1.37l.039.072c.167.312.387.586.65.808l4.147 3.52.754 5.634c.047.356.157.698.324 1.01l.038.072c.348.648.92 1.12 1.59 1.314.67.194 1.385.093 1.986-.28Zm-2.178-2a1.09 1.09 0 0 1-.113-.36L6.812 9.85l4.07-2.534-.83-1.548L5.983 8.3 2.018 4.918a1.012 1.012 0 0 1-.233-.286l-.038-.072a1.097 1.097 0 0 1-.013-1.002.996.996 0 0 1 .326-.38.913.913 0 0 1 .455-.164l13.288-.865a.902.902 0 0 1 .513.122.997.997 0 0 1 .376.394 1.098 1.098 0 0 1-.03 1.087L9.323 15.731a.988.988 0 0 1-.358.344.901.901 0 0 1-.93-.031 1.002 1.002 0 0 1-.337-.368l-.039-.072Z"
  }), direction == "left" && /*#__PURE__*/_react.default.createElement("path", {
    d: "M3.428 18c.415 0 .831-.1 1.215-.292l11.61-6.174c.46-.23.856-.583 1.146-1.02a3 3 0 0 0 .495-1.457 2.72 2.72 0 0 0-.305-1.456 2.461 2.461 0 0 0-1.012-1.02L4.847.293a2.49 2.49 0 0 0-1.296-.29 2.752 2.752 0 0 0-1.311.41 3.002 3.002 0 0 0-.995 1.007A2.993 2.993 0 0 0 .82 2.768l-.005.082c-.023.352.019.701.124 1.028L2.6 9.058l-1.396 5.065a2.963 2.963 0 0 0-.26 1.028l-.005.082a2.656 2.656 0 0 0 .656 1.956c.467.518 1.126.81 1.834.811Zm-.792-2.849a1.09 1.09 0 0 1 .094-.365l1.287-4.85h4.794V8.182h-4.68L2.554 3.215a1.012 1.012 0 0 1-.047-.365l.005-.082a1.097 1.097 0 0 1 .52-.858 1.01 1.01 0 0 1 .477-.15.913.913 0 0 1 .472.102L15.718 8.15a.902.902 0 0 1 .371.374 1 1 0 0 1 .112.533 1.098 1.098 0 0 1-.601.908L3.98 16.139a.987.987 0 0 1-.486.102.902.902 0 0 1-.772-.517 1.001 1.001 0 0 1-.093-.491l.006-.082Z"
  }));
};

exports.AirplaneIconNext = AirplaneIconNext;
AirplaneIconNext.propTypes = {
  color: _propTypes.default.string,
  title: _propTypes.default.string,
  direction: _propTypes.default.oneOf[('up-left', 'left')]
};
AirplaneIconNext.defaultProps = {
  color: '#222',
  title: null,
  direction: "up-left"
};