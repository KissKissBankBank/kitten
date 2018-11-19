"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlStaticTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _staticTooltip = require("kitten/components/tooltips/static-tooltip");

var _button = require("kitten/components/buttons/button");

var _grid = require("kitten/components/grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlStaticTooltip = function KarlStaticTooltip(props) {
  return _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
    "col-s": "4"
  }, _react.default.createElement("div", {
    className: "k-u-align-right"
  }, _react.default.createElement(_button.Button, {
    modifier: "helium"
  }, "Button"), _react.default.createElement(_staticTooltip.StaticTooltip, props))));
};

exports.KarlStaticTooltip = KarlStaticTooltip;