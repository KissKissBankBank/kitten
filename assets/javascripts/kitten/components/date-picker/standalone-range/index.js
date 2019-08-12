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
const cellSize = pxToRem(49)
const tinyCellSize = pxToRem(38)
const dayPickerPadding = pxToRem(30)
const tinyDayPickerPadding = pxToRem(20)

const fontSize = css`
  font-size: ${TYPOGRAPHY.fontSize / TYPOGRAPHY.scaleMultiplier}rem;
`

const StyledDatePicker = styled.div`
  box-sizing: border-box;
  display: inline-block;

  .DayPickerInput-Overlay {
    box-shadow: none;
    margin-top: ${pxToRem(18)};
    outline: none;
    min-width: calc(7 * ${tinyCellSize} + 2 * ${tinyDayPickerPadding});

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
      backgroundColor: ${styles.header.backgroundColor}
      color: ${styles.header.color};
    `}

    & div {
      margin: 0;
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

  .DayPicker-Day--today {
    ${TYPOGRAPHY.fontStyles.regular}
    ${({ styles }) => css`
      color: ${styles.day.today.color};
    `}
  }

  .DayPicker-Day--selected {
    outline-offset: calc(-1 * ${borderSize} / 2);

    &:not(.DayPicker-Day--outside):not(.DayPicker-Day--disabled) {
      /* REGULAR STYLES */
      &, &:hover {
        ${({ styles }) => css`
          background-color: ${styles.day.selected.backgroundColor};
          color: ${styles.day.selected.color};
          border-color: ${styles.day.selected.borderColor};
          border-width: ${borderSize};
          outline: ${styles.day.selected.borderColor} solid ${borderSize};
          z-index: 15;
        `}
      }
      &:focus {
        ${({ styles }) => css`
          outline-color: ${styles.day.focus.color};
        `}
        outline-offset: 0;
        z-index: 25;
      }

      /* START AND END STYLES */
      &.DayPicker-Day--start, &.DayPicker-Day--end {
        &, &:hover {
          ${({ styles }) => css`
            background-color: ${styles.day.selectedStartAndEnd.backgroundColor};
            color: ${styles.day.selectedStartAndEnd.color};
            border: ${styles.day.selectedStartAndEnd.backgroundColor}
              ${borderSize};
            outline: ${styles.day.selectedStartAndEnd.backgroundColor} solid
              ${borderSize};
            position: relative;
            z-index: 20;
          `}
        }

        &:focus {
          ${({ styles }) => css`
            outline: ${styles.day.focus.color} solid calc(${borderSize} * 2);
          `}
          outline-offset: calc(${borderSize} / -2);
          z-index: 25;
        }
      }
    }
  }

  .DayPicker-Day--disabled {
    ${({ styles }) => css`
      color: ${styles.day.disabled.color};
    `}
    pointer-events: none;
  }

  .DayPicker-Month {
    margin: 0;

    &:first-of-type {
      margin-right: ${pxToRem(30)};
    }
  }

  .DayPicker {
    ${fontSize}
    ${TYPOGRAPHY.fontStyles.light}
    outline: none;

    ${({ styles }) => css`
      border: none;
    `}
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

  .DayPicker-Day {
    ${({ styles }) => css`
      border: solid ${styles.borderColor} ${borderSize};
    `}
    border-radius: 0;

    &.DayPicker-Day--outside {
      border: 0;
    }

    &:not(.DayPicker-Day--disabled):focus {
      ${({ styles }) => css`
        outline-color: ${styles.day.focus.color};
        outline-offset: 0;
      `}
      outline-style: solid;
      outline-width: ${borderSize};
      z-index: 25;
      position: relative;
    }
  }


`

export class SandaloneRangeDatePicker extends PureComponent {
  static propTypes = {
    numberOfMonths: PropTypes.number,
    locale: PropTypes.string,
    previousMonth: PropTypes.string,
    weekDays: PropTypes.array,
    months: PropTypes.array,
    navbarElement: PropTypes.node,
    disabledDays: PropTypes.array,
    title: PropTypes.string,
    dayPickerProps: PropTypes.shape({}),
    styles: PropTypes.object,
    cleanText: PropTypes.string,
    choiceText: PropTypes.string,
  }

  static defaultProps = {
    numberOfMonths: 2,
    locale: 'en',
    previousMonth: 'Previous month',
    nextMonth: 'Next month',
    weekDays: null,
    title: '',
    months: null,
    navbarElement: '',
    cleanText: '',
    choiceText: '',
    disabledDays: [
      {
        after: new Date(),
      },
    ],
    dayPickerProps: {},

    styles: {
      header: {
        backgroundColor: COLORS.background1,
        color: COLORS.font1,
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
      title,
      cleanText,
      choiceText,
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
          navbarElement={
            <Navbar title={title} iconColor={styles.header.icon.color} />
          }
          weekdaysLong={weekDays}
          weekdaysShort={weekDays && weekDays.map(str => str.substr(0, 2))}
          firstDayOfWeek={1}
          locale={locale}
          months={months}
          dayPickerProps={{
            ...datePickerProps,
            labels: { previousMonth, nextMonth },
          }}
        />
      </StyledDatePicker>
    )
  }
}
