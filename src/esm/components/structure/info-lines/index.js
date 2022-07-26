import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
const StyledInfoLines = styled.dl.withConfig({
  displayName: "info-lines__StyledInfoLines",
  componentId: "sc-wen3t4-0"
})(["&.k-InfoLines--withBorderRadius{border-radius:var(--border-radius-m);}&.k-InfoLines--withLeftRightBorder{border-left:", " solid var(--InfoLines-borderColor);border-right:", " solid var(--InfoLines-borderColor);.k-InfoLines__line{padding:", " ", ";}}&:not(.k-InfoLines--withoutTopBottomBorder){border-top:", " solid var(--InfoLines-borderColor);border-bottom:", " solid var(--InfoLines-borderColor);}.k-InfoLines__line{box-sizing:border-box;display:flex;padding:", " 0;min-height:", ";gap:", " ", ";align-items:center;flex-direction:row;justify-content:space-between;&:not(:first-child){border-top:", " solid var(--InfoLines-borderColor);}}.k-InfoLines__key,.k-InfoLines__value{margin:0;}&:not(.k-InfoLines--withoutResponsive){@media (max-width:", "px){.k-InfoLines__line{align-items:flex-start;flex-direction:column;}.k-InfoLines__key{flex:0;}}}"], pxToRem(1), pxToRem(1), pxToRem(10), pxToRem(15), pxToRem(1), pxToRem(1), pxToRem(10), pxToRem(60), pxToRem(5), pxToRem(15), pxToRem(1), ScreenConfig.S.max);
export const InfoLines = _ref => {
  let {
    className,
    style,
    infos,
    withBorderRadius,
    withLeftRightBorder,
    withoutTopBottomBorder,
    withoutResponsive,
    borderColor,
    descriptionTagList,
    titleTagList,
    itemTagList,
    ...others
  } = _ref;
  const TitleElement = titleTagList;
  const ItemElement = itemTagList;
  return /*#__PURE__*/React.createElement(StyledInfoLines, _extends({
    className: classNames('k-Infolines', className, {
      'k-InfoLines--withBorderRadius': withBorderRadius,
      'k-InfoLines--withLeftRightBorder': withLeftRightBorder,
      'k-InfoLines--withoutTopBottomBorder': withoutTopBottomBorder,
      'k-InfoLines--withoutResponsive': withoutResponsive
    }),
    style: { ...style,
      '--InfoLines-borderColor': borderColor
    },
    as: descriptionTagList
  }, others), infos.map(info => /*#__PURE__*/React.createElement("div", {
    className: "k-InfoLines__line",
    key: info.id || info.key
  }, /*#__PURE__*/React.createElement(TitleElement, {
    className: "k-InfoLines__key"
  }, info.key), /*#__PURE__*/React.createElement(ItemElement, {
    className: "k-InfoLines__value"
  }, info.value))));
};
InfoLines.propTypes = {
  infos: PropTypes.array.isRequired,
  borderColor: PropTypes.string,
  withBorderRadius: PropTypes.bool,
  withLeftRightBorder: PropTypes.bool,
  withoutTopBottomBorder: PropTypes.bool,
  withoutResponsive: PropTypes.bool,
  descriptionTagList: PropTypes.string,
  titleTagList: PropTypes.string,
  itemTagList: PropTypes.string
};
InfoLines.defaultProps = {
  borderColor: 'var(--color-grey-400)',
  withBorderRadius: false,
  withLeftRightBorder: false,
  withoutTopBottomBorder: false,
  withoutResponsive: false,
  descriptionTagList: 'dl',
  titleTagList: 'dt',
  itemTagList: 'dd'
};