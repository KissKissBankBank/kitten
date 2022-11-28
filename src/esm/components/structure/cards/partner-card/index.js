import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import classNames from 'classnames';
import { Tag } from '../../../information/tag';
const StyledCard = styled.div.withConfig({
  displayName: "partner-card__StyledCard",
  componentId: "sc-p435k7-0"
})(["position:relative;display:flex;flex-direction:column;box-sizing:border-box;justify-content:center;border-radius:var(--border-radius-m);color:var(--color-grey-900);transition:box-shadow var(--transition);box-shadow:var(--box-shadow-m);background-color:var(--color-grey-000);&[href]:focus-visible{outline:var(--outline);}.k-PartnerCard__image{position:relative;overflow:hidden;flex:0 0 auto;border-top-left-radius:calc(var(--border-radius-m) - 1px);border-top-right-radius:calc(var(--border-radius-m) - 1px);.k-PartnerCard__image__image{display:block;width:100%;object-fit:cover;object-position:center;@supports (aspect-ratio:16 / 10){aspect-ratio:16 / 10;}}@supports not (aspect-ratio:16 / 10){height:0;padding-bottom:calc((10 / 16) * 100%);.k-PartnerCard__image__image{position:absolute;width:100%;height:100%;}}}.k-PartnerCard__content{flex:1 0 auto;position:relative;text-align:center;}.k-PartnerCard__avatar{position:absolute;width:", ";height:", ";padding-block:", ";box-sizing:border-box;left:calc(50% - ", " /2);top:-", ";background-color:var(--color-grey-000);border-radius:var(--border-radius-rounded);padding:", ";box-shadow:0px 0px ", " rgba(0,0,0,0.1);img{width:100%;height:100%;object-fit:contain;object-position:center;}}.k-PartnerCard__line{padding:", " ", " ", ";flex:0 0 auto;}"], pxToRem(130), pxToRem(75), pxToRem(24), pxToRem(130), pxToRem(37), pxToRem(10), pxToRem(20), pxToRem(60), pxToRem(20), pxToRem(20));
export const PartnerCard = _ref => {
  let {
    children,
    className,
    href,
    imageProps: {
      alt,
      imageClassName,
      ...otherImageProps
    },
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    as: href ? 'a' : 'div',
    href: href
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-PartnerCard__image"
  }, /*#__PURE__*/React.createElement("img", _extends({}, otherImageProps, {
    alt: alt || '',
    className: classNames('k-PartnerCard__image__image', imageClassName)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-PartnerCard__content"
  }, children));
};
PartnerCard.defaultProps = {
  imageProps: {
    src: '',
    alt: ''
  }
};

PartnerCard.Line = _ref2 => {
  let {
    className,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "k-PartnerCard__line"
  }, props));
};

PartnerCard.Avatar = _ref3 => {
  let {
    className,
    imageProps,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-PartnerCard__avatar', className)
  }, props), /*#__PURE__*/React.createElement("img", _extends({
    alt: ""
  }, imageProps)));
};

PartnerCard.Sticker = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-PartnerCard__sticker', className)
  }, props), /*#__PURE__*/React.createElement(Tag, _extends({
    type: "disabled",
    className: classNames('k-u-margin-bottom-double', 'k-u-margin-top-double', 'k-u-ellipsis', className)
  }, props)));
};