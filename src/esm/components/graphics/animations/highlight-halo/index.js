import _extends from "@babel/runtime/helpers/extends";
import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';

const bubbleAnimationKeyframes = () => keyframes(["0%{transform:scale(0);opacity:0;}33.33%{transform:scale(1.1);opacity:0.2;}50%{transform:scale(0.8);}66.66%{transform:scale(1.05);}83.33%{transform:scale(0.9);}100%{transform:scale(1);opacity:0.2;}"]);

const breathingAnimationKeyframes = () => keyframes(["0%{transform:scale(1);opacity:0.2;}50%{transform:scale(.84);}100%{transform:scale(1);opacity:0.2;}"]);

const endingAnimationKeyframes = () => keyframes(["from{transform:scale(1);opacity:0.2;}to{transform:scale(0);opacity:0;}"]);

const StyledHighlightHalo = styled.div.withConfig({
  displayName: "highlight-halo__StyledHighlightHalo",
  componentId: "sc-wdgqsh-0"
})(["position:relative;height:", ";width:", ";transform:translate(-50%,-50%);> div{position:absolute;left:0;top:0;opacity:0;border-radius:var(--border-radius-rounded);background-color:", ";transform:scale(0);", ";}> div:nth-of-type(1){top:33.33%;left:33.33%;width:33.33%;height:33.33%;", "}> div:nth-of-type(2){top:16.66%;left:16.66%;width:66.66%;height:66.66%;", "}> div:nth-of-type(3){width:100%;height:100%;", "}"], _ref => {
  let {
    haloSize
  } = _ref;
  return pxToRem(haloSize);
}, _ref2 => {
  let {
    haloSize
  } = _ref2;
  return pxToRem(haloSize);
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
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay, animationDelay + 0.5, animationDelay + 0.5 + getAnimationDelay);
}, _ref6 => {
  let {
    animationDelay,
    getAnimationDelay
  } = _ref6;
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.1, animationDelay + 0.1 + 0.5, animationDelay + 0.1 + 0.5 + getAnimationDelay);
}, _ref7 => {
  let {
    animationDelay,
    getAnimationDelay
  } = _ref7;
  return css(["animation-delay:", "s,", "s,", "s;"], animationDelay + 0.2, animationDelay + 0.2 + 0.5, animationDelay + 0.2 + 0.5 + getAnimationDelay);
});
export class HighlightHalo extends Component {
  constructor() {
    super(...arguments);

    this.highlightHaloAnimation = () => {
      var animationEasing = 'ease-in-out';

      if (typeof this.props.animationCycles === 'number' && this.props.animationCycles >= 0) {
        return css(["animation-name:", ",", ",", ";animation-duration:0.5s,", "s,0.1s;animation-timing-function:", ",", ",", ";animation-iteration-count:1,", ",1;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, endingAnimationKeyframes, this.props.animationCycleDuration, animationEasing, animationEasing, animationEasing, this.props.animationCycles);
      }

      return css(["animation-name:", ",", ";animation-duration:0.5s,", "s;animation-timing-function:", ",", ";animation-iteration-count:1,infinite;"], bubbleAnimationKeyframes, breathingAnimationKeyframes, this.props.animationCycleDuration, animationEasing, animationEasing);
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
    return /*#__PURE__*/React.createElement(StyledHighlightHalo, _extends({
      highlightHaloAnimation: this.highlightHaloAnimation(),
      getAnimationDelay: this.getAnimationDelay()
    }, other, {
      onAnimationEnd: this.handleAnimationEnd
    }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
      ref: ref => this.lastAnimatedDiv = ref
    }));
  }

}
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
  onHaloAnimationEnd: () => {}
};