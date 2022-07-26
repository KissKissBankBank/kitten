import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../typography/text';
import { ButtonImage } from '../../../action/button-image';
const StyledCard = styled.div.withConfig({
  displayName: "backer-card__StyledCard",
  componentId: "sc-8cf6gi-0"
})(["padding:", " ", ";border-radius:var(--border-radius-s);box-shadow:var(--box-shadow-s);text-align:center;word-break:break-word;display:flex;align-items:center;flex-direction:column;gap:", ";"], pxToRem(40), pxToRem(20), pxToRem(10));
export const BackerCard = _ref => {
  let {
    className,
    title,
    titleTag,
    subtitle,
    imgProps,
    description,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledCard, _extends({
    className: classNames('k-BackerCard', className)
  }, others), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    tag: titleTag || 'div',
    color: "font1",
    weight: "500",
    lineHeight: "normal",
    size: "small"
  }, title), subtitle && /*#__PURE__*/React.createElement(Text, {
    tag: "div",
    color: "font1",
    weight: "400",
    size: "micro"
  }, subtitle)), /*#__PURE__*/React.createElement(ButtonImage, {
    tag: "span",
    img: imgProps,
    withoutPointerEvents: true,
    huge: true
  }), /*#__PURE__*/React.createElement(Text, {
    tag: "p",
    color: "font1",
    weight: "400",
    size: "micro",
    lineHeight: "normal",
    className: "k-u-margin-none"
  }, description));
};
BackerCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imgProps: PropTypes.object.isRequired,
  description: PropTypes.node.isRequired,
  titleTag: PropTypes.string
};
BackerCard.defaultProps = {
  subtitle: null,
  titleTag: 'div'
};