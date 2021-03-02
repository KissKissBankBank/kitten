import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { StepperIcon } from '../../../components/atoms/stepper-icon';
var StyledStepper = styled.nav.withConfig({
  displayName: "deprecated__StyledStepper",
  componentId: "q4ca4f-0"
})(["", " font-size:", ";line-height:1.3;color:", ";text-align:left;.k-Stepper__list{display:flex;align-items:center;justify-content:center;margin:0;padding:", " 0;list-style:none;@media (max-width:", "){flex-direction:column;align-items:flex-start;}}.k-Stepper__list--alignStart{justify-content:flex-start;flex-wrap:wrap;}.k-Stepper__item{margin:0 ", ";&:first-child{margin-left:0;}&:last-child{margin-right:0;}@media (max-width:", "){margin:", " 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.k-Stepper__list--alignStart .k-Stepper__item{margin:0 ", " ", " 0;}.k-Stepper__item--tinySpacing{@media (min-width:", "){margin-left:", ";margin-right:", ";}}.k-Stepper__link{display:flex;align-items:center;color:", ";text-decoration:none;cursor:pointer;transition:.2s color;&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Stepper__link--inProgress{color:", ";&:hover{color:", ";text-decoration:none;}&:active{color:", ";text-decoration:none;}}.k-Stepper__link--inactive{color:", ";cursor:not-allowed;&:hover,&:active{color:", ";}}.k-Stepper__icon{margin-right:", ";}.k-Stepper__break{display:block;@media (min-width:", "){display:none;}@media (max-width:", "){display:none;}}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.font1, pxToRem(15), pxToRem(ScreenConfig.S.max), pxToRem(20), pxToRem(ScreenConfig.S.max), pxToRem(20 / 3), pxToRem(20), pxToRem(20 / 3 * 2), pxToRem(ScreenConfig.M.min), pxToRem(15), pxToRem(15), COLORS.font1, COLORS.primary1, COLORS.primary1, COLORS.primary1, COLORS.primary2, COLORS.primary3, COLORS.font2, COLORS.font2, pxToRem(10), pxToRem(ScreenConfig.L.min), pxToRem(ScreenConfig.S.max));
export var Stepper = function Stepper(_ref) {
  var items = _ref.items,
      withAlignStart = _ref.withAlignStart,
      withTinySpacing = _ref.withTinySpacing;

  var insertLineBreaks = function insertLineBreaks(text) {
    var regex = /(\n)/i;
    var brClassNames = classNames({
      'k-Stepper__break': !withAlignStart
    });
    return text.split(regex).map(function (line, index) {
      return line.match(regex) ? /*#__PURE__*/React.createElement("br", {
        className: brClassNames,
        key: index
      }) : line;
    });
  };

  var Link = function Link(_ref2) {
    var href = _ref2.href,
        iconType = _ref2.iconType,
        linkClassNames = _ref2.linkClassNames,
        text = _ref2.text,
        other = _objectWithoutProperties(_ref2, ["href", "iconType", "linkClassNames", "text"]);

    var Tag = href ? 'a' : 'span';
    var className = classNames('k-Stepper__link', linkClassNames);
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: className,
      href: href
    }, other), /*#__PURE__*/React.createElement(StepperIcon, {
      state: iconType,
      className: classNames('k-Stepper__icon', "k-Stepper__icon--".concat(iconType))
    }), insertLineBreaks(text));
  };

  return /*#__PURE__*/React.createElement(StyledStepper, {
    className: "k-Stepper",
    role: "navigation"
  }, /*#__PURE__*/React.createElement("ul", {
    className: classNames('k-Stepper__list', {
      'k-Stepper__list--alignStart': withAlignStart
    })
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('k-Stepper__item', {
        'k-Stepper__item--tinySpacing': withTinySpacing
      }),
      key: index
    }, /*#__PURE__*/React.createElement(Link, item));
  })));
};
Stepper.propTypes = {
  withAlignStart: PropTypes.bool,
  withTinySpacing: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    iconType: PropTypes.oneOf(['default', 'inProgress', 'validated']),
    linkClassNames: PropTypes.string,
    text: PropTypes.string
  }))
};
Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: []
};