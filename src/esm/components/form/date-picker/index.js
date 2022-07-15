import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { Component } from 'react'; // Doc available here: http://react-day-picker.js.org/docs/getting-started

import DayPickerInput from 'react-day-picker/DayPickerInput';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { TextInputWithUnit as TextInputWithUnitBase } from '../../form/input/text-input-with-unit';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import { ScreenConfig } from '../../../constants/screen-config';
import { Navbar } from './components/navbar';
var borderSize = 'var(--border-width)';
var cellSize = pxToRem(50);
var tinyCellSize = pxToRem(40);
var dayPickerPadding = pxToRem(30);
var tinyDayPickerPadding = pxToRem(20);
var StyledDatePicker = styled.div.withConfig({
  displayName: "date-picker__StyledDatePicker",
  componentId: "sc-1jr1agu-0"
})(["box-sizing:border-box;.DayPickerInput-Overlay{box-shadow:none;margin-top:18px;min-width:calc(7 * ", " + 2 * ", ");@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}&:before{content:'';width:0;height:0;border-left:", " solid transparent;border-right:", " solid transparent;", " position:absolute;top:-", ";left:", ";}}.DayPicker-Caption{text-align:center;height:", ";margin:-", " -", " 0;overflow:hidden;@media (min-width:", "px){margin:-", " -", " 0;}", " & div{padding:", " 0;margin:0 ", ";font-size:", ";}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;font-size:", ";@media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--outside{border:0;}}.DayPicker-Day--today{", " ", "}.DayPicker-Day--selected{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--outside){", " &:hover{", "}}}}.DayPicker-Day--disabled{", "}.DayPicker-Month{margin:0;}.DayPicker-wrapper{padding:0 ", " ", " ", ";@media (min-width:", "px){padding:0 ", " ", " ", ";}}.DayPicker{font-size:", ";", " ", " &:not(.DayPicker--interactionDisabled){.DayPicker-Day{&:not(.DayPicker-Day--disabled){&:not(.DayPicker-Day--selected){&:not(.DayPicker-Day--outside){&:hover{", " ", "}}}}}}}"], tinyCellSize, tinyDayPickerPadding, ScreenConfig.S.min, cellSize, dayPickerPadding, pxToRem(9), pxToRem(9), function (_ref) {
  var styles = _ref.styles;
  return css(["border-bottom:", " solid ", ";"], pxToRem(8), styles.header.backgroundColor);
}, pxToRem(8), pxToRem(15), pxToRem(70), pxToRem(2), pxToRem(22), ScreenConfig.S.min, pxToRem(2), pxToRem(32), function (_ref2) {
  var styles = _ref2.styles;
  return css(["background-color ", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, pxToRem(23), pxToRem(63), stepToRem(1), TYPOGRAPHY.fontStyles['500'], function (_ref3) {
  var styles = _ref3.styles;
  return css(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, stepToRem(1), ScreenConfig.S.min, cellSize, cellSize, function (_ref4) {
  var styles = _ref4.styles;
  return css(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, TYPOGRAPHY.fontStyles['500'], function (_ref5) {
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
}, tinyDayPickerPadding, tinyDayPickerPadding, tinyDayPickerPadding, ScreenConfig.S.min, dayPickerPadding, dayPickerPadding, dayPickerPadding, stepToRem(1), TYPOGRAPHY.fontStyles['400'], function (_ref9) {
  var styles = _ref9.styles;
  return css(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, TYPOGRAPHY.fontStyles['400'], function (_ref10) {
  var styles = _ref10.styles;
  return css(["background-color:", ";color:", ";border:double ", " ", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});
export var DatePicker = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DatePicker, _Component);

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
  };

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
    borderColor: 'var(--color-grey-400)',
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
  _inheritsLoose(TextInputWithUnit, _Component2);

  function TextInputWithUnit() {
    return _Component2.apply(this, arguments) || this;
  }

  var _proto2 = TextInputWithUnit.prototype;

  _proto2.render = function render() {
    return /*#__PURE__*/React.createElement(TextInputWithUnitBase, _extends({
      type: "text",
      unit: "\uD83D\uDCC5",
      autoComplete: "off"
    }, this.props));
  };

  return TextInputWithUnit;
}(Component);