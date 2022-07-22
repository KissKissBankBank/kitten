import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
import fr from 'date-fns/locale/fr';
import enGB from 'date-fns/locale/en-GB';
const StyledDatePicker = styled.div.withConfig({
  displayName: "standalone-range-date-picker__StyledDatePicker",
  componentId: "sc-1w35zwa-0"
})(["--rdp-cell-size:", ";--rdp-accent-color:var(--color-primary-500);--rdp-background-color:var(--color-grey-000);--rdp-outline:", " solid var(--rdp-accent-color);--rdp-outline-selected:", " solid rgba(0,0,0,0.75);", " .rdp-caption_label.rdp-caption_label{", " font-size:", ";}.rdp-head_cell.rdp-head_cell{", " font-size:", ";text-transform:capitalize;}.rdp-cell.rdp-cell{font-size:", ";}.rdp-button.rdp-button{transition:color var(--transition),background-color var(--transition),border-color var(--transition);}.rdp-day_range_start.rdp-day_range_start,.rdp-day_range_end.rdp-day_range_end{", "}.rdp-day_range_middle.rdp-day_range_middle{background-color:var(--color-primary-100);color:var(--color-primary-700);}"], pxToRem(50), pxToRem(2), pxToRem(2), TYPOGRAPHY.fontStyles[400], TYPOGRAPHY.fontStyles[500], pxToRem(14), TYPOGRAPHY.fontStyles[500], pxToRem(12), pxToRem(12), TYPOGRAPHY.fontStyles[700]);
export const StandaloneRangeDatePicker = _ref => {
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
  const [dateRange, setDateRange] = useState({
    from,
    to
  });
  useEffect(() => {
    onChange(dateRange);
  }, [dateRange]);
  return /*#__PURE__*/React.createElement(StyledDatePicker, {
    styles: styles
  }, /*#__PURE__*/React.createElement(DayPicker, _extends({
    numberOfMonths: numberOfMonths,
    mode: "range",
    selected: dateRange,
    onSelect: range => {
      setDateRange(range);
    },
    disabled: disabledDays,
    locale: locale && locale.startsWith('en') ? enGB : fr,
    months: months,
    labels: {
      labelPrevious: previousMonth,
      labelNext: nextMonth
    },
    weekStartsOn: firstDayOfWeek,
    defaultMonth: defaultMonth || initialMonth
  }, datePickerProps)));
};
StandaloneRangeDatePicker.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  months: PropTypes.array,
  previousMonth: PropTypes.func,
  nextMonth: PropTypes.func,
  styles: PropTypes.object
};
StandaloneRangeDatePicker.defaultProps = {
  from: undefined,
  to: undefined,
  onChange: () => {},
  months: [],
  previousMonth: () => '',
  nextMonth: () => ''
};