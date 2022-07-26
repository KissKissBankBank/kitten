import _extends from "@babel/runtime/helpers/extends";
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
const Wrapper = styled.div.withConfig({
  displayName: "stepper__Wrapper",
  componentId: "sc-lfba75-0"
})(["display:block;width:100%;overflow-x:scroll;scrollbar-width:thin;"]);
const List = styled.ul.withConfig({
  displayName: "stepper__List",
  componentId: "sc-lfba75-1"
})(["display:flex;align-items:center;justify-content:center;height:", ";flex-wrap:nowrap;box-sizing:border-box;min-width:min-content;padding-right:40px;background-color:", ";margin:0;gap:", ";@media (min-width:", "){height:", ";gap:", ";}"], pxToRem(65), COLORS.primary6, pxToRem(25), pxToRem(ScreenConfig.M.min), pxToRem(80), pxToRem(50));
const ItemWrapper = styled.li.withConfig({
  displayName: "stepper__ItemWrapper",
  componentId: "sc-lfba75-2"
})(["display:flex;align-items:center;.k-Stepper__icon{margin-right:", ";}", " ", ""], pxToRem(10), props => props.state === 'progress' && css(["color:", ";"], COLORS.primary1), props => props.pointer && css(["cursor:pointer;"]));
const StepperText = styled(Text).withConfig({
  displayName: "stepper__StepperText",
  componentId: "sc-lfba75-3"
})(["display:flex;align-items:center;white-space:nowrap;transition:color 0.2s ease;border-radius:var(--border-radius-s);"]);
export const StepperItem = _ref => {
  let {
    children,
    state,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(ItemWrapper, _extends({
    state: state
  }, props), /*#__PURE__*/React.createElement(StepperText, {
    weight: "500",
    size: "small",
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
export const StepperLink = _ref2 => {
  let {
    children,
    state,
    href,
    external,
    linkProps,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement(ItemWrapper, _extends({
    state: state
  }, props), /*#__PURE__*/React.createElement(StepperText, _extends({
    weight: "500",
    size: "small",
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
export const Stepper = _ref3 => {
  let {
    children,
    items,
    ...others
  } = _ref3;

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