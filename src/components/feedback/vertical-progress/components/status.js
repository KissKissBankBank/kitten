"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Status = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _screenConfig = require("../../../../constants/screen-config");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _checkedIcon = require("../../../graphics/icons/checked-icon");

var _hourglassIcon = require("../../../graphics/icons/hourglass-icon");

var _longArrowIcon = require("../../../graphics/icons/long-arrow-icon");

const STATUS_SIZE = 30;

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "status__StyledWrapper",
  componentId: "sc-1uvui41-0"
})(["display:flex;flex:1;z-index:0;&.k-VerticalProgress__status--actions{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--waiting{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--publish{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--valid{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--disabled{.k-VerticalProgress__icon{border-color:", ";background-color:", ";}.k-VerticalProgress__title{color:", ";}}.k-VerticalProgress__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:var(--border-radius-rounded);border:var(--border-width) solid ", ";box-sizing:border-box;margin-right:", ";background-color:", ";}.k-VerticalProgress__title{margin:0;", ";font-size:", ";align-self:center;@media (min-width:", "px){font-size:", ";}}"], _colorsConfig.default.orange2, _colorsConfig.default.orange2, _colorsConfig.default.orange2, _colorsConfig.default.font3, _colorsConfig.default.font3, _colorsConfig.default.font3, _colorsConfig.default.line3, _colorsConfig.default.line3, _colorsConfig.default.line3, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.primary2, _colorsConfig.default.line1, _colorsConfig.default.background1, _colorsConfig.default.font2, (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _colorsConfig.default.background1, _typographyConfig.default.fontStyles['700'], (0, _typography.stepToRem)(0), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(1));

const Status = _ref => {
  let {
    statusType,
    progressTitle,
    titleProps,
    children,
    ...other
  } = _ref;

  const iconByStatus = (() => {
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
  })();

  return /*#__PURE__*/_react.default.createElement(StyledWrapper, {
    className: (0, _classnames.default)('k-VerticalProgress__status', "k-VerticalProgress__status--" + statusType)
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