import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["children", "className", "fixedHeight", "readMoreButtonText"],
    _excluded5 = ["className"];
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mq } from '../../../../constants/screen-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Title } from '../../../typography/title';
var StyledCard = styled.article.withConfig({
  displayName: "content-card__StyledCard",
  componentId: "sc-axl17i-0"
})(["padding:", " ", " ", ";border:var(--border);border-radius:var(--border-radius-m);width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:", ";@media ", "{padding:", " ", " ", ";}.k-ContentCard__header{", ";font-size:", ";}.k-ContentCard__title{}.k-ContentCard__content{position:relative;>:first-child{margin-top:0;}>:last-child{margin-bottom:0;}font-size:", ";@media ", "{font-size:", ";}img{max-width:100%;}}.k-ContentCard__content--fixedHeight{max-height:", ";overflow:hidden;.k-ContentCard__content__readMore{position:absolute;bottom:0;left:0;right:0;width:100%;height:", ";text-align:left;display:flex;align-items:flex-end;background:linear-gradient( to top,var(--color-grey-000) 1em,rgba(255,255,255,0) 100% );@media ", "{height:", ";}}}.k-ContentCard__footer{border-top:var(--border);padding-top:", ";}"], pxToRem(30), pxToRem(30), pxToRem(20), pxToRem(20), mq.tabletAndDesktop, pxToRem(50), pxToRem(50), pxToRem(30), TYPOGRAPHY.fontStyles.light, pxToRem(14), pxToRem(16), mq.tabletAndDesktop, pxToRem(20), pxToRem(150), pxToRem(60), mq.tabletAndDesktop, pxToRem(80), pxToRem(20));
export var ContentCard = function ContentCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    className: classNames('k-ContentCard', className)
  }, props), children);
};

ContentCard.Header = function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("aside", _extends({
    className: classNames('k-ContentCard__header', className)
  }, props));
};

ContentCard.Title = function (_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement(Title, _extends({
    as: "header",
    modifier: "quaternary",
    noMargin: true,
    className: classNames('k-ContentCard__title', className)
  }, props));
};

ContentCard.Content = function (_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      fixedHeight = _ref4.fixedHeight,
      readMoreButtonText = _ref4.readMoreButtonText,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  var _useState = useState(fixedHeight),
      innerFixedHeight = _useState[0],
      setInnerFixedHeight = _useState[1];

  useEffect(function () {
    setInnerFixedHeight(fixedHeight);
  }, [fixedHeight]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-ContentCard__content', className, {
      'k-ContentCard__content--fixedHeight': innerFixedHeight
    })
  }, props), children, innerFixedHeight && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "k-u-reset-button k-u-link k-u-link-font1 k-ContentCard__content__readMore",
    onClick: function onClick() {
      return setInnerFixedHeight(false);
    }
  }, /*#__PURE__*/React.createElement("span", null, readMoreButtonText)));
};

ContentCard.Footer = function (_ref5) {
  var className = _ref5.className,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

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