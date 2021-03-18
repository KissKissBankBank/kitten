import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
var StyledBulletList = styled.ul.withConfig({
  displayName: "bullet-list__StyledBulletList",
  componentId: "rdyx84-0"
})(["margin:", ";padding:", ";list-style:none;text-align:left;.k-BulletList__item{margin:", " ", ";display:block;", ";line-height:1.5;color:", ";&:before{margin-left:-", ";margin-right:", ";box-sizing:border-box;border-radius:50%;width:", ";height:", ";display:inline-block;vertical-align:middle;background-color:", ";content:'';}}.k-BulletList__item--tiny{font-size:", ";&:before{width:", ";height:", ";}}.k-BulletList__item--regular{font-size:", ";}.k-BulletList__item--large{font-size:", ";}.k-BulletList__item--big{font-size:", ";margin:", " 0;}.k-BulletList__item--huge{font-size:", ";margin:", " 0;}"], pxToRem(0), pxToRem(0), pxToRem(5), pxToRem(16), TYPOGRAPHY.fontStyles.light, COLORS.font1, pxToRem(16), pxToRem(10), pxToRem(6), pxToRem(6), COLORS.font1, stepToRem(-2), pxToRem(4), pxToRem(4), stepToRem(-1), stepToRem(0), stepToRem(1), pxToRem(10), stepToRem(2), pxToRem(10));
export var BulletList = function BulletList(_ref) {
  var items = _ref.items,
      size = _ref.size,
      className = _ref.className,
      others = _objectWithoutProperties(_ref, ["items", "size", "className"]);

  return /*#__PURE__*/React.createElement(StyledBulletList, _extends({
    className: "k-BulletList"
  }, others), items.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        itemOthers = _objectWithoutProperties(_ref2, ["item", "key"]);

    return /*#__PURE__*/React.createElement("li", _extends({
      className: classNames('k-BulletList__item', "k-BulletList__item--".concat(size), className),
      key: key
    }, itemOthers), item);
  }));
};
BulletList.propTypes = {
  size: PropTypes.oneOf(['tiny', 'regular', 'large', 'big', 'huge']),
  items: PropTypes.array
};
BulletList.defaultProps = {
  size: 'regular',
  items: []
};