"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingTag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = require("../../../../components/atoms/tag");

var _diamondIcon = require("../../../../components/icons/diamond-icon");

var _starIcon = require("../../../../components/icons/star-icon");

var HeadingTag = function HeadingTag(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["text", "icon", "className"]);

  var iconDisplay = function () {
    switch (icon) {
      case 'diamond':
        return /*#__PURE__*/_react.default.createElement(_diamondIcon.DiamondIcon, {
          width: "18",
          height: "20"
        });

      case 'star':
      default:
        return /*#__PURE__*/_react.default.createElement(_starIcon.StarIcon, {
          width: "14",
          height: "13"
        });
    }
  }();

  return /*#__PURE__*/_react.default.createElement(_tag.Tag, (0, _extends2.default)({
    className: (0, _classnames.default)('k-BackingCard__headingTag', 'k-BackingCard__drawer', className)
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