import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DayPicker } from 'react-day-picker'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../constants/typography-config'
import fr from 'date-fns/locale/fr'
import enGB from 'date-fns/locale/en-GB'
import 'react-day-picker/dist/style.css'

const StyledDatePicker = styled.div`
  --rdp-cell-size: ${pxToRem(50)};
  --rdp-accent-color: var(--color-primary-500);
  --rdp-background-color: var(--color-grey-000);
  /* Outline border for focused elements */
  --rdp-outline: ${pxToRem(2)} solid var(--rdp-accent-color);
  /* Outline border for focused and selected elements */
  --rdp-outline-selected: ${pxToRem(2)} solid rgba(0, 0, 0, 0.75);

  ${TYPOGRAPHY.fontStyles[400]}

  .rdp-caption_label {
    ${TYPOGRAPHY.fontStyles[500]}
    font-size: ${pxToRem(14)};
  }

  .rdp-head_cell {
    ${TYPOGRAPHY.fontStyles[500]}
    font-size: ${pxToRem(12)};
    text-transform: capitalize;
  }

  .rdp-cell {
    font-size: ${pxToRem(12)};
  }

  .rdp-button {
    transition: color var(--transition), background-color var(--transition), border-color var(--transition);
  }

  .rdp-day_range_start,
  .rdp-day_range_end {
    ${TYPOGRAPHY.fontStyles[700]}
  }

  .rdp-day_range_middle {
    background-color: var(--color-primary-100);
    color: var(--color-primary-700);
  }

`

export const StandaloneRangeDatePicker = ({
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
}) => {
  const [dateRange, setDateRange] = useState({ from, to })

  useEffect(() => {
    onChange(dateRange)
  }, [dateRange])

  return (
    <StyledDatePicker styles={styles}>
      <DayPicker
        numberOfMonths={numberOfMonths}
        mode="range"
        selected={dateRange}
        onSelect={range => {
          setDateRange(range)
        }}
        disabled={disabledDays}
        locale={locale && locale.startsWith('en') ? enGB : fr}
        months={months}
        labels={{ labelPrevious: previousMonth, labelNext: nextMonth }}
        weekStartsOn={firstDayOfWeek}
        defaultMonth={defaultMonth || initialMonth}
        {...datePickerProps}
      />
    </StyledDatePicker>
  )
}

StandaloneRangeDatePicker.propTypes = {
  from: PropTypes.instanceOf(Date),
  to: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
  months: PropTypes.array,
  previousMonth: PropTypes.func,
  nextMonth: PropTypes.func,
  styles: PropTypes.object,
}

StandaloneRangeDatePicker.defaultProps = {
  from: undefined,
  to: undefined,
  onChange: () => {},
  months: [],
  previousMonth: () => '',
  nextMonth: () => '',
}
