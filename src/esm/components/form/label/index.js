import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import isEmpty from 'lodash/fp/isEmpty';
import { domElementHelper } from '../../../helpers/dom/element-helper';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
const StyledLabel = styled.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-l6ih7y-0"
})(["display:block;", " cursor:pointer;line-height:1.3;&.k-Label--micro{font-size:", ";}&.k-Label--small{font-size:", ";}&.k-Label--medium{font-size:", ";}&.k-Label--withoutPointerEvents{pointer-events:none;}.k-Label--dot{margin:0 0 0 ", ";width:var(--dot-width);height:var(--dot-width);background-color:var(--dot-background-color);vertical-align:middle;display:inline-block;border-radius:var(--border-radius-rounded);}"], TYPOGRAPHY.fontStyles['500'], stepToRem(-2), stepToRem(-1), stepToRem(0), pxToRem(10));
export const Label = _ref => {
  var _dot$backgroundColor;

  let {
    tag,
    className,
    children,
    focusId,
    size,
    withoutPointerEvents,
    htmlFor,
    dot,
    style,
    ...other
  } = _ref;

  const handleClick = e => {
    if (domElementHelper.canUseDom() && focusId) {
      e.preventDefault();
      document.getElementById(focusId).focus();
    }
  };

  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    className: classNames('k-Label', className, "k-Label--" + size, {
      'k-Label--withoutPointerEvents': withoutPointerEvents
    }),
    htmlFor: focusId || htmlFor,
    onClick: handleClick,
    as: tag
  }, other), children, !isEmpty(dot) && /*#__PURE__*/React.createElement("span", {
    className: classNames('k-Label--dot'),
    title: dot.title,
    tabIndex: "-1",
    style: {
      '--dot-background-color': (_dot$backgroundColor = dot == null ? void 0 : dot.backgroundColor) != null ? _dot$backgroundColor : null,
      '--dot-width': 'width' in dot ? pxToRem(dot.width) : null,
      ...style
    }
  }));
};
Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'small',
  withoutPointerEvents: false,
  dot: {}
};
Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf(['micro', 'small', 'medium']),
  withoutPointerEvents: PropTypes.bool,
  dot: PropTypes.shape({
    width: PropTypes.number,
    backgroundColor: PropTypes.node,
    title: PropTypes.string
  })
};