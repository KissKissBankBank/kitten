"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DatePicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _textInputWithUnit = require("../../../components/form/text-input-with-unit");

var _typography = require("../../../helpers/utils/typography");

var _screenConfig = require("../../../constants/screen-config");

var _navbar = require("./components/navbar");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Doc available here: http://react-day-picker.js.org/docs/getting-started
var borderSize = 'var(--border-width)';
var cellSize = (0, _typography.pxToRem)(50);
var tinyCellSize = (0, _typography.pxToRem)(40);
var dayPickerPadding = (0, _typography.pxToRem)(30);
var tinyDayPickerPadding = (0, _typography.pxToRem)(20);

var StyledDatePicker = _styledComponents.default.div.withConfig({
  displayName: "date-picker__StyledDatePicker",
  componentId: "sc-1jr1agu-0"
})(["box-sizing:border-box;.DayPickerInput-Overlay{box-shadow:none;margin-top:18px;min-width:calc(7 * ", " + 2 * ", ");@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}&:before{content:'';width:0;height:0;border-left:", " solid transparent;border-right:", " solid transparent;", " position:absolute;top:-", ";left:", ";}}.DayPicker-Caption{text-align:center;height:", ";margin:-", " -", " 0;overflow:hidden;@media (min-width:", "px){margin:-", " -", " 0;}", " & div{padding:", " 0;margin:0 ", ";font-size:", ";}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;font-size:", ";@media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--outside{border:0;}}.DayPicker-Day--today{", " ", "}.DayPicker-Day--selected{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--outside){", " &:hover{", "}}}}.DayPicker-Day--disabled{", "}.DayPicker-Month{margin:0;}.DayPicker-wrapper{padding:0 ", " ", " ", ";@media (min-width:", "px){padding:0 ", " ", " ", ";}}.DayPicker{font-size:", ";", " ", " &:not(.DayPicker--interactionDisabled){.DayPicker-Day{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--selected){&:not(.DayPicker-Day--outside){&:hover{", " ", "}}}}}}}"], tinyCellSize, tinyDayPickerPadding, _screenConfig.ScreenConfig.S.min, cellSize, dayPickerPadding, (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9), function (_ref) {
  var styles = _ref.styles;
  return (0, _styledComponents.css)(["border-bottom:", " solid ", ";"], (0, _typography.pxToRem)(8), styles.header.backgroundColor);
}, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(22), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(32), function (_ref2) {
  var styles = _ref2.styles;
  return (0, _styledComponents.css)(["background-color ", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(63), (0, _typography.stepToRem)(1), _typographyConfig.default.fontStyles.regular, function (_ref3) {
  var styles = _ref3.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, (0, _typography.stepToRem)(1), _screenConfig.ScreenConfig.S.min, cellSize, cellSize, function (_ref4) {
  var styles = _ref4.styles;
  return (0, _styledComponents.css)(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, _typographyConfig.default.fontStyles.regular, function (_ref5) {
  var styles = _ref5.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.day.today.color);
}, function (_ref6) {
  var styles = _ref6.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.backgroundColor, borderSize);
}, function (_ref7) {
  var styles = _ref7.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.backgroundColor, borderSize);
}, function (_ref8) {
  var styles = _ref8.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.day.disabled.color);
}, tinyDayPickerPadding, tinyDayPickerPadding, tinyDayPickerPadding, _screenConfig.ScreenConfig.S.min, dayPickerPadding, dayPickerPadding, dayPickerPadding, (0, _typography.stepToRem)(1), _typographyConfig.default.fontStyles.light, function (_ref9) {
  var styles = _ref9.styles;
  return (0, _styledComponents.css)(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, _typographyConfig.default.fontStyles.light, function (_ref10) {
  var styles = _ref10.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});

var DatePicker = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(DatePicker, _Component);

  function DatePicker() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.parseDate = function (str) {
      var _str$split = str.split('/'),
          day = _str$split[0],
          month = _str$split[1],
          year = _str$split[2];

      return new Date(year, month - 1, day);
    };

    _this.formatDate = function (date) {
      return date.toLocaleDateString('fr');
    };

    return _this;
  }

  var _proto = DatePicker.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        locale = _this$props.locale,
        datePickerProps = _this$props.datePickerProps,
        styles = _this$props.styles,
        previousMonth = _this$props.previousMonth,
        nextMonth = _this$props.nextMonth,
        weekDays = _this$props.weekDays,
        months = _this$props.months,
        children = _this$props.children;
    return /*#__PURE__*/_react.default.createElement(StyledDatePicker, {
      styles: styles
    }, /*#__PURE__*/_react.default.createElement(_DayPickerInput.default, {
      formatDate: this.formatDate,
      format: "dd/mm/yyyy",
      placeholder: "dd/mm/yyyy",
      parseDate: this.parseDate,
      dayPickerProps: (0, _extends2.default)({}, datePickerProps, {
        locale: locale,
        months: months,
        weekdaysLong: weekDays,
        weekdaysShort: weekDays && weekDays.map(function (str) {
          return str.substr(0, 2);
        }),
        firstDayOfWeek: 1,
        labels: {
          previousMonth: previousMonth,
          nextMonth: nextMonth
        },
        navbarElement: /*#__PURE__*/_react.default.createElement(_navbar.Navbar, {
          iconColor: styles.header.icon.color
        })
      })
      /* `component` only accepts classes to prevent stateless function
         `ref` error. A fix is currently in progress, see:
         https://github.com/gpbl/react-day-picker/pull/862
      */
      ,
      component: children ? children : TextInputWithUnit
    }));
  };

  return DatePicker;
}(_react.Component);

exports.DatePicker = DatePicker;
DatePicker.defaultProps = {
  locale: 'en',
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  weekDays: null,
  months: null,
  datePickerProps: {
    disabledDays: [{
      after: new Date()
    }]
  },
  styles: {
    header: {
      backgroundColor: _colorsConfig.default.font1,
      color: _colorsConfig.default.background1,
      icon: {
        color: _colorsConfig.default.background1
      }
    },
    borderColor: 'var(--color-grey-400)',
    weekdaysColor: _colorsConfig.default.font1,
    day: {
      hover: {
        backgroundColor: _colorsConfig.default.primary1,
        color: _colorsConfig.default.background1
      },
      today: {
        color: _colorsConfig.default.primary1
      },
      disabled: {
        color: _colorsConfig.default.line2
      },
      selected: {
        backgroundColor: _colorsConfig.default.primary1,
        color: _colorsConfig.default.background1
      }
    }
  }
};

var TextInputWithUnit = /*#__PURE__*/function (_Component2) {
  (0, _inheritsLoose2.default)(TextInputWithUnit, _Component2);

  function TextInputWithUnit() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = TextInputWithUnit.prototype;

  _proto2.render = function render() {
    return /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, (0, _extends2.default)({
      type: "text",
      unit: "\uD83D\uDCC5",
      autoComplete: "off"
    }, this.props));
  };

  return TextInputWithUnit;
}(_react.Component);