"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLineWithBigHeart = exports.KarlLineWithTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _line = require("kitten/components/layout/line");

var _tooltip = require("kitten/components/tooltips/tooltip");

var _label = require("kitten/components/form/label");

var _textInput = require("kitten/components/form/text-input");

var _heartIcon = require("kitten/components/icons/heart-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlLineWithTooltip = function KarlLineWithTooltip(props) {
  return _react.default.createElement(_line.Line, null, _react.default.createElement(_line.Line.Item, null, props.text), _react.default.createElement(_line.Line.Item, null, _react.default.createElement(_tooltip.Tooltip, {
    id: props.id,
    place: props.place
  }, props.children)));
};

exports.KarlLineWithTooltip = KarlLineWithTooltip;

var KarlLineWithBigHeart = function KarlLineWithBigHeart(props) {
  return _react.default.createElement(_line.Line, null, _react.default.createElement(_line.Line.Item, null, "Lorem ipsum dolor sit amet."), _react.default.createElement(_line.Line.Item, null, _react.default.createElement("button", {
    className: "k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--big"
  }, _react.default.createElement(_heartIcon.HeartIcon, {
    className: "k-ButtonIcon__svg"
  }))));
};

exports.KarlLineWithBigHeart = KarlLineWithBigHeart;