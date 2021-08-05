"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../../components/atoms/typography/text");

var Title = function Title(_ref) {
  var largeTitle = _ref.largeTitle,
      props = (0, _objectWithoutProperties2.default)(_ref, ["largeTitle"]);
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    color: "font1",
    weight: "bold"
  }, props, {
    className: (0, _classnames.default)('k-ContributionCard__title', props.className, {
      'k-ContributionCard__title--large': largeTitle
    })
  }));
};

exports.Title = Title;
Title.defaultProps = {
  largeTitle: false
};
Title.propTypes = {
  largeTitle: _propTypes.default.bool
};