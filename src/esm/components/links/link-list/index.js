import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
var StyledLinkList = styled.ul.withConfig({
  displayName: "link-list__StyledLinkList",
  componentId: "thcyql-0"
})(["text-align:center;list-style-type:none;padding:0;@media (min-width:", "px){text-align:left;}&.k-LinkList--withoutMargin{margin-top:0;margin-bottom:0;.k-LinkList__item:last-child{margin-bottom:0;}}.k-LinkList__item{margin-bottom:", ";}.k-LinkList__item--double{margin-bottom:", ";}.k-LinkList__item--triple{margin-bottom:", ";}.k-LinkList__link{", ";font-size:", ";text-decoration:none;&:active,&.k-LinkList__link--isActive{color:", ";}&:hover{color:", ";}transition:color 0.2s;}.k-LinkList__item--regular,.k-LinkList__link--regular{", ";}.k-LinkList__item--light,.k-LinkList__link--light{", ";}.k-LinkList__link--normalLineHeight{line-height:normal;}.k-LinkList__link--light{color:", ";}.k-LinkList__link--dark{color:", ";}"], ScreenConfig.S.min, pxToRem(5), pxToRem(10), pxToRem(15), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), COLORS.primary3, COLORS.primary1, TYPOGRAPHY.fontStyles.regular, TYPOGRAPHY.fontStyles.light, COLORS.background1, COLORS.font1);
export var LinkList = function LinkList(_ref) {
  var className = _ref.className,
      margin = _ref.margin,
      items = _ref.items,
      lineHeight = _ref.lineHeight,
      itemMargin = _ref.itemMargin,
      color = _ref.color,
      weight = _ref.weight,
      href = _ref.href,
      active = _ref.active,
      others = _objectWithoutProperties(_ref, ["className", "margin", "items", "lineHeight", "itemMargin", "color", "weight", "href", "active"]);

  return /*#__PURE__*/React.createElement(StyledLinkList, _extends({}, others, {
    className: classNames('k-LinkList', others.className, {
      'k-LinkList--withoutMargin': !margin
    })
  }), items.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        href = _ref2.href,
        active = _ref2.active;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('k-LinkList__item', "k-LinkList__item--".concat(itemMargin)),
      key: key
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      className: classNames('k-LinkList__link', item.className, "k-LinkList__link--".concat(color), "k-LinkList__link--".concat(weight), "k-LinkList__item--".concat(weight), {
        'k-LinkList__link--isActive': active
      })
    }, item));
  }));
};
LinkList.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double', 'triple']),
  weight: PropTypes.oneOf(['regular', 'light']),
  margin: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    key: PropTypes.string,
    href: PropTypes.string,
    weight: PropTypes.string,
    active: PropTypes.bool
  }))
};
LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [],
  // Eg: [{ key: …, item: …, href: …, weight: …, }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular',
  active: false
};