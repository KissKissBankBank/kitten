"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StandaloneRangeDatePicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDayPicker = require("react-day-picker");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _fr = _interopRequireDefault(require("date-fns/locale/fr"));

var _enGB = _interopRequireDefault(require("date-fns/locale/en-GB"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledDatePicker = _styledComponents.default.div.withConfig({
  displayName: "standalone-range-date-picker__StyledDatePicker",
  componentId: "sc-1w35zwa-0"
})(["--rdp-cell-size:", ";--rdp-accent-color:var(--color-primary-500);--rdp-background-color:var(--color-grey-000);--rdp-outline:", " solid var(--rdp-accent-color);--rdp-outline-selected:", " solid rgba(0,0,0,0.75);", " .rdp-caption_label.rdp-caption_label{", " font-size:", ";}.rdp-head_cell.rdp-head_cell{", " font-size:", ";text-transform:capitalize;}.rdp-cell.rdp-cell{font-size:", ";}.rdp-button.rdp-button{transition:color var(--transition),background-color var(--transition),border-color var(--transition);}.rdp-day_range_start.rdp-day_range_start,.rdp-day_range_end.rdp-day_range_end{", "}.rdp-day_range_middle.rdp-day_range_middle{background-color:var(--color-primary-100);color:var(--color-primary-700);}"], (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles[400], _typographyConfig.default.fontStyles[500], (0, _typography.pxToRem)(14), _typographyConfig.default.fontStyles[500], (0, _typography.pxToRem)(12), (0, _typography.pxToRem)(12), _typographyConfig.default.fontStyles[700]);

const StandaloneRangeDatePicker = _ref => {
  let {
    from,
    to,
    onChange,
    styles,
    locale = 'fr',
    months,
    weekDays,
    weekdaysShort,
    previousMonth,
    disabledDays,
    nextMonth,
    title,
    firstDayOfWeek,
    initialMonth,
    defaultMonth,
    numberOfMonths,
    ...datePickerProps
  } = _ref;
  const [dateRange, setDateRange] = (0, _react.useState)({
    from,
    to
  });
  (0, _react.useEffect)(() => {
    onChange(dateRange);
  }, [dateRange]);
  return /*#__PURE__*/_react.default.createElement(StyledDatePicker, {
    styles: styles
  }, /*#__PURE__*/_react.default.createElement(_reactDayPicker.DayPicker, (0, _extends2.default)({
    numberOfMonths: numberOfMonths,
    mode: "range",
    selected: dateRange,
    onSelect: range => {
      setDateRange(range);
    },
    disabled: disabledDays,
    locale: locale && locale.startsWith('en') ? _enGB.default : _fr.default,
    months: months,
    labels: {
      labelPrevious: previousMonth,
      labelNext: nextMonth
    },
    weekStartsOn: firstDayOfWeek,
    defaultMonth: defaultMonth || initialMonth
  }, datePickerProps)));
};

exports.StandaloneRangeDatePicker = StandaloneRangeDatePicker;
StandaloneRangeDatePicker.propTypes = {
  from: _propTypes.default.instanceOf(Date),
  to: _propTypes.default.instanceOf(Date),
  onChange: _propTypes.default.func,
  months: _propTypes.default.array,
  previousMonth: _propTypes.default.func,
  nextMonth: _propTypes.default.func,
  styles: _propTypes.default.object
};
StandaloneRangeDatePicker.defaultProps = {
  from: undefined,
  to: undefined,
  onChange: () => {},
  months: [],
  previousMonth: () => '',
  nextMonth: () => ''
};