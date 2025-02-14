import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import PropTypes from 'prop-types';
import TYPOGRAPHY from '../../../constants/typography-config';
import COLORS from '../../../constants/colors-config';
import { checkDeprecatedWeights } from '../../../helpers/utils/deprecated';
const StyledLinkList = styled.ul.withConfig({
  displayName: "link-list__StyledLinkList",
  componentId: "sc-yasa1m-0"
})(["text-align:center;list-style-type:none;padding:0;@media (min-width:", "px){text-align:left;}&.k-LinkList--withoutMargin{margin-top:0;margin-bottom:0;.k-LinkList__item:last-child{margin-bottom:0;}}.k-LinkList__item{margin-bottom:", ";}.k-LinkList__item--double{margin-bottom:", ";}.k-LinkList__item--triple{margin-bottom:", ";}.k-LinkList__link{", ";font-size:", ";text-decoration:none;&:active,&.k-LinkList__link--isActive{color:", ";}&:hover{color:", ";}transition:color 0.2s;}.k-LinkList__item--regular,.k-LinkList__link--regular{", ";}.k-LinkList__item--light,.k-LinkList__link--light{", ";}.k-LinkList__link--normalLineHeight{line-height:normal;}.k-LinkList__link--light{color:", ";}.k-LinkList__link--dark{color:", ";}"], ScreenConfig.S.min, pxToRem(5), pxToRem(10), pxToRem(15), TYPOGRAPHY.fontStyles['500'], stepToRem(-1), COLORS.primary3, COLORS.primary1, TYPOGRAPHY.fontStyles['500'], TYPOGRAPHY.fontStyles['400'], COLORS.background1, COLORS.font1);
export const LinkList = _ref => {
  let {
    className,
    margin,
    items,
    lineHeight,
    itemMargin,
    color,
    weight,
    href,
    ...others
  } = _ref;
  checkDeprecatedWeights(weight);
  return /*#__PURE__*/React.createElement(StyledLinkList, _extends({}, others, {
    className: classNames('k-LinkList', others.className, {
      'k-LinkList--withoutMargin': !margin
    })
  }), items.map(_ref2 => {
    let {
      item,
      key,
      href,
      active
    } = _ref2;
    return /*#__PURE__*/React.createElement("li", {
      className: classNames('k-LinkList__item', "k-LinkList__item--" + itemMargin),
      key: key
    }, /*#__PURE__*/React.createElement("a", {
      href: href,
      className: classNames('k-LinkList__link', item.className, "k-LinkList__link--" + color, "k-LinkList__link--" + weight, "k-LinkList__item--" + weight, {
        'k-LinkList__link--isActive': active
      })
    }, item));
  }));
};
LinkList.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double', 'triple']),
  weight: PropTypes.oneOf(['400', '500']),
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
  weight: '500'
};