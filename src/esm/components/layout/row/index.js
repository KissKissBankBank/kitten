import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from '../../layout/container';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { ScreenConfig } from '../../../constants/screen-config';
const StyledRow = styled.div.withConfig({
  displayName: "row__StyledRow",
  componentId: "sc-aqavk0-0"
})(["&.k-Row--centered{text-align:center;}&.k-Row--light{background:", ";}&.k-Row--dark{background:", ";color:", ";}&.k-Row--lightTopBorder{border-top:var(--border);}&.k-Row--lightBottomBorder{border-bottom:var(--border);}&.k-Row--padded .k-Row__content{padding-top:", ";padding-bottom:", ";@media (min-width:", "){padding-top:", ";padding-bottom:", ";}}"], COLORS.primary6, COLORS.line2, COLORS.background1, pxToRem(60), pxToRem(60), pxToRem(ScreenConfig.L.min), pxToRem(80), pxToRem(80));
export const Row = _ref => {
  let {
    className,
    contentClassName,
    centered,
    light,
    dark,
    lightTopBorder,
    lightBottomBorder,
    padded,
    children,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledRow, _extends({
    className: classNames('k-Row', {
      'k-Row--centered': centered,
      'k-Row--light': light,
      'k-Row--dark': dark,
      'k-Row--lightTopBorder': lightTopBorder,
      'k-Row--lightBottomBorder': lightBottomBorder,
      'k-Row--padded': padded
    }, className)
  }, others), /*#__PURE__*/React.createElement(Container, {
    className: classNames('k-Row__content', contentClassName)
  }, children));
};
Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false
};
Row.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  centered: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  lightTopBorder: PropTypes.bool,
  lightBottomBorder: PropTypes.bool,
  padded: PropTypes.bool
};