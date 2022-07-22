import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
const StyledBulletList = styled.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "sc-t43o49-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;.k-BulletList__item{margin:", " ", ";display:block;", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:var(--border-radius-rounded);width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}}&.k-BulletList--micro .k-BulletList__item{font-size:", ";&:before{width:", ";height:", ";}}&.k-BulletList--small .k-BulletList__item{font-size:", ";}&.k-BulletList--medium .k-BulletList__item{font-size:", ";}&.k-BulletList--large .k-BulletList__item{font-size:", ";margin:", " 0;}&.k-BulletList--huge .k-BulletList__item{font-size:", ";margin:", " 0;}"], pxToRem(0), pxToRem(0), pxToRem(5), pxToRem(16), TYPOGRAPHY.fontStyles['400'], COLORS.font1, pxToRem(16), pxToRem(10), pxToRem(6), pxToRem(6), COLORS.font1, stepToRem(-2), pxToRem(4), pxToRem(4), stepToRem(-1), stepToRem(0), stepToRem(1), pxToRem(10), stepToRem(2), pxToRem(10));
export const BulletList = _ref => {
  let {
    items,
    size,
    className,
    ...others
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledBulletList, _extends({
    className: classNames('k-BulletList', "k-BulletList--" + size, className)
  }, others), items.map(_ref2 => {
    let {
      item,
      key,
      ...itemOthers
    } = _ref2;
    return /*#__PURE__*/React.createElement("li", _extends({
      key: key
    }, itemOthers, {
      className: classNames('k-BulletList__item', itemOthers.className)
    }), item);
  }));
};
BulletList.propTypes = {
  size: PropTypes.oneOf(['micro', 'small', 'medium', 'large', 'huge']),
  items: PropTypes.array
};
BulletList.defaultProps = {
  size: 'small',
  items: []
};