import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
const StyledWrapper = styled.div.withConfig({
  displayName: "flex-wrapper__StyledWrapper",
  componentId: "sc-z0vdh1-0"
})(["display:flex;gap:var(--flexWrapper-gap);padding:var(--flexWrapper-padding);flex-direction:var(--flexWrapper-direction);"]);

const getCSSRule = value => {
  return typeof value === 'number' ? pxToRem(value) : value;
};

const getRuleFromProp = value => {
  if (Array.isArray(value)) {
    return value.map(rule => getCSSRule(rule)).join(' ');
  }

  return getCSSRule(value);
};

export const FlexWrapper = _ref => {
  let {
    gap = null,
    padding = null,
    direction = 'column',
    className,
    style,
    ...props
  } = _ref;
  const gapRule = gap ? getRuleFromProp(gap) : null;
  let paddingRule = padding ? getRuleFromProp(padding) : null;
  let namedPaddingRule = {};

  if (padding && typeof padding === 'object' && !Array.isArray(padding)) {
    paddingRule = null;
    Object.entries(padding).forEach(_ref2 => {
      let [key, value] = _ref2;
      const cssRule = "padding" + (key[0].toUpperCase() + key.substring(1));
      namedPaddingRule[cssRule] = getCSSRule(value);
    });
  }

  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-FlexWrapper', className),
    style: {
      '--flexWrapper-gap': gapRule,
      '--flexWrapper-padding': paddingRule,
      '--flexWrapper-direction': direction,
      ...namedPaddingRule,
      ...style
    }
  }, props));
};
FlexWrapper.propTypes = {
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array, PropTypes.object]),
  direction: PropTypes.oneOf(['column', 'row'])
};