"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _DayPickerInput = _interopRequireDefault(require("react-day-picker/DayPickerInput"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

var _textInputWithUnit = require("../../components/form/text-input-with-unit");

var _typography = require("../../helpers/utils/typography");

var _screenConfig = require("../../constants/screen-config");

var _navbar = require("./components/navbar");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var borderSize = (0, _typography.pxToRem)(2);
var cellSize = (0, _typography.pxToRem)(50);
var tinyCellSize = (0, _typography.pxToRem)(40);
var dayPickerPadding = (0, _typography.pxToRem)(30);
var tinyDayPickerPadding = (0, _typography.pxToRem)(20);
var fontSize = (0, _styledComponents.css)(["font-size:", "rem;"], _typographyConfig.default.fontSize / _typographyConfig.default.scaleMultiplier);

var StyledDatePicker = _styledComponents.default.div.withConfig({
  displayName: "date-picker__StyledDatePicker",
  componentId: "snpu98-0"
})(["box-sizing:border-box;.DayPickerInput-Overlay{box-shadow:none;margin-top:18px;min-width:calc(7 * ", " + 2 * ", ");@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}&:before{content:'';width:0;height:0;border-left:", " solid transparent;border-right:", " solid transparent;", " position:absolute;top:-", ";left:", ";}}.DayPicker-Caption{text-align:center;height:", ";margin:-", " -", " 0;overflow:hidden;@media (min-width:", "px){margin:-", " -", " 0;}", " & div{padding:", " 0;margin:0 ", ";", "}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;", " @media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--outside{border:0;}&:focus{outline:", " solid ", ";outline-offset:", ";}}.DayPicker-Day--today{", " ", "}.DayPicker-Day--selected{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--outside){", " &:hover{", "}}}}.DayPicker-Day--disabled{", "}.DayPicker-Month{margin:0;}.DayPicker-wrapper{padding:0 ", " ", " ", ";@media (min-width:", "px){padding:0 ", " ", " ", ";}&:focus{outline:", " solid ", ";outline-offset:", ";}}.DayPicker{", " ", " ", " &:not(.DayPicker--interactionDisabled){.DayPicker-Day{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--selected){&:not(.DayPicker-Day--outside){&:hover{", " ", "}}}}}}}"], tinyCellSize, tinyDayPickerPadding, _screenConfig.ScreenConfig.S.min, cellSize, dayPickerPadding, (0, _typography.pxToRem)(9), (0, _typography.pxToRem)(9), function (_ref) {
  var styles = _ref.styles;
  return (0, _styledComponents.css)(["border-bottom:", " solid ", ";"], (0, _typography.pxToRem)(8), styles.header.backgroundColor);
}, (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(70), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(22), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(32), function (_ref2) {
  var styles = _ref2.styles;
  return (0, _styledComponents.css)(["background-color ", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, (0, _typography.pxToRem)(23), (0, _typography.pxToRem)(63), fontSize, _typographyConfig.default.fontStyles.regular, function (_ref3) {
  var styles = _ref3.styles;
  return (0, _styledComponents.css)(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, fontSize, _screenConfig.ScreenConfig.S.min, cellSize, cellSize, function (_ref4) {
  var styles = _ref4.styles;
  return (0, _styledComponents.css)(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), _typographyConfig.default.fontStyles.regular, function (_ref5) {
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
}, tinyDayPickerPadding, tinyDayPickerPadding, tinyDayPickerPadding, _screenConfig.ScreenConfig.S.min, dayPickerPadding, dayPickerPadding, dayPickerPadding, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), fontSize, _typographyConfig.default.fontStyles.light, function (_ref9) {
  var styles = _ref9.styles;
  return (0, _styledComponents.css)(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, _typographyConfig.default.fontStyles.light, function (_ref10) {
  var styles = _ref10.styles;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});

var DatePicker = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    var _this;

    (0, _classCallCheck2.default)(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.parseDate = function (str) {
      var _str$split = str.split('/'),
          _str$split2 = (0, _slicedToArray2.default)(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    };

    _this.formatDate = function (date) {
      return date.toLocaleDateString('fr');
    };

    return _this;
  }

  (0, _createClass2.default)(DatePicker, [{
    key: "render",
    value: function render() {
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
    }
  }]);
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
    borderColor: _colorsConfig.default.line1,
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
  (0, _inherits2.default)(TextInputWithUnit, _Component2);

  var _super2 = _createSuper(TextInputWithUnit);

  function TextInputWithUnit() {
    (0, _classCallCheck2.default)(this, TextInputWithUnit);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(TextInputWithUnit, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_textInputWithUnit.TextInputWithUnit, (0, _extends2.default)({
        type: "text",
        unit: "\uD83D\uDCC5",
        autoComplete: "off"
      }, this.props));
    }
  }]);
  return TextInputWithUnit;
}(_react.Component);