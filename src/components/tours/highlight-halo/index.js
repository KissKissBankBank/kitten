"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HighlightHalo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var bubbleAnimationKeyframes = function bubbleAnimationKeyframes() {
  return (0, _styledComponents.keyframes)(["0%{transform:scale(0);opacity:0;}33.33%{transform:scale(1.1);opacity:0.2;}50%{transform:scale(0.8);}66.66%{transform:scale(1.05);}83.33%{transform:scale(0.9);}100%{transform:scale(1);opacity:0.2;}"]);
};

var breathingAnimationKeyframes = function breathingAnimationKeyframes() {
  return (0, _styledComponents.keyframes)(["0%{transform:scale(1);opacity:0.2;}50%{transform:scale(.84);}100%{transform:scale(1);opacity:0.2;}"]);
};

var endingAnimationKeyframes = function endingAnimationKeyframes() {
  return (0, _styledComponents.keyframes)(["from{transform:scale(1);opacity:0.2;}to{transform:scale(0);opacity:0;}"]);
};

var StyledHighlightHalo = _styledComponents.default.div.withConfig({
  displayName: "highlight-halo__StyledHighlightHalo",
  componentId: "sc-1pxsuit-0"
})(["position:relative;height:", ";width:", ";transform:translate(-50%,-50%);> div{position:absolute;left:0;top:0;opacity:0;border-radius:50%;background-color:", ";transform:scale(0);", ";}> div:nth-of-type(1){top:33.33%;left:33.33%;width:33.33%;height:33.33%;", "}> div:nth-of-type(2){top:16.66%;left:16.66%;width:66.66%;height:66.66%;", "}> div:nth-of-type(3){width:100%;height:100%;", "}"], function (_ref) {
  var haloSize = _ref.haloSize;
  return (0, _typography.pxToRem)(haloSize);
}, function (_ref2) {
  var haloSize = _ref2.haloSize;
  return (0, _typography.pxToRem)(haloSize);
}, function (_ref3) {
  var haloColor = _ref3.haloColor;
  return haloColor;
}, function (_ref4) {
  var highlightHaloAnimation = _ref4.highlightHaloAnimation;
  return highlightHaloAnimation;
}, function (_ref5) {
  var animationDelay = _ref5.animationDelay,
      getAnimationDelay = _ref5.getAnimationDelay;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay, animationDelay + 0.5, animationDelay + 0.5 + getAnimationDelay);
}, function (_ref6) {
  var animationDelay = _ref6.animationDelay,
      getAnimationDelay = _ref6.getAnimationDelay;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.1, animationDelay + 0.1 + 0.5, animationDelay + 0.1 + 0.5 + getAnimationDelay);
}, function (_ref7) {
  var animationDelay = _ref7.animationDelay,
      getAnimationDelay = _ref7.getAnimationDelay;
  return (0, _styledComponents.css)(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.2, animationDelay + 0.2 + 0.5, animationDelay + 0.2 + 0.5 + getAnimationDelay);
});

var HighlightHalo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HighlightHalo, _Component);

  function HighlightHalo() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, HighlightHalo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(HighlightHalo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.highlightHaloAnimation = function () {
      var animationEasing = 'ease-in-out';

      if (typeof _this.props.animationCycles === 'number' && _this.props.animationCycles >= 0) {
        return (0, _styledComponents.css)(["animation-name:", ",", ",", ";animation-duration:0.5s,", "s,0.1s;animation-timing-function:", ",", ",", ";animation-iteration-count:1,", ",1;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, endingAnimationKeyframes, _this.props.animationCycleDuration, animationEasing, animationEasing, animationEasing, _this.props.animationCycles);
      }

      return (0, _styledComponents.css)(["animation-name:", ",", ";animation-duration:0.5s,", "s;animation-timing-function:", ",", ";animation-iteration-count:1,infinite;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, _this.props.animationCycleDuration, animationEasing, animationEasing);
    };

    _this.getAnimationDelay = function () {
      var animationCycles = parseInt(_this.props.animationCycles, 10);

      if (animationCycles >= 0) {
        return animationCycles * _this.props.animationCycleDuration;
      }

      return 0;
    };

    _this.handleAnimationEnd = function (event) {
      var animationName = event.animationName;
      var lastAnimationName = endingAnimationKeyframes().getName();
      event.persist();
      if (animationName !== lastAnimationName || _this.lastAnimatedDiv != event.target) return;

      _this.props.onHaloAnimationEnd();
    };

    return _this;
  }

  (0, _createClass2.default)(HighlightHalo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onHaloAnimationEnd = _this$props.onHaloAnimationEnd,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["onHaloAnimationEnd"]);
      return _react.default.createElement(StyledHighlightHalo, (0, _extends2.default)({
        highlightHaloAnimation: this.highlightHaloAnimation(),
        getAnimationDelay: this.getAnimationDelay()
      }, other, {
        onAnimationEnd: this.handleAnimationEnd
      }), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", {
        ref: function ref(_ref8) {
          return _this2.lastAnimatedDiv = _ref8;
        }
      }));
    }
  }]);
  return HighlightHalo;
}(_react.Component);

exports.HighlightHalo = HighlightHalo;
HighlightHalo.propTypes = {
  haloColor: _propTypes.default.string,
  haloSize: _propTypes.default.number,
  animationCycles: _propTypes.default.oneOfType([_propTypes.default.oneOf(['infinite']), // `infinite` will cause no shutdown
  _propTypes.default.number]),
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
  onHaloAnimationEnd: function onHaloAnimationEnd() {}
};