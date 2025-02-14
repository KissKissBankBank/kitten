import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Progress } from '../../../feedback/progress';
import { Text } from '../../../typography/text';
const StyledCard = styled.a.withConfig({
  displayName: "horizontal-project-card__StyledCard",
  componentId: "sc-1k9w47l-0"
})(["border:var(--border-width) solid transparent;background-color:", ";box-sizing:border-box;height:", ";width:100%;padding:", ";display:grid;gap:", " ", ";grid-template-columns:", " ", " 1fr;grid-template-rows:auto repeat(2,1fr);text-decoration:none;color:", ";border-radius:calc(", " + var(--border-width));transition:background-color 0.2s ease,border-color 0.2s ease;&[href]:hover{border-color:var(--color-grey-400);background-color:", ";}&[href]:active{border-color:var(--color-grey-500);background-color:", ";}&[href]:focus-visible{outline:auto;}.k-HorizontalProjectCard__imageWrapper{grid-column:1 / span 1;grid-row:1 / span 3;img{width:", ";height:", ";object-fit:cover;object-position:center;border-radius:var(--border-radius-xs);}}.k-HorizontalProjectCard__title{grid-column:2 / span 2;grid-row:1 / 2;margin:0;line-height:1.2;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalProjectCard__description{grid-column:2 / span 2;grid-row:2 / 3;margin:0;line-height:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalProjectCard__info{grid-column:2 / span 1;grid-row:3 / 4;}.k-HorizontalProjectCard__progress{grid-column:3 / span 1;grid-row:3 / 4;place-self:center stretch;display:flex;gap:", ";align-items:center;.k-HorizontalProjectCard__progress__ramp{flex:1 0 calc(100% - ", ");}.k-HorizontalProjectCard__progress__value{flex:0 0 ", ";width:", ";}@media (max-width:", "){display:none;}}&.k-HorizontalProjectCard--noBottomLine{grid-template-rows:repeat(2,1fr);.k-HorizontalProjectCard__imageWrapper{grid-row:1 / span 2;}.k-HorizontalProjectCard__title{align-self:end;}}@media (max-width:", "){&.k-HorizontalProjectCard--noProgressOnMobile{.k-HorizontalProjectCard__progress{display:none;}.k-HorizontalProjectCard__info{grid-column:2 / span 2;}}}"], COLORS.background1, pxToRem(70), pxToRem(4), pxToRem(5), pxToRem(10), pxToRem(100), pxToRem(110), COLORS.font1, pxToRem(4 + 4), COLORS.background2, COLORS.background3, pxToRem(100), pxToRem(60), pxToRem(5), pxToRem(5 + 46), pxToRem(46), pxToRem(46), pxToRem(ScreenConfig.XXS.max), pxToRem(ScreenConfig.XS.max));
export const HorizontalProjectCard = _ref => {
  let {
    href = '#',
    imageProps = {
      src: '',
      alt: ''
    },
    title = '',
    titleTag = 'h3',
    description = '',
    info = null,
    progress = 0,
    progressColor = COLORS.primary1,
    className,
    noProgressOnMobile = false,
    noProgress = false,
    progressLabel = 'progression',
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    href: href,
    className: classNames('k-HorizontalProjectCard', className, {
      'k-HorizontalProjectCard--noProgressOnMobile': noProgressOnMobile,
      'k-HorizontalProjectCard--noBottomLine': !info && noProgress
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalProjectCard__imageWrapper"
  }, /*#__PURE__*/React.createElement("img", _extends({}, imageProps, {
    alt: imageProps.alt || ''
  }))), /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    size: "small",
    as: titleTag,
    className: "k-HorizontalProjectCard__title"
  }, title), /*#__PURE__*/React.createElement(Text, {
    as: "p",
    weight: "400",
    size: "micro",
    className: "k-HorizontalProjectCard__description"
  }, description), !!info && /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalProjectCard__info"
  }, info), !noProgress && /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalProjectCard__progress"
  }, /*#__PURE__*/React.createElement(Progress, {
    "aria-label": progressLabel,
    value: progress,
    color: progressColor,
    rampProps: {
      style: {
        height: 4
      }
    },
    className: "k-HorizontalProjectCard__progress__ramp"
  }), /*#__PURE__*/React.createElement(Text, {
    weight: "400",
    size: "micro",
    className: "k-HorizontalProjectCard__progress__value"
  }, progress, "\xA0%")));
};
HorizontalProjectCard.propTypes = {
  href: PropTypes.string,
  imageProps: PropTypes.object,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.node,
  progress: PropTypes.number,
  progressColor: PropTypes.string,
  progressLabel: PropTypes.string,
  noProgress: PropTypes.bool,
  noProgressOnMobile: PropTypes.bool
};