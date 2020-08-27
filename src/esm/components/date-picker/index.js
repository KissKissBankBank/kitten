import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react'; // Doc available here: http://react-day-picker.js.org/docs/getting-started

import DayPickerInput from 'react-day-picker/DayPickerInput';
import styled, { css } from 'styled-components';
import COLORS from '../../constants/colors-config';
import TYPOGRAPHY from '../../constants/typography-config';
import { TextInputWithUnit as TextInputWithUnitBase } from '../../components/form/text-input-with-unit';
import { pxToRem } from '../../helpers/utils/typography';
import { ScreenConfig } from '../../constants/screen-config';
import { Navbar } from './components/navbar';
var borderSize = pxToRem(2);
var cellSize = pxToRem(50);
var tinyCellSize = pxToRem(40);
var dayPickerPadding = pxToRem(30);
var tinyDayPickerPadding = pxToRem(20);
var fontSize = css(["font-size:", "rem;"], TYPOGRAPHY.fontSize / TYPOGRAPHY.scaleMultiplier);
var StyledDatePicker = styled.div.withConfig({
  displayName: "date-picker__StyledDatePicker",
  componentId: "snpu98-0"
})(["box-sizing:border-box;.DayPickerInput-Overlay{box-shadow:none;margin-top:18px;outline:none;min-width:calc(7 * ", " + 2 * ", ");@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}&:before{content:'';width:0;height:0;border-left:", " solid transparent;border-right:", " solid transparent;", " position:absolute;top:-", ";left:", ";}}.DayPicker-Caption{text-align:center;height:", ";margin:-", " -", " 0;overflow:hidden;@media (min-width:", "px){margin:-", " -", " 0;}", " & div{padding:", " 0;margin:0 ", ";", "}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;", " outline:none;@media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--outside{border:0;}}.DayPicker-Day--today{", " ", "}.DayPicker-Day--selected{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--outside){", " &:hover{", "}}}}.DayPicker-Day--disabled{", "}.DayPicker-Month{margin:0;}.DayPicker-wrapper{padding:0 ", " ", " ", ";outline:none;@media (min-width:", "px){padding:0 ", " ", " ", ";}}.DayPicker{", " ", " outline:none;", " &:not(.DayPicker--interactionDisabled){.DayPicker-Day{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--selected){&:not(.DayPicker-Day--outside){&:hover{", " ", "}}}}}}}"], tinyCellSize, tinyDayPickerPadding, ScreenConfig.S.min, cellSize, dayPickerPadding, pxToRem(9), pxToRem(9), function (_ref) {
  var styles = _ref.styles;
  return css(["border-bottom:", " solid ", ";"], pxToRem(8), styles.header.backgroundColor);
}, pxToRem(8), pxToRem(15), pxToRem(70), pxToRem(2), pxToRem(22), ScreenConfig.S.min, pxToRem(2), pxToRem(32), function (_ref2) {
  var styles = _ref2.styles;
  return css(["background-color ", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, pxToRem(23), pxToRem(63), fontSize, TYPOGRAPHY.fontStyles.regular, function (_ref3) {
  var styles = _ref3.styles;
  return css(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, fontSize, ScreenConfig.S.min, cellSize, cellSize, function (_ref4) {
  var styles = _ref4.styles;
  return css(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, TYPOGRAPHY.fontStyles.regular, function (_ref5) {
  var styles = _ref5.styles;
  return css(["color:", ";"], styles.day.today.color);
}, function (_ref6) {
  var styles = _ref6.styles;
  return css(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.backgroundColor, borderSize);
}, function (_ref7) {
  var styles = _ref7.styles;
  return css(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.backgroundColor, borderSize);
}, function (_ref8) {
  var styles = _ref8.styles;
  return css(["color:", ";"], styles.day.disabled.color);
}, tinyDayPickerPadding, tinyDayPickerPadding, tinyDayPickerPadding, ScreenConfig.S.min, dayPickerPadding, dayPickerPadding, dayPickerPadding, fontSize, TYPOGRAPHY.fontStyles.light, function (_ref9) {
  var styles = _ref9.styles;
  return css(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, TYPOGRAPHY.fontStyles.light, function (_ref10) {
  var styles = _ref10.styles;
  return css(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});
export var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker() {
    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.parseDate = function (str) {
      var _str$split = str.split('/'),
          _str$split2 = _slicedToArray(_str$split, 3),
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

  _createClass(DatePicker, [{
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
      return /*#__PURE__*/React.createElement(StyledDatePicker, {
        styles: styles
      }, /*#__PURE__*/React.createElement(DayPickerInput, {
        formatDate: this.formatDate,
        format: "dd/mm/yyyy",
        placeholder: "dd/mm/yyyy",
        parseDate: this.parseDate,
        dayPickerProps: _extends({}, datePickerProps, {
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
          navbarElement: /*#__PURE__*/React.createElement(Navbar, {
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
}(Component);
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
      backgroundColor: COLORS.font1,
      color: COLORS.background1,
      icon: {
        color: COLORS.background1
      }
    },
    borderColor: COLORS.line1,
    weekdaysColor: COLORS.font1,
    day: {
      hover: {
        backgroundColor: COLORS.primary1,
        color: COLORS.background1
      },
      today: {
        color: COLORS.primary1
      },
      disabled: {
        color: COLORS.line2
      },
      selected: {
        backgroundColor: COLORS.primary1,
        color: COLORS.background1
      }
    }
  }
};

var TextInputWithUnit = /*#__PURE__*/function (_Component2) {
  _inherits(TextInputWithUnit, _Component2);

  var _super2 = _createSuper(TextInputWithUnit);

  function TextInputWithUnit() {
    _classCallCheck(this, TextInputWithUnit);

    return _super2.apply(this, arguments);
  }

  _createClass(TextInputWithUnit, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TextInputWithUnitBase, _extends({
        type: "text",
        unit: "\uD83D\uDCC5",
        autoComplete: "off"
      }, this.props));
    }
  }]);

  return TextInputWithUnit;
}(Component);