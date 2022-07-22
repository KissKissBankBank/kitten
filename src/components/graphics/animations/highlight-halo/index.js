"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HighlightHalo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typography = require("../../../../helpers/utils/typography");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const bubbleAnimationKeyframes = () => (0, _styledComponents.keyframes)(["0%{transform:scale(0);opacity:0;}33.33%{transform:scale(1.1);opacity:0.2;}50%{transform:scale(0.8);}66.66%{transform:scale(1.05);}83.33%{transform:scale(0.9);}100%{transform:scale(1);opacity:0.2;}"]);

const breathingAnimationKeyframes = () => (0, _styledComponents.keyframes)(["0%{transform:scale(1);opacity:0.2;}50%{transform:scale(.84);}100%{transform:scale(1);opacity:0.2;}"]);

const endingAnimationKeyframes = () => (0, _styledComponents.keyframes)(["from{transform:scale(1);opacity:0.2;}to{transform:scale(0);opacity:0;}"]);

const StyledHighlightHalo = _styledComponents.default.div.withConfig({
  displayName: "highlight-halo__StyledHighlightHalo",
  componentId: "sc-wdgqsh-0"
})(["position:relative;height:", ";width:", ";transform:translate(-50%,-50%);> div{position:absolute;left:0;top:0;opacity:0;border-radius:var(--border-radius-rounded);background-color:", ";transform:scale(0);", ";}> div:nth-of-type(1){top:33.33%;left:33.33%;width:33.33%;height:33.33%;", "}> div:nth-of-type(2){top:16.66%;left:16.66%;width:66.66%;height:66.66%;", "}> div:nth-of-type(3){width:100%;height:100%;", "}"], _ref => {
  let {
    haloSize
  } = _ref;
  return (0, _typography.pxToRem)(haloSize);
}, _ref2 => {
  let {
    haloSize
  } = _ref2;
  return (0, _typography.pxToRem)(haloSize);
}, _ref3 => {
  let {
    haloColor
  } = _ref3;
  return haloColor;
}, _ref4 => {
  let {
    highlightHaloAnimation
  } = _ref4;
  return highlightHaloAnimation;
}, _ref5 => {
  let {
    animationDelay,
    getAnimationDelay
  } = _ref5;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay, animationDelay + 0.5, animationDelay + 0.5 + getAnimationDelay);
}, _ref6 => {
  let {
    animationDelay,
    getAnimationDelay
  } = _ref6;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.1, animationDelay + 0.1 + 0.5, animationDelay + 0.1 + 0.5 + getAnimationDelay);
}, _ref7 => {
  let {
    animationDelay,
    getAnimationDelay
  } = _ref7;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.2, animationDelay + 0.2 + 0.5, animationDelay + 0.2 + 0.5 + getAnimationDelay);
});

class HighlightHalo extends _react.Component {
  constructor() {
    super(...arguments);

    this.highlightHaloAnimation = () => {
      var animationEasing = 'ease-in-out';

      if (typeof this.props.animationCycles === 'number' && this.props.animationCycles >= 0) {
        return (0, _styledComponents.css)(["animation-name:", ",", ",", ";animation-duration:0.5s,", "s,0.1s;animation-timing-function:", ",", ",", ";animation-iteration-count:1,", ",1;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, endingAnimationKeyframes, this.props.animationCycleDuration, animationEasing, animationEasing, animationEasing, this.props.animationCycles);
      }

      return (0, _styledComponents.css)(["animation-name:", ",", ";animation-duration:0.5s,", "s;animation-timing-function:", ",", ";animation-iteration-count:1,infinite;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, this.props.animationCycleDuration, animationEasing, animationEasing);
    };

    this.getAnimationDelay = () => {
      const animationCycles = parseInt(this.props.animationCycles, 10);

      if (animationCycles >= 0) {
        return animationCycles * this.props.animationCycleDuration;
      }

      return 0;
    };

    this.handleAnimationEnd = event => {
      const animationName = event.animationName;
      const lastAnimationName = endingAnimationKeyframes().getName();
      event.persist();
      if (animationName !== lastAnimationName || this.lastAnimatedDiv != event.target) return;
      this.props.onHaloAnimationEnd();
    };
  }

  render() {
    const {
      onHaloAnimationEnd,
      ...other
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(StyledHighlightHalo, (0, _extends2.default)({
      highlightHaloAnimation: this.highlightHaloAnimation(),
      getAnimationDelay: this.getAnimationDelay()
    }, other, {
      onAnimationEnd: this.handleAnimationEnd
    }), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref => this.lastAnimatedDiv = ref
    }));
  }

}

exports.HighlightHalo = HighlightHalo;
HighlightHalo.propTypes = {
  haloColor: _propTypes.default.string,
  haloSize: _propTypes.default.number,
  animationCycles: _propTypes.default.oneOfType([_propTypes.default.oneOf(['infinite']), // `infinite` will cause no shutdown
  _propTypes.default.number // number of 'breathing' cycles before shutting down
  ]),
  animationCycleDuration: _propTypes.default.number,
  // time in seconds
  animationDelay: _propTypes.default.number,
  // time in seconds
  onHaloAnimationEnd: _propTypes.default.func
};
HighlightHalo.defaultProps = {
  haloColor: _colorsConfig.default.primary1,
  haloSize: 120,
  animationCycles: 3,
  animationCycleDuration: 4,
  animationDelay: 0,
  onHaloAnimationEnd: () => {}
};