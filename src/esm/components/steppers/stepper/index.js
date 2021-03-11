import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { Text } from '../../../components/typography/text';
import { StepperIcon } from '../../../components/atoms/stepper-icon';
import { Stepper as DeprecatedStepper } from './deprecated';
var Wrapper = styled.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "guuzry-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);
var List = styled.ul.withConfig({
  displayName: "stepper__List",
  componentId: "guuzry-1"
})(["display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;height:", ";box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;@media (max-width:", "){height:", ";}"], pxToRem(80), COLORS.primary6, pxToRem(ScreenConfig.S.max), pxToRem(65));
var ItemWrapper = styled.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "guuzry-2"
})(["display:flex;align-items:center;:not(:last-child){margin-right:", ";}@media (min-width:", "){:not(:last-child){margin-right:", ";}}.k-Stepper__icon{margin-right:", ";}", " ", ""], pxToRem(25), pxToRem(ScreenConfig.M.min), pxToRem(50), pxToRem(10), function (props) {
  return props.state === 'progress' && css(["color:", ";"], COLORS.primary1);
}, function (props) {
  return props.pointer && css(["cursor:pointer;"]);
});
var StepperText = styled(Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "guuzry-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:", ";&:focus{outline:", " solid ", ";outline-offset:", ";}"], pxToRem(6), COLORS.primary3, pxToRem(2), pxToRem(2));
export var StepperItem = function StepperItem(_ref) {
  var children = _ref.children,
      state = _ref.state,
      props = _objectWithoutProperties(_ref, ["children", "state"]);

  return /*#__PURE__*/React.createElement(ItemWrapper, _extends({
    state: state
  }, props), /*#__PURE__*/React.createElement(StepperText, {
    weight: "regular",
    size: "tiny",
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement(StepperIcon, {
    className: "k-Stepper__icon",
    state: state
  }), children));
};
StepperItem.propTypes = {
  state: PropTypes.oneOf(['default', 'progress', 'validated']),
  pointer: PropTypes.bool
};
StepperItem.defaultProps = {
  state: 'default',
  pointer: false
};
export var StepperLink = function StepperLink(_ref2) {
  var children = _ref2.children,
      state = _ref2.state,
      href = _ref2.href,
      external = _ref2.external,
      linkProps = _ref2.linkProps,
      props = _objectWithoutProperties(_ref2, ["children", "state", "href", "external", "linkProps"]);

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
  }, linkProps), /*#__PURE__*/React.createElement(StepperIcon, {
    className: "k-Stepper__icon",
    state: state
  }), children));
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
export var Stepper = function Stepper(_ref3) {
  var children = _ref3.children,
      items = _ref3.items,
      others = _objectWithoutProperties(_ref3, ["children", "items"]);

  if (!!items) {
    return /*#__PURE__*/React.createElement(DeprecatedStepper, _extends({
      items: items
    }, others));
  }

  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(List, others, children));
};
Stepper.propTypes = {
  items: deprecated(PropTypes.array, 'Use subcomponents instead of items prop')
};
Stepper.Item = StepperItem;
Stepper.Link = StepperLink;