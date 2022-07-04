import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {DayPicker} from 'react-day-picker'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
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
  previousMonth: PropTypes.string,
  nextMonth: PropTypes.string,
  styles: PropTypes.object,
}

StandaloneRangeDatePicker.defaultProps = {
  from: undefined,
  to: undefined,
  onChange: () => {},
  months: [],
  previousMonth: () => '',
  nextMonth: () => '',
  styles: {
    header: {
      backgroundColor: COLORS.background1,
      color: COLORS.font1,
      icon: {
        color: COLORS.font1,
      },
    },
    borderColor: 'var(--color-grey-400)',
    weekdaysColor: COLORS.font1,
    day: {
      focus: {
        color: COLORS.primary1,
      },
      hover: {
        backgroundColor: COLORS.primary1,
        color: COLORS.background1,
      },
      today: {
        color: COLORS.primary1,
      },
      disabled: {
        color: COLORS.line2,
      },
      selected: {
        backgroundColor: COLORS.primary6,
        color: COLORS.primary1,
        borderColor: COLORS.primary4,
      },
      selectedStartAndEnd: {
        backgroundColor: COLORS.primary1,
        color: COLORS.background1,
      },
    },
  },
}
