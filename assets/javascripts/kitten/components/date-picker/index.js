import React, { Component } from 'react'
// Doc available here: http://react-day-picker.js.org/docs/getting-started
import DayPickerInput from 'react-day-picker/DayPickerInput'
import styled, { css } from 'styled-components'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'
import { TextInputWithUnit } from '../../components/form/text-input-with-unit'
import { pxToRem } from '../../helpers/utils/typography'
import {
  WEEKDAYS_SHORT,
  MONTHS,
  WEEKDAYS_LONG,
  FIRST_DAY_OF_WEEK,
  LABELS,
  FORMAT,
} from './date-picker-config'
import { ScreenConfig } from '../../constants/screen-config'
import { Navbar } from './components/navbar'

const borderSize = pxToRem(2)
const cellSize = pxToRem(50)
const tinyCellSize = pxToRem(40)
const dayPickerPadding = pxToRem(30)
const tinyDayPickerPadding = pxToRem(20)

const fontSize = css`
  font-size: ${TYPOGRAPHY.fontSize / TYPOGRAPHY.scaleMultiplier}rem;
`

const StyledDatePicker = styled.div`
  box-sizing: border-box;

  .DayPickerInput-Overlay {
    box-shadow: none;
    margin-top: 18px;
    outline: none;
    min-width: calc(7 * ${tinyCellSize} + 2 * ${tinyDayPickerPadding});

    @media (min-width: ${ScreenConfig.S.min}px) {
      min-width: calc(7 * ${cellSize} + 2 * ${dayPickerPadding});
    }

    /* Arrow's top header */
    &:before {
      content: '';
      width: 0;
      height: 0;
      border-left: ${pxToRem(9)} solid transparent;
      border-right: ${pxToRem(9)} solid transparent;
      ${({ styles }) => css`
        border-bottom: ${pxToRem(8)} solid ${styles.header.backgroundColor};
      `}
      position: absolute;
      top: -${pxToRem(8)};
      left: ${pxToRem(15)};
    }
  }
  /* Header */
  .DayPicker-Caption {
    text-align: center;
    height: ${pxToRem(70)};
    margin: -${pxToRem(2)} -${pxToRem(22)} 0;
    overflow: hidden;

    @media (min-width: ${ScreenConfig.S.min}px) {
      margin: -${pxToRem(2)} -${pxToRem(32)} 0;
    }

    ${({ styles }) => css`
      background-color ${styles.header.backgroundColor};
      color: ${styles.header.color};
    `}

    & div {
      padding: ${pxToRem(23)} 0;
      margin: 0 ${pxToRem(63)};
      ${fontSize}
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
    ${fontSize}
    outline: none;

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

    &.DayPicker-Day--outside {
      border: 0;
    }
  }

  .DayPicker-Day--today {
    ${TYPOGRAPHY.fontStyles.regular}
    ${({ styles }) => css`
      color: ${styles.day.today.color};
    `}
  }

  .DayPicker-Day--selected {
    &:not(.DayPicker-Day--disabled) {
      &:not(.DayPicker-Day--outside) {
        ${({ styles }) => css`
          background-color: ${styles.day.selected.backgroundColor};
          color: ${styles.day.selected.color};
          border: double ${styles.day.selected.backgroundColor} ${borderSize};
        `}
        &:hover {
          ${({ styles }) => css`
            background-color: ${styles.day.selected.backgroundColor};
            color: ${styles.day.selected.color};
            border: double ${styles.day.selected.backgroundColor} ${borderSize};
          `}
        }
      }
    }
  }

  .DayPicker-Day--disabled {
    ${({ styles }) => css`
      color: ${styles.day.disabled.color};
    `}
  }

  .DayPicker-Month {
    margin: 0;
  }

  .DayPicker-wrapper {
    padding: 0 ${tinyDayPickerPadding} ${tinyDayPickerPadding}
      ${tinyDayPickerPadding};
    outline: none;

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: 0 ${dayPickerPadding} ${dayPickerPadding} ${dayPickerPadding};
    }
  }

  .DayPicker {
    ${fontSize}
    ${TYPOGRAPHY.fontStyles.light}
    outline: none;

    ${({ styles }) => css`
      border: solid ${styles.borderColor} ${borderSize};
    `}
    /* Hovered selectable day*/
    &:not(.DayPicker--interactionDisabled) {
      .DayPicker-Day {
        &:not(.DayPicker-Day--disabled) {
          &:not(.DayPicker-Day--selected) {
            &:not(.DayPicker-Day--outside) {
              &:hover {
                ${TYPOGRAPHY.fontStyles.light}
                ${({ styles }) => css`
                  background-color: ${styles.day.hover.backgroundColor};
                  color: ${styles.day.hover.color};
                  border: double ${styles.day.hover.backgroundColor}
                    ${borderSize};
                `}
              }
            }
          }
        }
      }
    }
  }
`

export class DatePicker extends Component {
  static defaultProps = {
    locale: 'en',
    inputIcon: '📅',
    datePickerProps: {
      disabledDays: [
        {
          after: new Date(),
        },
      ],
    },
    styles: {
      header: {
        backgroundColor: COLORS.font1,
        color: COLORS.background1,
        icon: {
          color: COLORS.background1,
        },
      },
      borderColor: COLORS.line1,
      weekdaysColor: COLORS.font1,
      day: {
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
          backgroundColor: COLORS.primary1,
          color: COLORS.background1,
        },
      },
    },
    textInputProps: {},
  }

  state = {
    selectedDay: new Date(),
    focused: null,
    locale: this.props.locale || 'en',
  }

  parseDate = (str, format, locale) => {
    let day, month, year

    switch (locale) {
      case 'fr':
        ;[day, month, year] = str.split('/')

        return new Date(year, month - 1, day)
      default:
        ;[month, day, year] = str.split('/')

        return new Date(year, month - 1, day)
    }
  }

  formatDate = (date, format, locale) => date.toLocaleDateString(locale)

  render() {
    const {
      locale,
      inputIcon,
      datePickerProps,
      styles,
      textInputProps,
      children,
    } = this.props

    return (
      <StyledDatePicker styles={styles}>
        <DayPickerInput
          formatDate={this.formatDate}
          placeholder={FORMAT[locale]}
          format={FORMAT[locale]}
          parseDate={this.parseDate}
          dayPickerProps={{
            ...datePickerProps,
            locale: locale,
            months: MONTHS[locale],
            weekdaysLong: WEEKDAYS_LONG[locale],
            weekdaysShort: WEEKDAYS_SHORT[locale],
            firstDayOfWeek: FIRST_DAY_OF_WEEK[locale],
            labels: LABELS[locale],
            navbarElement: <Navbar iconColor={styles.header.icon.color} />,
          }}
          component={props => {
            if (children) {
              return React.Children.map(children, child =>
                React.cloneElement(child, props),
              )
            }

            return (
              <TextInputWithUnit
                {...textInputProps}
                type="text"
                unit={inputIcon}
                autocomplete="off"
                {...props}
              />
            )
          }}
        />
      </StyledDatePicker>
    )
  }
}
