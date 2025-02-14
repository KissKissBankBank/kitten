import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { Step } from './components/step';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
const StyledContainer = styled.div.withConfig({
  displayName: "vertical-progress__StyledContainer",
  componentId: "sc-1i211v2-0"
})(["&:not(.k-VerticalProgress__wrapper--withoutBorder){border:var(--border);padding:", ";border-radius:var(--border-radius-l);@media (min-width:", "px){padding:", ";}}.k-VerticalProgress{position:relative;padding:0;}.k-VerticalProgress__list{margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";content:'';border-left:", " dotted var(--color-grey-400);}}"], pxToRem(15), ScreenConfig.S.min, pxToRem(30), pxToRem(14), pxToRem(2));
export const VerticalProgress = _ref => {
  let {
    children,
    withoutBorder,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledContainer, {
    className: classNames('k-VerticalProgress__wrapper', className, {
      'k-VerticalProgress__wrapper--withoutBorder': withoutBorder
    })
  }, /*#__PURE__*/React.createElement("nav", {
    className: "k-VerticalProgress"
  }, /*#__PURE__*/React.createElement("ul", _extends({
    role: "tablist",
    className: "k-VerticalProgress__list"
  }, props), children)));
};
VerticalProgress.propTypes = {
  withoutBorder: PropTypes.bool
};
VerticalProgress.defaultProps = {
  withoutBorder: false
};
VerticalProgress.Step = Step;