import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Title } from '../../../components/typography/title';
import { Paragraph } from '../../../components/typography/paragraph/next';
import { Button } from '../../../components/buttons/button';
import COLORS from '../../../constants/colors-config';
import classNames from 'classnames';
var StyledVerticalCardWithAction = styled.div.withConfig({
  displayName: "vertical-card-with-action__StyledVerticalCardWithAction",
  componentId: "cylyzy-0"
})([".k-VerticalCardWithAction__image{width:100%;height:auto;display:block;}.k-VerticalCardWithAction__text{color:", ";}"], COLORS.font1);
export var VerticalCardWithAction = function VerticalCardWithAction(_ref) {
  var imageProps = _ref.imageProps,
      title = _ref.title,
      titleTag = _ref.titleTag,
      description = _ref.description,
      descriptionTag = _ref.descriptionTag,
      button = _ref.button,
      buttonModifier = _ref.buttonModifier,
      buttonProps = _ref.buttonProps,
      others = _objectWithoutProperties(_ref, ["imageProps", "title", "titleTag", "description", "descriptionTag", "button", "buttonModifier", "buttonProps"]);

  return /*#__PURE__*/React.createElement(StyledVerticalCardWithAction, others, /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-bottom-triple"
  }, /*#__PURE__*/React.createElement("img", _extends({}, imageProps, {
    className: classNames('k-VerticalCardWithAction__image', imageProps.className)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-VerticalCardWithAction__text k-u-margin-top-triple k-u-margin-bottom-triple"
  }, /*#__PURE__*/React.createElement(Title, {
    modifier: "senary",
    tag: titleTag,
    noMargin: true,
    className: classNames('k-u-align-center', {
      'k-u-margin-bottom-singleHalf--important': !!description
    })
  }, title), description && /*#__PURE__*/React.createElement(Paragraph, {
    modifier: "tertiary",
    tag: descriptionTag,
    noMargin: true,
    className: "k-u-align-center k-u-margin-top-singleHalf--important"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "k-u-margin-top-triple k-u-align-center"
  }, /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    modifier: buttonModifier,
    type: "button",
    onClick: buttonProps.onClick,
    href: buttonProps.href,
    className: classNames('k-VerticalCardWithAction__button', buttonProps.className)
  }), button)));
};
VerticalCardWithAction.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    style: PropTypes.shape({})
  }).isRequired,
  title: PropTypes.string.isRequired,
  titleTag: PropTypes.string,
  description: PropTypes.string,
  descriptionTag: PropTypes.string,
  button: PropTypes.string.isRequired,
  buttonModifier: PropTypes.string,
  buttonProps: PropTypes.shape({
    onClick: PropTypes.func,
    href: PropTypes.string
  }).isRequired
};
VerticalCardWithAction.defaultProps = {
  imageProps: {
    style: {}
  },
  titleTag: 'h1',
  description: '',
  descriptionTag: 'p',
  buttonModifier: 'helium',
  buttonProps: {
    onClick: null,
    href: null
  }
};