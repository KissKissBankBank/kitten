import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'
import styled, { css } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
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
      backgroundColor: ${styles.header.backgroundColor}
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

  .DayPicker-Day--selected {
    &:not(.DayPicker-Day--start) {
      &:not(.DayPicker-Day--end) {
        &:not(.DayPicker-Day--outside) {
          ${({ styles }) => css`
            background-color: ${styles.day.selectedStartAndEnd.backgroundColor};
            color: ${styles.day.selectedStartAndEnd.color};
            border-color: ${styles.day.selectedStartAndEnd.borderColor};
            border-width: ${borderSize};
          `}
          &:hover {
            ${({ styles }) => css`
              background-color: ${styles.day.selectedStartAndEnd
                .backgroundColor};
              color: ${styles.day.selectedStartAndEnd.color};
              border-color: ${styles.day.selectedStartAndEnd.borderColor};
              border-width: ${borderSize};
            `}
          }
        }
      }
    }
  }

  .DayPicker-Day--disabled {
    ${({ styles }) => css`
      color: ${styles.day.disabled.color};
      cursor: not-allowed;
    `}
  }

  .DayPicker-Month {
    &:first-child {
      margin-right: ${pxToRem(30)};
    }
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
`

export class DatePicker extends PureComponent {
  static propTypes = {
    numberOfMonths: PropTypes.number,
    locale: PropTypes.string,
    previousMonth: PropTypes.string,
    weekDays: PropTypes.array,
    months: PropTypes.array,
    navbarElement: PropTypes.node,
    disabledDays: PropTypes.array,
    datePickerProps: PropTypes.shape({}),
    styles: PropTypes.object,
  }

  static defaultProps = {
    numberOfMonths: 2,
    locale: 'en',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    weekDays: null,
    months: null,
    navbarElement: '',
    disabledDays: [
      {
        after: new Date(),
      },
    ],
    datePickerProps: {},

    styles: {
      header: {
        backgroundColor: COLORS.background1,
        color: COLORS.font1,
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
        selectedStartAndEnd: {
          backgroundColor: COLORS.primary6,
          color: COLORS.primary1,
          borderColor: COLORS.primary4,
        },
      },
    },
  }

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    }
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }
  handleResetClick() {
    this.setState(this.getInitialState())
  }
  render() {
    const {
      styles,
      locale,
      months,
      weekDays,
      weekdaysShort,
      previousMonth,
      disabledDays,
      nextMonth,
      ...datePickerProps
    } = this.props

    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <StyledDatePicker styles={styles}>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          disabledDays={disabledDays}
          dayPickerProps={{
            ...datePickerProps,
            locale: locale,
            months: months,
            weekdaysLong: weekDays,
            weekdaysShort: weekDays && weekDays.map(str => str.substr(0, 2)),
            firstDayOfWeek: 1,
            labels: { previousMonth, nextMonth },
            navbarElement: <Navbar iconColor={styles.header.icon.color} />,
          }}
        />
      </StyledDatePicker>
    )
  }
}
