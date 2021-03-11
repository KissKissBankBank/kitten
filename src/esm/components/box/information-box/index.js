import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Title } from '../../../components/typography/title';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledInformationBox = styled.div.withConfig({
  displayName: "information-box__StyledInformationBox",
  componentId: "sc-83px7p-0"
})(["&.k-InformationBox{display:inline-block;", "}.k-InformationBox__container{padding:", " ", " ", " ", ";color:", ";background-color:", ";border:", " solid ", ";}"], TYPOGRAPHY.fontStyles.light, pxToRem(10), pxToRem(20), pxToRem(20), pxToRem(20), COLORS.font1, COLORS.background1, pxToRem(2), COLORS.line1);
export var InformationBox = function InformationBox(_ref) {
  var title = _ref.title,
      titleProps = _ref.titleProps,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["title", "titleProps", "children"]);

  return /*#__PURE__*/React.createElement(StyledInformationBox, _extends({}, other, {
    className: classNames('k-InformationBox', other.className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-InformationBox__container"
  }, /*#__PURE__*/React.createElement(Title, _extends({
    tag: "p",
    margin: false,
    modifier: "quaternary"
  }, titleProps, {
    className: classNames('k-InformationBox__title', 'k-u-margin-bottom-single', titleProps.className)
  }), title), /*#__PURE__*/React.createElement("div", {
    className: "k-InformationBox__content k-u-margin-top-single"
  }, children)));
};
InformationBox.defaultProps = {
  title: null,
  titleProps: {},
  children: null
};
InformationBox.propTypes = {
  title: PropTypes.node,
  titleProps: PropTypes.object,
  children: PropTypes.node
};