import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';

var bubbleAnimationKeyframes = function bubbleAnimationKeyframes() {
  return keyframes(["0%{transform:scale(0);opacity:0;}33.33%{transform:scale(1.1);opacity:0.2;}50%{transform:scale(0.8);}66.66%{transform:scale(1.05);}83.33%{transform:scale(0.9);}100%{transform:scale(1);opacity:0.2;}"]);
};

var breathingAnimationKeyframes = function breathingAnimationKeyframes() {
  return keyframes(["0%{transform:scale(1);opacity:0.2;}50%{transform:scale(.84);}100%{transform:scale(1);opacity:0.2;}"]);
};

var endingAnimationKeyframes = function endingAnimationKeyframes() {
  return keyframes(["from{transform:scale(1);opacity:0.2;}to{transform:scale(0);opacity:0;}"]);
};

var StyledHighlightHalo = styled.div.withConfig({
  displayName: "highlight-halo__StyledHighlightHalo",
  componentId: "sc-1pxsuit-0"
})(["position:relative;height:", ";width:", ";transform:translate(-50%,-50%);> div{position:absolute;left:0;top:0;opacity:0;border-radius:50%;background-color:", ";transform:scale(0);", ";}> div:nth-of-type(1){top:33.33%;left:33.33%;width:33.33%;height:33.33%;", "}> div:nth-of-type(2){top:16.66%;left:16.66%;width:66.66%;height:66.66%;", "}> div:nth-of-type(3){width:100%;height:100%;", "}"], function (_ref) {
  var haloSize = _ref.haloSize;
  return pxToRem(haloSize);
}, function (_ref2) {
  var haloSize = _ref2.haloSize;
  return pxToRem(haloSize);
}, function (_ref3) {
  var haloColor = _ref3.haloColor;
  return haloColor;
}, function (_ref4) {
  var highlightHaloAnimation = _ref4.highlightHaloAnimation;
  return highlightHaloAnimation;
}, function (_ref5) {
  var animationDelay = _ref5.animationDelay,
      getAnimationDelay = _ref5.getAnimationDelay;
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay, animationDelay + 0.5, animationDelay + 0.5 + getAnimationDelay);
}, function (_ref6) {
  var animationDelay = _ref6.animationDelay,
      getAnimationDelay = _ref6.getAnimationDelay;
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.1, animationDelay + 0.1 + 0.5, animationDelay + 0.1 + 0.5 + getAnimationDelay);
}, function (_ref7) {
  var animationDelay = _ref7.animationDelay,
      getAnimationDelay = _ref7.getAnimationDelay;
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.2, animationDelay + 0.2 + 0.5, animationDelay + 0.2 + 0.5 + getAnimationDelay);
});
export var HighlightHalo = /*#__PURE__*/function (_Component) {
  _inherits(HighlightHalo, _Component);

  var _super = _createSuper(HighlightHalo);

  function HighlightHalo() {
    var _this;

    _classCallCheck(this, HighlightHalo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.highlightHaloAnimation = function () {
      var animationEasing = 'ease-in-out';

      if (typeof _this.props.animationCycles === 'number' && _this.props.animationCycles >= 0) {
        return css(["animation-name:", ",", ",", ";animation-duration:0.5s,", "s,0.1s;animation-timing-function:", ",", ",", ";animation-iteration-count:1,", ",1;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, endingAnimationKeyframes, _this.props.animationCycleDuration, animationEasing, animationEasing, animationEasing, _this.props.animationCycles);
      }

      return css(["animation-name:", ",", ";animation-duration:0.5s,", "s;animation-timing-function:", ",", ";animation-iteration-count:1,infinite;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, _this.props.animationCycleDuration, animationEasing, animationEasing);
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

  _createClass(HighlightHalo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          onHaloAnimationEnd = _this$props.onHaloAnimationEnd,
          other = _objectWithoutProperties(_this$props, ["onHaloAnimationEnd"]);

      return /*#__PURE__*/React.createElement(StyledHighlightHalo, _extends({
        highlightHaloAnimation: this.highlightHaloAnimation(),
        getAnimationDelay: this.getAnimationDelay()
      }, other, {
        onAnimationEnd: this.handleAnimationEnd
      }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
        ref: function ref(_ref8) {
          return _this2.lastAnimatedDiv = _ref8;
        }
      }));
    }
  }]);

  return HighlightHalo;
}(Component);
HighlightHalo.propTypes = {
  haloColor: PropTypes.string,
  haloSize: PropTypes.number,
  animationCycles: PropTypes.oneOfType([PropTypes.oneOf(['infinite']), // `infinite` will cause no shutdown
  PropTypes.number // number of 'breathing' cycles before shutting down
  ]),
  animationCycleDuration: PropTypes.number,
  // time in seconds
  animationDelay: PropTypes.number,
  // time in seconds
  onHaloAnimationEnd: PropTypes.func
};
HighlightHalo.defaultProps = {
  haloColor: COLORS.primary1,
  haloSize: 120,
  animationCycles: 3,
  animationCycleDuration: 4,
  animationDelay: 0,
  onHaloAnimationEnd: function onHaloAnimationEnd() {}
};