import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
var StyledBulletList = styled.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "rdyx84-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;"], pxToRem(0), pxToRem(0));
var StyledItem = styled.li.withConfig({
  displayName: "bullet-list__StyledItem",
  componentId: "rdyx84-1"
})(["margin:", " ", ";display:block;", ";font-size:", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:50%;width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}", " ", " ", " ", ""], pxToRem(5), pxToRem(16), TYPOGRAPHY.fontStyles.light, stepToRem(-1), COLORS.font1, pxToRem(16), pxToRem(10), pxToRem(6), pxToRem(6), COLORS.font1, function (_ref) {
  var small = _ref.small;
  return small && css(["font-size:", ";&:before{width:", ";height:", ";}"], stepToRem(-2), pxToRem(4), pxToRem(4));
}, function (_ref2) {
  var large = _ref2.large;
  return large && css(["font-size:", ";"], stepToRem(0));
}, function (_ref3) {
  var big = _ref3.big;
  return big && css(["font-size:", ";margin:", " 0;"], stepToRem(1), pxToRem(10));
}, function (_ref4) {
  var huge = _ref4.huge;
  return huge && css(["font-size:", ";margin:", " 0;"], stepToRem(2), pxToRem(10));
});
export var BulletList = function BulletList(_ref5) {
  var items = _ref5.items,
      small = _ref5.small,
      large = _ref5.large,
      big = _ref5.big,
      huge = _ref5.huge,
      others = _objectWithoutProperties(_ref5, ["items", "small", "large", "big", "huge"]);

  return /*#__PURE__*/React.createElement(StyledBulletList, others, items.map(function (_ref6) {
    var item = _ref6.item,
        key = _ref6.key,
        itemOthers = _objectWithoutProperties(_ref6, ["item", "key"]);

    return /*#__PURE__*/React.createElement(StyledItem, _extends({
      key: key,
      small: small,
      large: large,
      big: big,
      huge: huge
    }, itemOthers), item);
  }));
};
BulletList.propTypes = {
  small: PropTypes.bool,
  large: PropTypes.bool,
  big: PropTypes.bool,
  huge: PropTypes.bool,
  items: PropTypes.array
};
BulletList.defaultProps = {
  small: false,
  large: false,
  big: false,
  huge: false,
  items: []
};