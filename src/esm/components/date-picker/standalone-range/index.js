import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import styled, { css } from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { ScreenConfig } from '../../../constants/screen-config';
import { Navbar } from './components/navbar';
var borderSize = pxToRem(2);
var cellSize = pxToRem(49);
var tinyCellSize = pxToRem(38);
var dayPickerPadding = pxToRem(30);
var tinyDayPickerPadding = pxToRem(20);
var StyledDatePicker = styled.div.withConfig({
  displayName: "standalone-range__StyledDatePicker",
  componentId: "yne6lo-0"
})(["display:inline-block;box-sizing:border-box;.DayPickerInput-Overlay{min-width:calc(7 * ", " + 2 * ", ");margin-top:", ";box-shadow:none;outline:none;@media (min-width:", "px){min-width:calc(7 * ", " + 2 * ", ");}}.DayPicker-Caption{text-align:center;height:", ";line-height:", ";margin:0;padding:0;overflow:hidden;", " & div{margin:0;font-size:", ";}}.DayPicker{font-size:", ";", " outline:none;border:none;.DayPicker-Month{margin:0;@media (min-width:", "px){&:first-of-type{margin-right:", ";}}}.DayPicker-Weekday{", " ", "}.DayPicker-Weekday,.DayPicker-Day{padding:0;width:", ";height:", ";vertical-align:middle;box-sizing:border-box;font-size:", ";outline:none;@media (min-width:", "px){width:", ";height:", ";}}.DayPicker-Day{", " border-radius:0;&.DayPicker-Day--today{", " ", "}&.DayPicker-Day--selected{outline-offset:calc(-1 * ", " / 2);&:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled){&,&:hover{", "}&:focus{z-index:25;", " outline-offset:0;}&.DayPicker-Day--start,&.DayPicker-Day--end{&,&:hover{", "}&:focus{", " outline-offset:calc(", " / -2);z-index:25;}}}}&.DayPicker-Day--disabled{", " pointer-events:none;}&.DayPicker-Day--outside{border:0;}&:not(.DayPicker-Day--disabled):focus{z-index:25;position:relative;outline-style:solid;outline-width:", ";", "}}&:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{", " ", "}}"], tinyCellSize, tinyDayPickerPadding, pxToRem(18), ScreenConfig.S.min, cellSize, dayPickerPadding, cellSize, cellSize, function (_ref) {
  var styles = _ref.styles;
  return css(["background-color:", ";color:", ";"], styles.header.backgroundColor, styles.header.color);
}, stepToRem(-1), stepToRem(-1), TYPOGRAPHY.fontStyles.light, ScreenConfig.M.min, pxToRem(30), TYPOGRAPHY.fontStyles.regular, function (_ref2) {
  var styles = _ref2.styles;
  return css(["color:", ";"], styles.weekdaysColor);
}, tinyCellSize, tinyCellSize, stepToRem(-2), ScreenConfig.S.min, cellSize, cellSize, function (_ref3) {
  var styles = _ref3.styles;
  return css(["border:solid ", " ", ";"], styles.borderColor, borderSize);
}, TYPOGRAPHY.fontStyles.regular, function (_ref4) {
  var styles = _ref4.styles;
  return css(["color:", ";"], styles.day.today.color);
}, borderSize, function (_ref5) {
  var styles = _ref5.styles;
  return css(["z-index:15;background-color:", ";color:", ";border-color:", ";border-width:", ";outline:", " solid ", ";"], styles.day.selected.backgroundColor, styles.day.selected.color, styles.day.selected.borderColor, borderSize, styles.day.selected.borderColor, borderSize);
}, function (_ref6) {
  var styles = _ref6.styles;
  return css(["outline-color:", ";"], styles.day.focus.color);
}, function (_ref7) {
  var styles = _ref7.styles;
  return css(["border:", " ", ";position:relative;z-index:20;background-color:", ";color:", ";outline:", " solid ", ";"], styles.day.selectedStartAndEnd.backgroundColor, borderSize, styles.day.selectedStartAndEnd.backgroundColor, styles.day.selectedStartAndEnd.color, styles.day.selectedStartAndEnd.backgroundColor, borderSize);
}, function (_ref8) {
  var styles = _ref8.styles;
  return css(["outline:", " solid calc(", " * 2);"], styles.day.focus.color, borderSize);
}, borderSize, function (_ref9) {
  var styles = _ref9.styles;
  return css(["color:", ";"], styles.day.disabled.color);
}, borderSize, function (_ref10) {
  var styles = _ref10.styles;
  return css(["outline-color:", ";outline-offset:0;"], styles.day.focus.color);
}, TYPOGRAPHY.fontStyles.light, function (_ref11) {
  var styles = _ref11.styles;
  return css(["background-color:", ";color:", ";border:", ";outline:", ";"], styles.day.hover.backgroundColor, styles.day.hover.color, styles.day.hover.backgroundColor, borderSize);
});
export var StandaloneRangeDatePicker = function StandaloneRangeDatePicker(_ref12) {
  var from = _ref12.from,
      to = _ref12.to,
      onChange = _ref12.onChange,
      styles = _ref12.styles,
      locale = _ref12.locale,
      months = _ref12.months,
      weekDays = _ref12.weekDays,
      weekdaysShort = _ref12.weekdaysShort,
      previousMonth = _ref12.previousMonth,
      disabledDays = _ref12.disabledDays,
      nextMonth = _ref12.nextMonth,
      title = _ref12.title,
      firstDayOfWeek = _ref12.firstDayOfWeek,
      initialMonth = _ref12.initialMonth,
      numberOfMonths = _ref12.numberOfMonths,
      datePickerProps = _objectWithoutProperties(_ref12, ["from", "to", "onChange", "styles", "locale", "months", "weekDays", "weekdaysShort", "previousMonth", "disabledDays", "nextMonth", "title", "firstDayOfWeek", "initialMonth", "numberOfMonths"]);

  var _useState = useState({
    from: from,
    to: to
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dateRange = _useState2[0],
      setDateRange = _useState2[1];

  useEffect(function () {
    onChange(dateRange);
  }, [dateRange]);

  var handleDayClick = function handleDayClick(day) {
    setDateRange(DateUtils.addDayToRange(day, dateRange));
  };

  return /*#__PURE__*/React.createElement(StyledDatePicker, {
    styles: styles
  }, /*#__PURE__*/React.createElement(DayPicker, _extends({
    className: "Selectable",
    numberOfMonths: numberOfMonths,
    selectedDays: [dateRange.from, dateRange],
    modifiers: {
      start: dateRange.from,
      end: dateRange.to
    },
    onDayClick: handleDayClick,
    disabledDays: disabledDays,
    navbarElement: /*#__PURE__*/React.createElement(Navbar, {
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
    initialMonth: initialMonth
  }, datePickerProps)));
};
StandaloneRangeDatePicker.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  months: PropTypes.array,
  previousMonth: PropTypes.string,
  nextMonth: PropTypes.string,
  styles: PropTypes.object
};
StandaloneRangeDatePicker.defaultProps = {
  from: undefined,
  to: undefined,
  onChange: function onChange() {},
  months: [],
  previousMonth: '',
  nextMonth: '',
  styles: {
    header: {
      backgroundColor: COLORS.background1,
      color: COLORS.font1,
      icon: {
        color: COLORS.font1
      }
    },
    borderColor: COLORS.line1,
    weekdaysColor: COLORS.font1,
    day: {
      focus: {
        color: COLORS.primary1
      },
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
        backgroundColor: COLORS.primary6,
        color: COLORS.primary1,
        borderColor: COLORS.primary4
      },
      selectedStartAndEnd: {
        backgroundColor: COLORS.primary1,
        color: COLORS.background1
      }
    }
  }
};