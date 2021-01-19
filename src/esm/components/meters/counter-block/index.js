import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../../../components/typography/title';
import { Text } from '../../../components/typography/text';
import { Marger } from '../../../components/layout/marger';
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
var Container = styled.div.withConfig({
  displayName: "counter-block__Container",
  componentId: "dpxp7s-0"
})(["text-align:center;.styledText{line-height:0.7;white-space:nowrap;display:flex;padding-bottom:", ";margin:0;flex-grow:1;font-size:", ";justify-content:center;@media (min-width:", "px){font-size:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}}.styledSubTitle{margin:0;}"], pxToRem(4), pxToRem(50), ScreenConfig.XS.min, pxToRem(66), ScreenConfig.S.min, pxToRem(96), pxToRem(6), ScreenConfig.M.min, pxToRem(116), pxToRem(7), ScreenConfig.L.min, pxToRem(158), pxToRem(10));
var FlexContainer = styled.div.withConfig({
  displayName: "counter-block__FlexContainer",
  componentId: "dpxp7s-1"
})(["display:flex;justify-content:center;align-items:center;"]);
var StrokeContainer = styled.div.withConfig({
  displayName: "counter-block__StrokeContainer",
  componentId: "dpxp7s-2"
})(["flex-grow:2;.styledStroke{width:100%;height:", ";}"], pxToRem(6));
var Unit = styled.span.withConfig({
  displayName: "counter-block__Unit",
  componentId: "dpxp7s-3"
})(["display:inline-flex;align-self:center;font-size:0.5em;"]);

var isString = function isString(val) {
  return typeof val === 'string';
};

export var CounterBlock = function CounterBlock(_ref) {
  var _React$createElement;

  var title = _ref.title,
      titleTag = _ref.titleTag,
      subTitle = _ref.subTitle,
      subTitleTag = _ref.subTitleTag,
      counter = _ref.counter,
      unit = _ref.unit;
  var margin = {
    default: 2,
    fromS: 4
  };
  return /*#__PURE__*/React.createElement(Container, null, isString(title) ? /*#__PURE__*/React.createElement(Marger, {
    bottom: margin
  }, /*#__PURE__*/React.createElement(Title, {
    modifier: "tertiary",
    margin: false,
    tag: titleTag
  }, title)) : title, /*#__PURE__*/React.createElement(FlexContainer, null, /*#__PURE__*/React.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, /*#__PURE__*/React.createElement(HorizontalStroke, {
    className: "styledStroke",
    size: "big"
  })), isString(counter) ? /*#__PURE__*/React.createElement(Text, {
    className: "styledText",
    weight: "bold",
    tag: titleTag,
    fontStyle: "italic"
  }, counter, unit && /*#__PURE__*/React.createElement(Unit, null, "\xA0", unit)) : counter, /*#__PURE__*/React.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, /*#__PURE__*/React.createElement(HorizontalStroke, {
    className: "styledStroke",
    size: "big"
  }))), isString(subTitle) ? /*#__PURE__*/React.createElement(Marger, {
    top: margin
  }, /*#__PURE__*/React.createElement(Text, (_React$createElement = {
    className: "styledSubTitle",
    size: "huge",
    tag: subTitleTag
  }, _defineProperty(_React$createElement, "tag", "p"), _defineProperty(_React$createElement, "fontStyle", "italic"), _React$createElement), subTitle)) : subTitle);
};
CounterBlock.propTypes = {
  title: PropTypes.node,
  titleTag: PropTypes.string,
  subTitle: PropTypes.node,
  subTitleTag: PropTypes.string,
  counter: PropTypes.node,
  unit: PropTypes.string
};
CounterBlock.defaultProps = {
  title: null,
  titleTag: 'p',
  subTitle: null,
  subTitleTag: 'p',
  counter: '0',
  unit: null
};