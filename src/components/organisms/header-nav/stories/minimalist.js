"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MinimalistHeaderNavStory = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _ = require("../../../..");

var HEADER_NAV_ID = 'kkbbAndCoHeaderNav';

var MinimalistHeaderNavStory = function MinimalistHeaderNavStory(_ref) {
  var text = _ref.text,
      subText = _ref.subText,
      isFixed = _ref.isFixed;
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    id: HEADER_NAV_ID,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default.Logo, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_.KissKissBankBankLogo, null)), /*#__PURE__*/_react.default.createElement(_index.default.Centered, {
    display: "column"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "s"
  }, text && /*#__PURE__*/_react.default.createElement(_.Text, {
    style: {
      margin: 0
    },
    tag: "h1",
    size: "tiny",
    weight: "bold",
    transform: "uppercase",
    lineHeight: "normal"
  }, (0, _.parseHtml)(text)), subText && /*#__PURE__*/_react.default.createElement(_.Text, {
    weight: "light",
    size: "tiny",
    lineHeight: "normal"
  }, (0, _.parseHtml)(subText)))), /*#__PURE__*/_react.default.createElement(_index.default.Right, null, /*#__PURE__*/_react.default.createElement(_index.default.LoggedOut, null, /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
      min: "s"
    }, /*#__PURE__*/_react.default.createElement(_.SearchIcon, null)),
    backgroundColor: _.COLORS.primary1,
    backgroundColorHover: _.COLORS.primary2,
    color: _.COLORS.background1,
    text: "Sauvegarder",
    href: "#",
    hiddenText: {
      max: 'xs'
    }
  }))));
};

exports.MinimalistHeaderNavStory = MinimalistHeaderNavStory;