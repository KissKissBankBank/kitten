import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import domElementHelper from '../../../helpers/dom/element-helper';
import TYPOGRAPHY from '../../../constants/typography-config';
import { stepToRem } from '../../../helpers/utils/typography';
var StyledLabel = styled.label.withConfig({
  displayName: "label__StyledLabel",
  componentId: "l6ih7y-0"
})(["display:block;", " cursor:pointer;&.k-Label--tiny{line-height:1.3;font-size:", ";}&.k-Label--micro{line-height:1.3;font-size:", ";}&.k-Label--withoutPointerEvents{pointer-events:none;}"], TYPOGRAPHY.fontStyles.regular, stepToRem(0), stepToRem(-1));
export var Label = function Label(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      focusId = _ref.focusId,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      htmlFor = _ref.htmlFor,
      other = _objectWithoutProperties(_ref, ["tag", "className", "children", "focusId", "size", "withoutPointerEvents", "htmlFor"]);

  var handleClick = function handleClick(e) {
    if (domElementHelper.canUseDom() && focusId) {
      e.preventDefault();
      document.getElementById(focusId).focus();
    }
  };

  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    className: classNames('k-Label', className, "k-Label--".concat(size), {
      'k-Label--withoutPointerEvents': withoutPointerEvents
    }),
    htmlFor: focusId || htmlFor,
    onClick: handleClick,
    as: tag
  }, other), children);
};
Label.defaultProps = {
  children: 'Label',
  focusId: null,
  size: 'normal',
  withoutPointerEvents: false
};
Label.propTypes = {
  focusId: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOf([null, undefined, 'normal', 'tiny', 'micro']),
  withoutPointerEvents: PropTypes.bool
};