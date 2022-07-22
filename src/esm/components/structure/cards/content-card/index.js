import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mq } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Title } from '../../../typography/title';
const StyledCard = styled.article.withConfig({
  displayName: "content-card__StyledCard",
  componentId: "sc-axl17i-0"
})(["padding:", ";box-shadow:var(--box-shadow-m);border-radius:var(--border-radius-m);background-color:var(--color-grey-000);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:", ";@media ", "{padding:", " ", " ", ";}.k-ContentCard__header{", ";font-size:", ";}.k-ContentCard__title{}.k-ContentCard__content{position:relative;> :first-child{margin-top:0;}> :last-child{margin-bottom:0;}font-size:", ";@media ", "{font-size:", ";}img{max-width:100%;}}.k-ContentCard__content--fixedHeight{max-height:", ";overflow:hidden;.k-ContentCard__content__readMore{position:absolute;bottom:0;left:0;right:0;width:100%;height:", ";text-align:left;display:flex;align-items:flex-end;background:linear-gradient( to top,var(--color-grey-000) 1em,rgba(255,255,255,0) 100% );@media ", "{height:", ";}}}.k-ContentCard__footer{border-top:var(--border);padding-top:", ";}"], pxToRem(20), pxToRem(20), mq.tabletAndDesktop, pxToRem(50), pxToRem(50), pxToRem(30), TYPOGRAPHY.fontStyles['400'], pxToRem(14), pxToRem(16), mq.tabletAndDesktop, pxToRem(20), pxToRem(150), pxToRem(60), mq.tabletAndDesktop, pxToRem(80), pxToRem(20));
export const ContentCard = _ref => {
  let {
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    className: classNames('k-ContentCard', className)
  }, props), children);
};

ContentCard.Header = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("aside", _extends({
    className: classNames('k-ContentCard__header', className)
  }, props));
};

ContentCard.Title = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement(Title, _extends({
    as: "header",
    modifier: "quaternary",
    noMargin: true,
    className: classNames('k-ContentCard__title', className)
  }, props));
};

ContentCard.Content = _ref4 => {
  let {
    children,
    className,
    fixedHeight,
    readMoreButtonText,
    ...props
  } = _ref4;
  const [innerFixedHeight, setInnerFixedHeight] = useState(fixedHeight);
  useEffect(() => {
    setInnerFixedHeight(fixedHeight);
  }, [fixedHeight]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ContentCard__content', className, {
      'k-ContentCard__content--fixedHeight': innerFixedHeight
    })
  }, props), children, innerFixedHeight && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-u-link k-u-link-font1 k-ContentCard__content__readMore",
    onClick: () => setInnerFixedHeight(false)
  }, /*#__PURE__*/React.createElement("span", null, readMoreButtonText)));
};

ContentCard.Footer = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: classNames('k-ContentCard__footer', className)
  }, props));
};

ContentCard.defaultProps = {};
ContentCard.propTypes = {};
ContentCard.Content.defaultProps = {
  fixedHeight: false,
  readMoreButtonText: 'Read more…'
};
ContentCard.Content.propTypes = {
  fixedHeight: PropTypes.bool,
  readMoreButtonText: PropTypes.string
};