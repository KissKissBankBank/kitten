import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { ScreenConfig } from '../../../../constants/screen-config';
import classNames from 'classnames';
import { Text } from '../../../typography/text';
import { StepperIconDefault, StepperIconInProgress, StepperIconValidated } from '../../../../components/steppers/stepper-icon';
import PropTypes from 'prop-types';
var Wrapper = styled.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "sc-1c0a5ko-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);
var List = styled.ul.withConfig({
  displayName: "stepper__List",
  componentId: "sc-1c0a5ko-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;height:", ";box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;@media (max-width:", "){height:", ";}"], pxToRem(80), COLORS.primary6, pxToRem(ScreenConfig.S.max), pxToRem(65));
var ItemWrapper = styled.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "sc-1c0a5ko-2"
})(["display:flex;align-items:center;:not(:last-child){padding-right:", ";}@media (max-width:", "){:not(:last-child){padding-right:", ";}}", " ", ""], pxToRem(50), pxToRem(ScreenConfig.S.max), pxToRem(25), function (props) {
  return props.state === 'progress' && css(["color:", ";"], COLORS.primary1);
}, function (props) {
  return props.pointer && css(["cursor:pointer;"]);
});
var StepperText = styled(Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "sc-1c0a5ko-3"
})(["display:flex;align-items:center;white-space:nowrap;"]);

var StepperIcon = function StepperIcon(_ref) {
  var state = _ref.state;

  switch (state) {
    case 'progress':
      return /*#__PURE__*/React.createElement(StepperIconInProgress, null);

    case 'validated':
      return /*#__PURE__*/React.createElement(StepperIconValidated, null);

    default:
      return /*#__PURE__*/React.createElement(StepperIconDefault, null);
  }
};

export var StepperItem = function StepperItem(_ref2) {
  var children = _ref2.children,
      state = _ref2.state,
      props = _objectWithoutProperties(_ref2, ["children", "state"]);

  return /*#__PURE__*/React.createElement(ItemWrapper, _extends({
    state: state
  }, props), /*#__PURE__*/React.createElement(StepperIcon, {
    state: state
  }), /*#__PURE__*/React.createElement(StepperText, {
    weight: "regular",
    size: "tiny"
  }, children));
};
StepperItem.propTypes = {
  state: PropTypes.oneOf(['default', 'progress', 'validated']),
  pointer: PropTypes.bool
};
StepperItem.defaultProps = {
  state: 'default',
  pointer: false
};
export var StepperLink = function StepperLink(_ref3) {
  var children = _ref3.children,
      state = _ref3.state,
      href = _ref3.href,
      external = _ref3.external,
      linkProps = _ref3.linkProps,
      props = _objectWithoutProperties(_ref3, ["children", "state", "href", "external", "linkProps"]);

  return /*#__PURE__*/React.createElement(ItemWrapper, _extends({
    state: state
  }, props), /*#__PURE__*/React.createElement(StepperText, _extends({
    weight: "regular",
    size: "tiny",
    tag: "a",
    className: classNames('k-u-link', {
      'k-u-link-font1': state !== 'progress',
      'k-u-link-primary1': state === 'progress'
    }),
    href: href,
    target: external ? '_blank' : '_self',
    rel: external ? 'nofollow noopener noreferrer' : ''
  }, linkProps), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepperIcon, {
    state: state
  }), children)));
};
StepperLink.propTypes = {
  href: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['default', 'progress', 'validated']),
  external: PropTypes.bool,
  linkProps: PropTypes.object
};
StepperLink.defaultProps = {
  state: 'default',
  external: false,
  linkProps: {}
};
export var Stepper = function Stepper(_ref4) {
  var children = _ref4.children,
      others = _objectWithoutProperties(_ref4, ["children"]);

  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(List, others, children));
};
Stepper.propTypes = {};
Stepper.Item = StepperItem;
Stepper.Link = StepperLink;