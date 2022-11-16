"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Status = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _longArrowIcon = require("../../../graphics/icons/long-arrow-icon");

var _checkedIcon = require("../../../graphics/icons/checked-icon");

var _hourglassIcon = require("../../../graphics/icons/hourglass-icon");

var _classnames = _interopRequireDefault(require("classnames"));

var _screenConfig = require("../../../../constants/screen-config");

const STATUS_SIZE = 30;

const StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "status__StyledWrapper",
  componentId: "sc-1uvui41-0"
})(["display:flex;flex:1;z-index:0;&.k-VerticalProgress__status--actions{.k-VerticalProgress__icon{background-color:var(--color-warning-500);border-color:var(--color-warning-500);}.k-VerticalProgress__title{color:var(--color-warning-500);}}&.k-VerticalProgress__status--waiting{.k-VerticalProgress__icon{background-color:var(--color-grey-600);border-color:var(--color-grey-600);}.k-VerticalProgress__title{color:var(--color-grey-600);}}&.k-VerticalProgress__status--publish{.k-VerticalProgress__icon{background-color:var(--color-grey-800);border-color:var(--color-grey-800);}.k-VerticalProgress__title{color:var(--color-grey-800);}}&.k-VerticalProgress__status--valid{.k-VerticalProgress__icon{background-color:var(--color-primary-500);border-color:var(--color-primary-500);}.k-VerticalProgress__title{color:var(--color-primary-500);}}&.k-VerticalProgress__status--disabled{.k-VerticalProgress__icon{border-color:var(--color-grey-400);background-color:var(--color-grey-000);}.k-VerticalProgress__title{color:var(--color-grey-500);}}.k-VerticalProgress__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:var(--border-radius-rounded);border:var(--border-width) solid var(--color-grey-000);box-sizing:border-box;margin-right:", ";background-color:var(--color-grey-000);}.k-VerticalProgress__title{margin:0;", ";font-size:", ";align-self:center;@media (min-width:", "px){font-size:", ";}}"], (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(STATUS_SIZE), (0, _typography.pxToRem)(20), _typographyConfig.default.fontStyles['700'], (0, _typography.stepToRem)(0), _screenConfig.ScreenConfig.S.min, (0, _typography.stepToRem)(1));

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
          color: "var(--color-grey-000",
          direction: "right"
        });

      case 'waiting':
        return /*#__PURE__*/_react.default.createElement(_hourglassIcon.HourglassIcon, {
          color: "var(--color-grey-000",
          width: "10",
          title: null
        });

      case 'publish':
        return /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
          color: "var(--color-grey-000",
          width: "10",
          title: null
        });

      case 'valid':
        return /*#__PURE__*/_react.default.createElement(_longArrowIcon.LongArrowIcon, {
          color: "var(--color-grey-000",
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