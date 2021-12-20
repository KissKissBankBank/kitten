import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["tag", "className", "children", "focusId", "size", "withoutPointerEvents", "htmlFor", "dot", "style"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import isEmpty from 'lodash/fp/isEmpty';
import domElementHelper from '../../../helpers/dom/element-helper';
import TYPOGRAPHY from '../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledLabel = styled.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "sc-l6ih7y-0"
})(["display:block;", " cursor:pointer;font-size:", ";@media (min-width:", "){font-size:", ";}&.k-Label--tiny{line-height:1.3;font-size:", ";}&.k-Label--micro{line-height:1.3;font-size:", ";}&.k-Label--withoutPointerEvents{pointer-events:none;}.k-Label--dot{margin:0 0 0 ", ";width:var(--dot-width);height:var(--dot-width);background-color:var(--dot-background-color);vertical-align:middle;display:inline-block;border-radius:var(--border-radius-rounded);}"], TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(ScreenConfig.S.min), stepToRem(0), stepToRem(0), stepToRem(-1), pxToRem(10));
export var Label = function Label(_ref) {
  var _dot$backgroundColor;

  var tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      focusId = _ref.focusId,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      htmlFor = _ref.htmlFor,
      dot = _ref.dot,
      style = _ref.style,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  var handleClick = function handleClick(e) {
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
    style: _extends({
      '--dot-background-color': (_dot$backgroundColor = dot == null ? void 0 : dot.backgroundColor) != null ? _dot$backgroundColor : null,
      '--dot-width': 'width' in dot ? pxToRem(dot.width) : null
    }, style)
  }));
};
Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false,
  dot: {}
};
Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf([null, undefined, 'normal', 'tiny', 'micro']),
  withoutPointerEvents: PropTypes.bool,
  dot: PropTypes.shape({
    width: PropTypes.number,
    backgroundColor: PropTypes.node,
    title: PropTypes.string
  })
};