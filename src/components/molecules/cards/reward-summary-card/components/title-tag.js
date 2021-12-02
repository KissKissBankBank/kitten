"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TitleTag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = require("../../../../../components/atoms/tag");

var _lockIcon = require("../../../../../components/graphics/icons/lock-icon");

var _starIcon = require("../../../../../components/graphics/icons/star-icon");

var _excluded = ["text", "icon", "className"];

var TitleTag = function TitleTag(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var iconDisplay = function () {
    switch (icon) {
      case 'lock':
        return /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
          width: "14",
          height: "14"
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
    className: (0, _classnames.default)('k-RewardSummaryCard__titleTag', className, 'k-u-margin-top-single')
  }, props), iconDisplay, text);
};

exports.TitleTag = TitleTag;
TitleTag.propTypes = {
  icon: _propTypes.default.oneOf(['star', 'lock']),
  text: _propTypes.default.node
};
TitleTag.defaultProps = {
  icon: 'star',
  text: null
};