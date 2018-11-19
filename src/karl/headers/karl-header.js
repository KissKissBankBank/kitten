"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlMenuHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _kisskissbankbanklogo = require("kitten/karl/logos/kisskissbankbanklogo");

var _crossIcon = require("kitten/components/icons/cross-icon");

var _menuIcon = require("kitten/components/icons/menu-icon");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _header = require("kitten/components/headers/header");

var _grid = require("kitten/components/grid/grid");

var _headerTitles = require("kitten/components/headers/header-titles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlMenuHeader = function KarlMenuHeader(props) {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    col: "12"
  }, _react.default.createElement(_header.Header, {
    className: "karl-Header karl-Menu__header",
    fixed: true
  }, _react.default.createElement(_header.HeaderItems, null, _react.default.createElement(_header.HeaderItem, null, _react.default.createElement(_buttonIcon.ButtonIcon, {
    onClick: props.onButtonClick,
    className: "karl-Menu__header__button"
  }, _react.default.createElement(_menuIcon.MenuIcon, {
    className: (0, _classnames.default)('k-ButtonIcon__svg', 'karl-Menu__header__icon', 'karl-Menu__header__icon--closed')
  }), _react.default.createElement(_crossIcon.CrossIcon, {
    className: (0, _classnames.default)('k-ButtonIcon__svg', 'karl-Menu__header__icon', 'karl-Menu__header__icon--opened')
  }))), _react.default.createElement(_header.HeaderItem, null, _react.default.createElement(_kisskissbankbanklogo.KissKissBankBankLogo, {
    className: (0, _classnames.default)('k-Header__logo', 'karl-Menu__header__logo'),
    width: "135"
  })), _react.default.createElement(_headerTitles.HeaderTitles, {
    title: "Styleguide",
    className: "karl-Menu__header__title"
  })))));
};

exports.KarlMenuHeader = KarlMenuHeader;
KarlMenuHeader.defaultProps = {
  onButtonClick: function onButtonClick() {}
};