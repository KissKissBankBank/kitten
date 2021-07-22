import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import styled, { css } from 'styled-components'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { Navbar } from './components/navbar'

const borderSize = pxToRem(2)
const cellSize = pxToRem(49)
const tinyCellSize = pxToRem(38)
const dayPickerPadding = pxToRem(30)
const tinyDayPickerPadding = pxToRem(20)

const StyledDatePicker = styled.div`
  display: inline-block;
  box-sizing: border-box;

  .DayPickerInput-Overlay {
    min-width: calc(7 * ${tinyCellSize} + 2 * ${tinyDayPickerPadding});
    margin-top: ${pxToRem(18)};
    box-shadow: none;

    @media (min-width: ${ScreenConfig.S.min}px) {
      min-width: calc(7 * ${cellSize} + 2 * ${dayPickerPadding});
    }
  }

  /* Header */
  .DayPicker-Caption {
    text-align: center;
    height: ${cellSize};
    line-height: ${cellSize};
    margin: 0;
    padding: 0;
    overflow: hidden;

    ${({ styles }) => css`
      background-color: ${styles.header.backgroundColor};
      color: ${styles.header.color};
    `}

    & div {
      margin: 0;
      font-size: ${stepToRem(-1)};
    }
  }

  /* DayPicker */
  .DayPicker {
    font-size: ${stepToRem(-1)};
    ${TYPOGRAPHY.fontStyles.light}
    border: none;

    .DayPicker-Month {
      margin: 0;

      @media (min-width: ${ScreenConfig.M.min}px) {
        &:first-of-type {
          margin-right: ${pxToRem(30)};
        }
      }
    }

    .DayPicker-Weekday {
      ${TYPOGRAPHY.fontStyles.regular}

      ${({ styles }) => css`
        color: ${styles.weekdaysColor};
      `}
    }

    .DayPicker-Weekday,
    .DayPicker-Day {
      padding: 0;
      width: ${tinyCellSize};
      height: ${tinyCellSize};
      vertical-align: middle;
      box-sizing: border-box;
      font-size: ${stepToRem(-2)};

      @media (min-width: ${ScreenConfig.S.min}px) {
        width: ${cellSize};
        height: ${cellSize};
      }
    }

    .DayPicker-Day {
      ${({ styles }) => css`
        border: solid ${styles.borderColor} ${borderSize};
      `}
      border-radius: 0;

      &.DayPicker-Day--today {
        ${TYPOGRAPHY.fontStyles.regular}
        ${({ styles }) => css`
          color: ${styles.day.today.color};
        `}
      }

      &.DayPicker-Day--selected {
        outline-offset: calc(-1 * ${borderSize} / 2);

        &:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled) {
          /* REGULAR STYLES */
          &,
          &:hover {
            ${({ styles }) => css`
              z-index: 15;
              background-color: ${styles.day.selected.backgroundColor};
              color: ${styles.day.selected.color};
              border-color: ${styles.day.selected.borderColor};
              border-width: ${borderSize};
              outline: ${styles.day.selected.borderColor} solid ${borderSize};
            `}
          }
          &:focus {
            z-index: 25;
            ${({ styles }) => css`
              outline-color: ${styles.day.focus.color};
            `}
            outline-offset: 0;
          }
          &:focus:not(:focus-visible) {
            outline-color: transparent;
          }
          &:focus-visible {
            ${({ styles }) => css`
              outline-color: ${styles.day.focus.color};
            `}
          }

          /* START AND END STYLES */
          &.DayPicker-Day--start,
          &.DayPicker-Day--end {
            &,
            &:hover {
              ${({ styles }) => css`
                border: ${styles.day.selectedStartAndEnd.backgroundColor}
                  ${borderSize};
                position: relative;
                z-index: 20;
                background-color: ${styles.day.selectedStartAndEnd
                  .backgroundColor};
                color: ${styles.day.selectedStartAndEnd.color};
                outline: ${styles.day.selectedStartAndEnd.backgroundColor} solid
                  ${borderSize};
              `}
            }

            &:focus {
              ${({ styles }) => css`
                outline: ${styles.day.focus.color} solid calc(${borderSize} * 2);
              `}
              outline-offset: calc(${borderSize} / -2);
              z-index: 25;
            }
            &:focus:not(:focus-visible) {
              outline-color: transparent;
            }
            &:focus-visible {
              ${({ styles }) => css`
                outline-color: ${styles.day.focus.color};
              `}
            }
          }
        }
      }

      &.DayPicker-Day--disabled {
        ${({ styles }) => css`
          color: ${styles.day.disabled.color};
        `}
        pointer-events: none;
      }

      &.DayPicker-Day--outside {
        border: 0;
      }

      &:not(.DayPicker-Day--disabled):focus {
        z-index: 25;
        position: relative;
        outline-style: solid;
        outline-width: ${borderSize};
        ${({ styles }) => css`
          outline-color: ${styles.day.focus.color};
          outline-offset: 0;
        `}
      }
    }

    /* Hovered selectable day*/
    &:not(.DayPicker--interactionDisabled)
      .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
      ${TYPOGRAPHY.fontStyles.light}
      ${({ styles }) => css`
        background-color: ${styles.day.hover.backgroundColor};
        color: ${styles.day.hover.color};
        border: ${styles.day.hover.backgroundColor};
        outline: ${borderSize};
      `}
    }
  }
`

export const StandaloneRangeDatePicker = ({
  from,
  to,
  onChange,
  styles,
  locale,
  months,
  weekDays,
  weekdaysShort,
  previousMonth,
  disabledDays,
  nextMonth,
  title,
  firstDayOfWeek,
  initialMonth,
  numberOfMonths,
  ...datePickerProps
}) => {
  const [dateRange, setDateRange] = useState({ from, to })

  useEffect(() => {
    onChange(dateRange)
  }, [dateRange])

  const handleDayClick = day => {
    setDateRange(DateUtils.addDayToRange(day, dateRange))
  }

  return (
    <StyledDatePicker styles={styles}>
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[dateRange.from, dateRange]}
        modifiers={{ start: dateRange.from, end: dateRange.to }}
        onDayClick={handleDayClick}
        disabledDays={disabledDays}
        navbarElement={
          <Navbar
            title={title}
            iconColor={styles.header.icon.color}
            months={months}
          />
        }
        weekdaysLong={weekDays}
        weekdaysShort={weekDays && weekDays.map(str => str.substr(0, 2))}
        locale={locale}
        months={months}
        labels={{ previousMonth, nextMonth }}
        firstDayOfWeek={firstDayOfWeek}
        initialMonth={initialMonth}
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
  previousMonth: '',
  nextMonth: '',
  styles: {
    header: {
      backgroundColor: COLORS.background1,
      color: COLORS.font1,
      icon: {
        color: COLORS.font1,
      },
    },
    borderColor: COLORS.line1,
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
