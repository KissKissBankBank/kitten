import React from 'react';
import HeaderNav from '../index';
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo';
import { SearchIcon } from '../../../../components/icons/search-icon';
import COLORS from '../../../../constants/colors-config';
import { Text } from '../../../../components/typography/text';
import { parseHtml } from '../../../../helpers/utils/parser';
var HEADER_NAV_ID = 'kkbbAndCoHeaderNav';
export var MinimalistHeaderNavStory = function MinimalistHeaderNavStory(_ref) {
  var text = _ref.text,
      subText = _ref.subText,
      isFixed = _ref.isFixed;
  return /*#__PURE__*/React.createElement(HeaderNav, {
    id: HEADER_NAV_ID,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300
    }
  }, /*#__PURE__*/React.createElement(HeaderNav.Logo, {
    href: "#"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, null)), /*#__PURE__*/React.createElement(HeaderNav.Centered, {
    display: "column"
  }, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "s"
  }, text && /*#__PURE__*/React.createElement(Text, {
    style: {
      margin: 0
    },
    tag: "h1",
    size: "tiny",
    weight: "bold",
    transform: "uppercase",
    lineHeight: "normal"
  }, parseHtml(text)), subText && /*#__PURE__*/React.createElement(Text, {
    weight: "light",
    size: "tiny",
    lineHeight: "normal"
  }, parseHtml(subText)))), /*#__PURE__*/React.createElement(HeaderNav.Right, null, /*#__PURE__*/React.createElement(HeaderNav.LoggedOut, null, /*#__PURE__*/React.createElement(HeaderNav.Button, {
    icon: /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
      min: "s"
    }, /*#__PURE__*/React.createElement(SearchIcon, null)),
    backgroundColor: COLORS.primary1,
    backgroundColorHover: COLORS.primary2,
    color: COLORS.background1,
    text: "Sauvegarder",
    href: "#",
    hiddenText: {
      max: 'xs'
    }
  }))));
};