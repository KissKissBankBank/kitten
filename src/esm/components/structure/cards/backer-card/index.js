import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["title", "subtitle", "imgProps", "description"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Marger } from '../../../layout/marger';
import { Text } from '../../../typography/text';
import { ButtonImage } from '../../../action/button-image';
var StyledCard = styled.div.withConfig({
  displayName: "backer-card__StyledCard",
  componentId: "sc-8cf6gi-0"
})(["padding:0 ", ";border:var(--border);text-align:center;word-break:break-word;"], pxToRem(20));
var StyledSubtitle = styled(Text).withConfig({
  displayName: "backer-card__StyledSubtitle",
  componentId: "sc-8cf6gi-1"
})(["display:block;"]);
var StyledButtonImage = styled(ButtonImage).withConfig({
  displayName: "backer-card__StyledButtonImage",
  componentId: "sc-8cf6gi-2"
})(["margin:0 auto;"]);
export var BackerCard = function BackerCard(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      imgProps = _ref.imgProps,
      description = _ref.description,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledCard, others, /*#__PURE__*/React.createElement(Marger, {
    top: "4",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    weight: "regular",
    lineHeight: "normal",
    size: "tiny"
  }, title, subtitle && /*#__PURE__*/React.createElement(StyledSubtitle, {
    color: "font1",
    weight: "light",
    size: "micro"
  }, subtitle))), /*#__PURE__*/React.createElement(Marger, {
    top: "1",
    bottom: "1"
  }, /*#__PURE__*/React.createElement(StyledButtonImage, {
    tag: "span",
    img: imgProps,
    withoutPointerEvents: true,
    huge: true
  })), /*#__PURE__*/React.createElement(Marger, {
    top: "1",
    bottom: "4"
  }, /*#__PURE__*/React.createElement(Text, {
    tag: "p",
    color: "font1",
    weight: "light",
    size: "micro",
    lineHeight: "normal",
    className: "k-u-margin-none"
  }, description)));
};
BackerCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imgProps: PropTypes.object.isRequired,
  description: PropTypes.node.isRequired
};
BackerCard.defaultProps = {
  subtitle: null
};