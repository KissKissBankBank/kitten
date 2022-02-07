"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeadingTag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = require("../../../../information/tag");

var _diamondIcon = require("../../../../graphics/icons/diamond-icon");

var _starIconNext = require("../../../../graphics/icons-next/star-icon-next");

var _excluded = ["text", "icon", "className"];

var HeadingTag = function HeadingTag(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var iconDisplay = function () {
    switch (icon) {
      case 'diamond':
        return /*#__PURE__*/_react.default.createElement(_diamondIcon.DiamondIcon, {
          width: "18",
          height: "20"
        });

      case 'star':
      default:
        return /*#__PURE__*/_react.default.createElement(_starIconNext.StarIconNext, {
          width: "14",
          height: "13"
        });
    }
  }();

  return /*#__PURE__*/_react.default.createElement(_tag.Tag, (0, _extends2.default)({
    variant: "dark",
    className: (0, _classnames.default)('k-BackingCard__headingTag', className)
  }, props), iconDisplay, text);
};

exports.HeadingTag = HeadingTag;
HeadingTag.propTypes = {
  icon: _propTypes.default.oneOf(['star', 'diamond']),
  text: _propTypes.default.node
};
HeadingTag.defaultProps = {
  icon: 'star',
  text: null
};