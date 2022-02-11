import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "state"],
    _excluded2 = ["children", "state", "href", "external", "linkProps"],
    _excluded3 = ["children", "items"];
import React from 'react';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { Text } from '../../typography/text';
import { StepperIcon } from '../../interaction/stepper-icon';
import { Stepper as DeprecatedStepper } from './deprecated';
var Wrapper = styled.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "sc-lfba75-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);
var List = styled.ul.withConfig({
  displayName: "stepper__List",
  componentId: "sc-lfba75-1"
})(["display:flex;align-items:center;justify-content:center;height:", ";flex-wrap:nowrap;box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;gap:", ";@media (min-width:", "){height:", ";gap:", ";}"], pxToRem(65), COLORS.primary6, pxToRem(25), pxToRem(ScreenConfig.M.min), pxToRem(80), pxToRem(50));
var ItemWrapper = styled.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "sc-lfba75-2"
})(["display:flex;align-items:center;.k-Stepper__icon{margin-right:", ";}", " ", ""], pxToRem(10), function (props) {
  return props.state === 'progress' && css(["color:", ";"], COLORS.primary1);
}, function (props) {
  return props.pointer && css(["cursor:pointer;"]);
});
var StepperText = styled(Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "sc-lfba75-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:var(--border-radius-s);"]);
export var StepperItem = function StepperItem(_ref) {
  var children = _ref.children,
      state = _ref.state,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
      others = _objectWithoutPropertiesLoose(_ref3, _excluded3);

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