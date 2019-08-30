"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandaloneRangeDatePicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDayPicker = _interopRequireWildcard(require("react-day-picker"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _screenConfig = require("../../../constants/screen-config");

var _navbar = require("./components/navbar");

var borderSize = (0, _typography.pxToRem)(2);
var cellSize = (0, _typography.pxToRem)(49);
var tinyCellSize = (0, _typography.pxToRem)(38);
var dayPickerPadding = (0, _typography.pxToRem)(30);
var tinyDayPickerPadding = (0, _typography.pxToRem)(20);

var StyledDatePicker = _styledComponents.default.div.withConfig({
  displayName: "standalone-range__StyledDatePicker",
  componentId: "yne6lo-0"
})(["display:inline-block;box-sizing:border-box;.DayPickerInput-Overlay{min-width:calc(7 * ", " + 2 * ", ");margin-top:", ";box-shadow:none;outline:none;@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}}.DayPicker-Caption{text-align:center;height:", ";line-height:", ";margin:0;padding:0;overflow:hidden;", " & div{margin:0;font-size:", ";}}.DayPicker{font-size:", ";", " outline:none;border:none;.DayPicker-Month{margin:0;@media (min-width:", "px){&:first-of-type{margin-right:", ";}}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;font-size:", ";outline:none;@media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--today{", " ", "}&.DayPicker-Day--selected{outline-offset:calc(-1 * ", " / 2);&:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled){&,&:hover{", "}&:focus{z-index:25;", " outline-offset:0;}&.DayPicker-Day--start,&.DayPicker-Day--end{&,&:hover{", "}&:focus{", " outline-offset:calc(", " / -2);z-index:25;}}}}&.DayPicker-Day--disabled{", " pointer-events:none;}&.DayPicker-Day--outside{border:0;}&:not(.DayPicker-Day--disabled):focus{z-index:25;position:relative;outline-style:solid;outline-width:", ";", "}}&:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{", " ", "}}"], tinyCellSize, tinyDayPickerPadding, (0, _typography.pxToRem)(18), _screenConfig.ScreenConfig.S.min, cellSize, dayPickerPadding, cellSize, cellSize, function (_ref) {
  var styles = _ref.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, (0, _typography.stepToRem)(-1), (0, _typography.stepToRem)(-1), _typographyConfig.default.fontStyles.light, _screenConfig.ScreenConfig.M.min, (0, _typography.pxToRem)(30), _typographyConfig.default.fontStyles.regular, function (_ref2) {
  var styles = _ref2.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, (0, _typography.stepToRem)(-2), _screenConfig.ScreenConfig.S.min, cellSize, cellSize, function (_ref3) {
  var styles = _ref3.styles;
  return (0, _styledComponents.css)(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, _typographyConfig.default.fontStyles.regular, function (_ref4) {
  var styles = _ref4.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.day.today.color);
}, borderSize, function (_ref5) {
  var styles = _ref5.styles;
  return (0, _styledComponents.css)(["z-index:15;background-color:", ";color:", ";border-color:", ";border-width:", ";outline:", " solid ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.borderColor, borderSize, styles.day.selected.borderColor, borderSize);
}, function (_ref6) {
  var styles = _ref6.styles;
  return (0, _styledComponents.css)(["outline-color:", ";"], styles.day.focus.color);
}, function (_ref7) {
  var styles = _ref7.styles;
  return (0, _styledComponents.css)(["border:", " ", ";position:relative;z-index:20;background-color:", ";color:", ";outline:", " solid ", ";"], styles.day.selectedStartAndEnd.backgroundColor, borderSize, styles.day.selectedStartAndEnd.backgroundColor, styles.day.selectedStartAndEnd.color, styles.day.selectedStartAndEnd.backgroundColor, borderSize);
}, function (_ref8) {
  var styles = _ref8.styles;
  return (0, _styledComponents.css)(["outline:", " solid calc(", " * 2);"], styles.day.focus.color, borderSize);
}, borderSize, function (_ref9) {
  var styles = _ref9.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.day.disabled.color);
}, borderSize, function (_ref10) {
  var styles = _ref10.styles;
  return (0, _styledComponents.css)(["outline-color:", ";outline-offset:0;"], styles.day.focus.color);
}, _typographyConfig.default.fontStyles.light, function (_ref11) {
  var styles = _ref11.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";border:", ";outline:", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});

var StandaloneRangeDatePicker =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(StandaloneRangeDatePicker, _PureComponent);

  function StandaloneRangeDatePicker(props) {
    var _this;

    (0, _classCallCheck2.default)(this, StandaloneRangeDatePicker);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(StandaloneRangeDatePicker).call(this, props));
    _this.handleDayClick = _this.handleDayClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleResetClick = _this.handleResetClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = _this.getInitialState();
    return _this;
  }

  (0, _createClass2.default)(StandaloneRangeDatePicker, [{
    key: "getInitialState",
    value: function getInitialState() {
      return {
        from: undefined,
        to: undefined
      };
    }
  }, {
    key: "handleDayClick",
    value: function handleDayClick(day) {
      var range = _reactDayPicker.DateUtils.addDayToRange(day, this.state);

      this.setState(range);
    }
  }, {
    key: "handleResetClick",
    value: function handleResetClick() {
      this.setState(this.getInitialState());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          styles = _this$props.styles,
          locale = _this$props.locale,
          months = _this$props.months,
          weekDays = _this$props.weekDays,
          weekdaysShort = _this$props.weekdaysShort,
          previousMonth = _this$props.previousMonth,
          disabledDays = _this$props.disabledDays,
          nextMonth = _this$props.nextMonth,
          title = _this$props.title,
          firstDayOfWeek = _this$props.firstDayOfWeek,
          initialMonth = _this$props.initialMonth,
          numberOfMonths = _this$props.numberOfMonths,
          datePickerProps = (0, _objectWithoutProperties2.default)(_this$props, ["styles", "locale", "months", "weekDays", "weekdaysShort", "previousMonth", "disabledDays", "nextMonth", "title", "firstDayOfWeek", "initialMonth", "numberOfMonths"]);
      var _this$state = this.state,
          from = _this$state.from,
          to = _this$state.to;
      var modifiers = {
        start: from,
        end: to
      };
      return _react.default.createElement(StyledDatePicker, {
        styles: styles
      }, _react.default.createElement(_reactDayPicker.default, {
        className: "Selectable",
        numberOfMonths: numberOfMonths,
        selectedDays: [from, {
          from: from,
          to: to
        }],
        modifiers: modifiers,
        onDayClick: this.handleDayClick,
        disabledDays: disabledDays,
        navbarElement: _react.default.createElement(_navbar.Navbar, {
          title: title,
          iconColor: styles.header.icon.color,
          months: months
        }),
        weekdaysLong: weekDays,
        weekdaysShort: weekDays && weekDays.map(function (str) {
          return str.substr(0, 2);
        }),
        locale: locale,
        months: months,
        labels: {
          previousMonth: previousMonth,
          nextMonth: nextMonth
        },
        firstDayOfWeek: firstDayOfWeek,
        initialMonth: initialMonth,
        dayPickerProps: (0, _extends2.default)({}, datePickerProps)
      }));
    }
  }]);
  return StandaloneRangeDatePicker;
}(_react.PureComponent);

exports.StandaloneRangeDatePicker = StandaloneRangeDatePicker;
StandaloneRangeDatePicker.propTypes = {
  styles: _propTypes.default.object,
  months: _propTypes.default.array,
  previousMonth: _propTypes.default.string,
  nextMonth: _propTypes.default.string
};
StandaloneRangeDatePicker.defaultProps = {
  months: '',
  previousMonth: '',
  nextMonth: '',
  styles: {
    header: {
      backgroundColor: _colorsConfig.default.background1,
      color: _colorsConfig.default.font1,
      icon: {
        color: _colorsConfig.default.font1
      }
    },
    borderColor: _colorsConfig.default.line1,
    weekdaysColor: _colorsConfig.default.font1,
    day: {
      focus: {
        color: _colorsConfig.default.primary1
      },
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
        backgroundColor: _colorsConfig.default.primary6,
        color: _colorsConfig.default.primary1,
        borderColor: _colorsConfig.default.primary4
      },
      selectedStartAndEnd: {
        backgroundColor: _colorsConfig.default.primary1,
        color: _colorsConfig.default.background1
      }
    }
  }
};