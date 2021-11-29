"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Status = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _longArrowIcon = require("../../../../components/graphics/icons/long-arrow-icon");

var _checkedIcon = require("../../../../components/graphics/icons/checked-icon");

var _hourglassIcon = require("../../../../components/graphics/icons/hourglass-icon");

var _classnames = _interopRequireDefault(require("classnames"));

var _screenConfig = require("../../../../constants/screen-config");

var STATUS_SIZE = 30;

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "status__StyledWrapper",
  componentId: "ksq19y-0"
})(["display:flex;flex:1;z-index:0;&.k-VerticalProgress__status--actions{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--waiting{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--publish{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--valid{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--disabled{.k-VerticalProgress__icon{border-color:", ";background-color:", ";}.k-VerticalProgress__title{color:", ";}}.k-VerticalProgress__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:var(--border-radius-rounded);border:var(--border-width) solid ", ";box-sizing:border-box;margin-right:", ";background-color:", ";}.k-VerticalProgress__title{margin:0;", ";font-size:", ";align-self:center;@media (min-width:", "px){font-size:", ";}}"], _colorsConfig.default.orange, _colorsConfig.default.orange, _colorsConfig.default.orange, _colorsConfig.default.font3, _colorsConfig.default.font3, _colorsConfig.default.font3, _colorsConfig.default.line3, _colorsConfig.default.line3, _colorsConfig.default.line3, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.font2, (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _colorsConfig.default.background1, _typographyConfig.default.fontStyles.bold, (0, _typography.stepToRem)(0), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(1));

var Status = function Status(_ref) {
  var statusType = _ref.statusType,
      progressTitle = _ref.progressTitle,
      titleProps = _ref.titleProps,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, ["statusType", "progressTitle", "titleProps", "children"]);

  var iconByStatus = function () {
    switch (statusType) {
      case 'actions':
        return /*#__PURE__*/_react.default.createElement(_longArrowIcon.LongArrowIcon, {
          color: _colorsConfig.default.background1,
          direction: "right"
        });

      case 'waiting':
        return /*#__PURE__*/_react.default.createElement(_hourglassIcon.HourglassIcon, {
          color: _colorsConfig.default.background1,
          width: "10",
          title: null
        });

      case 'publish':
        return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
          color: _colorsConfig.default.background1,
          width: "10",
          title: null
        });

      case 'valid':
        return /*#__PURE__*/_react.default.createElement(_longArrowIcon.LongArrowIcon, {
          color: _colorsConfig.default.background1,
          direction: "right"
        });

      case 'disabled':
        return null;

      default:
        return null;
    }
  }();

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, {
    className: (0, _classnames.default)('k-VerticalProgress__status', "k-VerticalProgress__status--".concat(statusType))
  }, /*#__PURE__*/_react.default.createElement("span", (0, _extends2.default)({}, other, {
    className: "k-VerticalProgress__icon"
  }), iconByStatus || children), /*#__PURE__*/_react.default.createElement("p", (0, _extends2.default)({
    className: "k-VerticalProgress__title"
  }, titleProps), progressTitle));
};

exports.Status = Status;
Status.propTypes = {
  statusType: _propTypes.default.oneOf(['actions', 'waiting', 'publish', 'valid', 'disabled']),
  progressTitle: _propTypes.default.string
};
Status.defaultProps = {
  statusType: 'actions',
  progressTitle: ''
};