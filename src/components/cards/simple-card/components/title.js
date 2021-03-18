"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _parser = require("../../../../helpers/utils/parser");

var _title = require("../../../../components/typography/title");

var _marger = require("../../../../components/layout/marger");

var Title = function Title(_ref) {
  var title = _ref.title,
      titleProps = _ref.titleProps;
  return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: ".3"
  }, /*#__PURE__*/_react.default.createElement(_title.Title, (0, _extends2.default)({
    tag: "p"
  }, titleProps, {
    className: (0, _classnames.default)('k-SimpleCard__title', titleProps.className),
    noMargin: true,
    modifier: "senary"
  }), (0, _parser.parseHtml)(title)));
};

exports.Title = Title;
Title.propTypes = {
  title: _propTypes.default.string,
  titleProps: _propTypes.default.object
};
Title.defaultProps = {
  title: null,
  titleProps: {}
};