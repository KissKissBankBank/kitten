import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["tag", "className", "size", "withoutPointerEvents", "withBorder", "img"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { checkDeprecatedSizes } from '../../../helpers/utils/deprecated';
var StyledButtonImage = styled.button.withConfig({
  displayName: "button-image__StyledButtonImage",
  componentId: "sc-1g89n03-0"
})(["width:", ";height:", ";border-radius:var(--border-radius-rounded);box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer;border:0;padding:0;opacity:1;transition:opacity 0.2s;&:hover,&:focus{opacity:0.8;}&.k-ButtonImage--tiny,&.k-ButtonImage--small{width:", ";height:", ";}&.k-ButtonImage--big,&.k-ButtonImage--large{@media (min-width:", "px){width:", ";height:", ";}}&.k-ButtonImage--huge{width:", ";height:", ";}&.k-ButtonImage--withoutPointerEvents{pointer-events:none;}&.k-ButtonImage--withBorder{border:var(--border);}.k-ButtonImage__img{display:block;margin:0;padding:0;border:0;width:100%;height:100%;object-fit:cover;}"], pxToRem(40), pxToRem(40), pxToRem(30), pxToRem(30), ScreenConfig.S.min, pxToRem(50), pxToRem(50), pxToRem(80), pxToRem(80));
export var ButtonImage = function ButtonImage(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      withBorder = _ref.withBorder,
      img = _ref.img,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  checkDeprecatedSizes(size);
  return /*#__PURE__*/React.createElement(StyledButtonImage, _extends({
    as: tag,
    className: classNames('k-ButtonImage', "k-ButtonImage--" + size, {
      'k-ButtonImage--withoutPointerEvents': withoutPointerEvents,
      'k-ButtonImage--withBorder': withBorder
    }, className)
  }, others), !!img && /*#__PURE__*/React.createElement("img", _extends({}, img, {
    className: classNames('k-ButtonImage__img', img.className),
    alt: img.alt || ''
  })));
};
ButtonImage.defaultProps = {
  tag: 'button',
  size: 'medium',
  withoutPointerEvents: false,
  withBorder: false,
  img: {}
};
ButtonImage.propTypes = {
  tag: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  withoutPointerEvents: PropTypes.bool,
  withBorder: PropTypes.bool,
  img: PropTypes.object
};