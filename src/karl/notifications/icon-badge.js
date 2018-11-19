"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlIconBadge = void 0;

var _react = _interopRequireDefault(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _grid = require("kitten/components/grid/grid");

var _iconBadge = require("kitten/components/notifications/icon-badge");

var _checkedIcon = require("kitten/components/icons/checked-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _title = require("kitten/karl/examples/title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var KarlIconBadge = function KarlIconBadge(props) {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-s": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With on character"), _react.default.createElement("div", {
    style: styles.badge
  }, _react.default.createElement(_iconBadge.IconBadge, props, "C"))), _react.default.createElement(_grid.GridCol, {
    "col-s": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With two characters"), _react.default.createElement("div", {
    style: styles.badge
  }, _react.default.createElement(_iconBadge.IconBadge, props, "A+"))), _react.default.createElement(_grid.GridCol, {
    "col-s": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With svg"), _react.default.createElement("div", {
    style: styles.badge
  }, _react.default.createElement(_iconBadge.IconBadge, _extends({
    valid: true
  }, props), _react.default.createElement(_checkedIcon.CheckedIcon, {
    style: styles.iconSvg
  })))))), _react.default.createElement(_grid.GridCol, null, _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-s": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With big badge"), _react.default.createElement("div", {
    style: styles.badge.big
  }, _react.default.createElement(_iconBadge.IconBadge, _extends({
    big: true
  }, props), "A+"))), _react.default.createElement(_grid.GridCol, {
    "col-s": "3"
  }, _react.default.createElement(_title.KarlExampleTitle, null, "With huge badge"), _react.default.createElement("div", {
    style: styles.badge.huge
  }, _react.default.createElement(_iconBadge.IconBadge, _extends({
    huge: true
  }, props), "A+"))))));
};

exports.KarlIconBadge = KarlIconBadge;
var bigSize = {
  width: 40,
  height: 40
};
var hugeSize = {
  width: 50,
  height: 50
};
var styles = {
  badge: {
    width: 30,
    height: 30,
    big: bigSize,
    huge: hugeSize
  },
  iconSvg: {
    display: 'block',
    margin: 0,
    padding: 0,
    width: 11,
    height: 11
  }
};