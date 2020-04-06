"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownHeading = void 0;

var _react = _interopRequireWildcard(require("react"));

var _slugify = _interopRequireDefault(require("slugify"));

var _title = require("../../../typography/title");

var _horizontalStroke = require("../../../layout/horizontal-stroke");

var _marger = require("../../../layout/marger");

var MarkdownHeading = function MarkdownHeading(props) {
  var modifier;
  var tag;

  switch (props.level) {
    case 1:
      modifier = 'secondary';
      tag = 'h1';
      break;

    case 2:
      modifier = 'quaternary';
      tag = 'h2';
      break;

    case 3:
      modifier = 'quinary';
      tag = 'h3';
      break;

    default:
      modifier = 'senary';
      tag = 'h4';
      break;
  }

  var renderHorizontalStroke = function renderHorizontalStroke() {
    if (props.level > 1) return;
    return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
      top: "2",
      bottom: "4"
    }, /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
      size: "big"
    }));
  };

  var id = (0, _slugify.default)(props.children[0], {
    lower: true,
    remove: /'/g
  });
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: {
      default: 8,
      fromS: 10
    },
    bottom: "2"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, {
    modifier: modifier,
    tag: tag,
    id: id
  }, props.children)), renderHorizontalStroke());
};

exports.MarkdownHeading = MarkdownHeading;