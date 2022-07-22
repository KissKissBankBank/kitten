"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TitleTag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = require("../../../../information/tag");

var _lockIcon = require("../../../../graphics/icons/lock-icon");

var _starIcon = require("../../../../graphics/icons/star-icon");

const TitleTag = _ref => {
  let {
    text,
    icon,
    className,
    ...props
  } = _ref;

  const iconDisplay = (() => {
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
  })();

  return /*#__PURE__*/_react.default.createElement(_tag.Tag, (0, _extends2.default)({
    className: (0, _classnames.default)('k-SummaryCard__titleTag', className, 'k-u-margin-top-single')
  }, props), iconDisplay, /*#__PURE__*/_react.default.createElement("span", null, text));
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