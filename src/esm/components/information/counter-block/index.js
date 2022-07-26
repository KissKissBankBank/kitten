import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from '../../typography/title';
import { Text } from '../../typography/text';
import { Marger } from '../../layout/marger';
import { HorizontalStroke } from '../../typography/horizontal-stroke';
import { ScreenConfig } from '../../../constants/screen-config';
import { pxToRem } from '../../../helpers/utils/typography';
const Container = styled.div.withConfig({
  displayName: "counter-block__Container",
  componentId: "sc-1eax8nd-0"
})(["text-align:center;.styledText{line-height:0.7;white-space:nowrap;display:flex;padding-bottom:", ";margin:0;flex-grow:1;font-size:", ";justify-content:center;@media (min-width:", "px){font-size:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}@media (min-width:", "px){font-size:", ";padding-bottom:", ";}}.styledSubTitle{margin:0;}"], pxToRem(4), pxToRem(50), ScreenConfig.XS.min, pxToRem(66), ScreenConfig.S.min, pxToRem(96), pxToRem(6), ScreenConfig.M.min, pxToRem(116), pxToRem(7), ScreenConfig.L.min, pxToRem(158), pxToRem(10));
const FlexContainer = styled.div.withConfig({
  displayName: "counter-block__FlexContainer",
  componentId: "sc-1eax8nd-1"
})(["display:flex;justify-content:center;align-items:center;"]);
const StrokeContainer = styled.div.withConfig({
  displayName: "counter-block__StrokeContainer",
  componentId: "sc-1eax8nd-2"
})(["flex-grow:2;.styledStroke{width:100%;height:", ";}"], pxToRem(6));
const Unit = styled.span.withConfig({
  displayName: "counter-block__Unit",
  componentId: "sc-1eax8nd-3"
})(["display:inline-flex;align-self:center;font-size:0.5em;"]);

const isString = val => typeof val === 'string';

export const CounterBlock = _ref => {
  let {
    title,
    titleTag,
    subTitle,
    subTitleTag,
    counter,
    unit
  } = _ref;
  const margin = {
    default: 2,
    fromS: 4
  };
  return /*#__PURE__*/React.createElement(Container, null, isString(title) ? /*#__PURE__*/React.createElement(Marger, {
    bottom: margin
  }, /*#__PURE__*/React.createElement(Title, {
    modifier: "tertiary",
    noMargin: true,
    tag: titleTag
  }, title)) : title, /*#__PURE__*/React.createElement(FlexContainer, null, /*#__PURE__*/React.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, /*#__PURE__*/React.createElement(HorizontalStroke, {
    className: "styledStroke",
    size: "large"
  })), isString(counter) ? /*#__PURE__*/React.createElement(Text, {
    className: "styledText",
    weight: "700",
    tag: titleTag,
    fontStyle: "italic"
  }, counter, unit && /*#__PURE__*/React.createElement(Unit, null, "\xA0", unit)) : counter, /*#__PURE__*/React.createElement(StrokeContainer, {
    className: "k-u-hidden@m-down"
  }, /*#__PURE__*/React.createElement(HorizontalStroke, {
    className: "styledStroke",
    size: "large"
  }))), isString(subTitle) ? /*#__PURE__*/React.createElement(Marger, {
    top: margin
  }, /*#__PURE__*/React.createElement(Text, {
    className: "styledSubTitle",
    size: "huge",
    tag: subTitleTag,
    tag: "p",
    fontStyle: "italic",
    weight: "400"
  }, subTitle)) : subTitle);
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