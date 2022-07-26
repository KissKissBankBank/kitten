"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeadingTag = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tag = require("../../../../information/tag");

var _diamondIcon = require("../../../../graphics/icons/diamond-icon");

var _starIconNext = require("../../../../graphics/icons-next/star-icon-next");

const HeadingTag = _ref => {
  let {
    text,
    icon,
    className,
    ...props
  } = _ref;

  const iconDisplay = (() => {
    switch (icon) {
      case 'diamond':
        return /*#__PURE__*/_react.default.createElement(_diamondIcon.DiamondIcon, {
          width: "18",
          height: "20"
        });

      case 'star':
        return /*#__PURE__*/_react.default.createElement(_starIconNext.StarIconNext, {
          width: "14",
          height: "13"
        });

      default:
        return null;
    }
  })();

  return /*#__PURE__*/_react.default.createElement(_tag.Tag, (0, _extends2.default)({
    variant: "dark",
    className: (0, _classnames.default)('k-RewardCard__headingTag', className)
  }, props), iconDisplay, text);
};

exports.HeadingTag = HeadingTag;
HeadingTag.propTypes = {
  icon: _propTypes.default.oneOf([null, 'star', 'diamond']),
  text: _propTypes.default.node
};
HeadingTag.defaultProps = {
  icon: null,
  text: null
};