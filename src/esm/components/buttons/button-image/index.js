import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledButtonImage = styled.button.withConfig({
  displayName: "button-image__StyledButtonImage",
  componentId: "sc-1kqp0ma-0"
})(["width:", ";height:", ";border-radius:50%;box-sizing:border-box;display:flex;overflow:hidden;cursor:pointer;border:0;padding:0;opacity:1;transition:opacity 0.2s;&:hover,&:focus{opacity:0.8;}&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&.k-ButtonImage--tiny{width:", ";height:", ";}&.k-ButtonImage--big{@media (min-width:", "px){width:", ";height:", ";}}&.k-ButtonImage--huge{width:", ";height:", ";}&.k-ButtonImage--withoutPointerEvents{pointer-events:none;}&.k-ButtonImage--withBorder{border:", " solid ", ";}.k-ButtonImage__img{display:block;margin:0;padding:0;border:0;width:100%;height:100%;object-fit:cover;}"], pxToRem(40), pxToRem(40), COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(30), pxToRem(30), ScreenConfig.S.min, pxToRem(50), pxToRem(50), pxToRem(80), pxToRem(80), pxToRem(2), COLORS.line1);
export var ButtonImage = function ButtonImage(_ref) {
  var tag = _ref.tag,
      className = _ref.className,
      size = _ref.size,
      withoutPointerEvents = _ref.withoutPointerEvents,
      withBorder = _ref.withBorder,
      img = _ref.img,
      others = _objectWithoutProperties(_ref, ["tag", "className", "size", "withoutPointerEvents", "withBorder", "img"]);

  return /*#__PURE__*/React.createElement(StyledButtonImage, _extends({
    as: tag,
    className: classNames('k-ButtonImage', "k-ButtonImage--".concat(size), {
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
  className: null,
  size: 'regular',
  withoutPointerEvents: false,
  withBorder: false,
  img: {
    className: null
  }
};
ButtonImage.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'regular', 'big', 'huge']),
  withoutPointerEvents: PropTypes.bool,
  withBorder: PropTypes.bool,
  img: PropTypes.shape({
    className: PropTypes.string
  })
};