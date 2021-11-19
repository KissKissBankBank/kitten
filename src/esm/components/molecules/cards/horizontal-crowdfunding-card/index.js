import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import { Progress } from '../../../../components/atoms/progress';
import { Text } from '../../../../components/atoms/typography/text';
var StyledCard = styled.a.withConfig({
  displayName: "horizontal-crowdfunding-card__StyledCard",
  componentId: "sc-1n362y8-0"
})(["border:var(--border-width) solid transparent;background-color:", ";box-sizing:border-box;height:", ";width:100%;padding:", ";display:grid;gap:", " ", ";grid-template-columns:", " ", " 1fr;grid-template-rows:auto repeat(2,1fr);text-decoration:none;color:", ";border-radius:calc(", " + var(--border-width));transition:background-color 0.2s ease,border-color 0.2s ease;&[href]:hover{border-color:var(--color-grey-400);background-color:", ";}&[href]:active{border-color:var(--color-grey-500);background-color:", ";}&[href]:focus-visible{outline:auto;}.k-HorizontalCrowdfundingCard__imageWrapper{grid-column:1 / span 1;grid-row:1 / span 3;img{width:", ";height:", ";object-fit:cover;object-position:center;border-radius:", ";}}.k-HorizontalCrowdfundingCard__title{grid-column:2 / span 2;grid-row:1 / 2;margin:0;line-height:1.2;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalCrowdfundingCard__description{grid-column:2 / span 2;grid-row:2 / 3;margin:0;line-height:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.k-HorizontalCrowdfundingCard__info{grid-column:2 / span 1;grid-row:3 / 4;}.k-HorizontalCrowdfundingCard__progress{grid-column:3 / span 1;grid-row:3 / 4;place-self:center stretch;display:flex;gap:", ";align-items:center;.k-HorizontalCrowdfundingCard__progress__ramp{flex:1 0 calc(100% - ", ");}.k-HorizontalCrowdfundingCard__progress__value{flex:0 0 ", ";width:", ";}@media (max-width:", "){display:none;}}@media (max-width:", "){&.k-HorizontalCrowdfundingCard--noProgressOnMobile{.k-HorizontalCrowdfundingCard__progress{display:none;}.k-HorizontalCrowdfundingCard__info{grid-column:2 / span 2;}}}"], COLORS.background1, pxToRem(70), pxToRem(4), pxToRem(5), pxToRem(10), pxToRem(100), pxToRem(110), COLORS.font1, pxToRem(4 + 4), COLORS.background2, COLORS.background3, pxToRem(100), pxToRem(60), pxToRem(4), pxToRem(5), pxToRem(5 + 46), pxToRem(46), pxToRem(46), pxToRem(ScreenConfig.XXS.max), pxToRem(ScreenConfig.XS.max));
export var HorizontalCrowdfundingCard = function HorizontalCrowdfundingCard(_ref) {
  var _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#' : _ref$href,
      _ref$imageProps = _ref.imageProps,
      imageProps = _ref$imageProps === void 0 ? {
    src: '',
    alt: ''
  } : _ref$imageProps,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$titleTag = _ref.titleTag,
      titleTag = _ref$titleTag === void 0 ? 'h3' : _ref$titleTag,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? '' : _ref$description,
      _ref$info = _ref.info,
      info = _ref$info === void 0 ? null : _ref$info,
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$progressColor = _ref.progressColor,
      progressColor = _ref$progressColor === void 0 ? COLORS.primary1 : _ref$progressColor,
      className = _ref.className,
      _ref$noProgressOnMobi = _ref.noProgressOnMobile,
      noProgressOnMobile = _ref$noProgressOnMobi === void 0 ? false : _ref$noProgressOnMobi,
      props = _objectWithoutProperties(_ref, ["href", "imageProps", "title", "titleTag", "description", "info", "progress", "progressColor", "className", "noProgressOnMobile"]);

  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    href: href,
    className: classNames('k-HorizontalCrowdfundingCard', className, {
      'k-HorizontalCrowdfundingCard--noProgressOnMobile': noProgressOnMobile
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalCrowdfundingCard__imageWrapper"
  }, /*#__PURE__*/React.createElement("img", _extends({}, imageProps, {
    alt: imageProps.alt || ''
  }))), /*#__PURE__*/React.createElement(Text, {
    weight: "regular",
    size: "tiny",
    as: titleTag,
    className: "k-HorizontalCrowdfundingCard__title"
  }, title), /*#__PURE__*/React.createElement(Text, {
    as: "p",
    weight: "light",
    size: "micro",
    className: "k-HorizontalCrowdfundingCard__description"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalCrowdfundingCard__info"
  }, info), /*#__PURE__*/React.createElement("div", {
    className: "k-HorizontalCrowdfundingCard__progress"
  }, /*#__PURE__*/React.createElement(Progress, {
    value: progress,
    color: progressColor,
    rampProps: {
      style: {
        height: 4
      }
    },
    className: "k-HorizontalCrowdfundingCard__progress__ramp"
  }), /*#__PURE__*/React.createElement(Text, {
    weight: "light",
    size: "micro",
    className: "k-HorizontalCrowdfundingCard__progress__value"
  }, progress, "\xA0%")));
};
HorizontalCrowdfundingCard.propTypes = {
  href: PropTypes.string,
  imageProps: PropTypes.object,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  info: PropTypes.node,
  progress: PropTypes.number,
  progressColor: PropTypes.string,
  noProgressOnMobile: PropTypes.bool
};