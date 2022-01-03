"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Progress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["color", "className", "value", "rampProps", "variant", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var valueMin = 0;
var valueMax = 100;

var StyledProgress = _styledComponents.default.div.withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-8timnv-0"
})(["max-width:100%;.k-Meters-Progress__ramp{position:relative;height:", ";background:", ";&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:var(--progress-value);transition:max-width 1s cubic-bezier(0,0.5,0.3,1);background:var(--progress-color);}}&.k-Meters-Progress--disabled,&.is-disabled{.k-Meters-Progress__ramp::after{background:", ";}}&.k-Meters-Progress--orion .k-Meters-Progress__ramp{&,&::after{border-radius:var(--border-radius-xs);}}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.line2);

var Progress = function Progress(_ref) {
  var color = _ref.color,
      className = _ref.className,
      value = _ref.value,
      rampProps = _ref.rampProps,
      variant = _ref.variant,
      disabled = _ref.disabled,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(0),
      progressValue = _useState[0],
      setProgressValue = _useState[1];

  (0, _react.useEffect)(function () {
    var progress = Math.min(Math.max(parseInt(value, 10), valueMin), valueMax);
    setProgressValue(progress);
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(StyledProgress, (0, _extends2.default)({}, others, {
    role: "progressbar",
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue,
    className: (0, _classnames.default)('k-Meters-Progress', className, "k-Meters-Progress--" + variant, {
      'k-Meters-Progress--disabled': disabled
    }),
    style: {
      '--progress-color': color,
      '--progress-value': progressValue + "%"
    }
  }), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rampProps, {
    className: (0, _classnames.default)('k-Meters-Progress__ramp', rampProps.className)
  })));
};

exports.Progress = Progress;
Progress.defaultProps = {
  color: _colorsConfig.default.primary1,
  value: '50',
  rampProps: {},
  variant: 'orion'
};
Progress.propTypes = {
  color: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rampProps: _propTypes.default.object,
  variant: _propTypes.default.oneOf(['orion', 'andromeda'])
};