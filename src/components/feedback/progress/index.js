"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Progress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const valueMin = 0;
const valueMax = 100;

const StyledProgress = _styledComponents.default.div.withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-12czziu-0"
})(["max-width:100%;.k-Meters-Progress__ramp{position:relative;height:", ";background:", ";border-radius:var(--border-radius-xs);&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:var(--progress-value);transition:max-width 1s cubic-bezier(0,0.5,0.3,1);border-radius:var(--border-radius-xs);background:var(--progress-color);}}&.k-Meters-Progress--disabled,&.is-disabled{.k-Meters-Progress__ramp::after{background:", ";}}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, _colorsConfig.default.line2);

const Progress = _ref => {
  let {
    color,
    className,
    value,
    rampProps,
    disabled,
    ...others
  } = _ref;
  const [progressValue, setProgressValue] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    const progress = Math.min(Math.max(parseInt(value, 10), valueMin), valueMax);
    setProgressValue(progress);
  }, [value]);
  return /*#__PURE__*/_react.default.createElement(StyledProgress, (0, _extends2.default)({}, others, {
    role: "progressbar",
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue,
    className: (0, _classnames.default)('k-Meters-Progress', className, {
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
  rampProps: {}
};
Progress.propTypes = {
  color: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  rampProps: _propTypes.default.object
};