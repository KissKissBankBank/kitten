import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import styled, { css } from 'styled-components'
import COLORS from '../../constants/colors-config'
import TYPOGRAPHY from '../../constants/typography-config'
import { TextInputWithUnit } from '../../components/form/text-input-with-unit'
import {
  WEEKDAYS_SHORT,
  MONTHS,
  WEEKDAYS_LONG,
  FIRST_DAY_OF_WEEK,
  LABELS,
} from './date-picker-config'
import { Navbar } from './components/navbar'

const borderSize = '2px'
const cellSize = '50px'
const horizontalDatepickerMargin = '30px'
const totalDays = 7

const solidBorder = css`
  border: solid ${COLORS.line1} ${borderSize};
`

const doubleBorder = css`
  border: double ${COLORS.line1} ${borderSize};
`

const fontSize = css`
  font-size: ${TYPOGRAPHY.fontSize / TYPOGRAPHY.scaleMultiplier}rem;
`

const StyledDatePicker = styled.div`
  box-sizing: border-box;

  .DayPickerInput-Overlay {
    box-shadow: none;
    margin-top: 18px;
    outline: none;

    &:before {
      content: '';
      width: 0;
      height: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-bottom: 8px solid ${COLORS.font1};
      position: absolute;
      top: -8px;
      left: 15px;
    }
  }

  .DayPicker-Caption {
    background-color: ${COLORS.font1};
    color: #fff;
    text-align: center;
    height: 70px;
    ${fontSize}
    margin: -2px -32px 0;
    overflow: hidden;

    & div {
      padding: 23px 0;
      margin: 0 63px;
    }
  }

  .DayPicker-Weekday {
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.font1};
  }

  .DayPicker-Weekday,
  .DayPicker-Day {
    padding: 0;
    width: ${cellSize};
    height: ${cellSize};
    vertical-align: middle;
    box-sizing: border-box;
    ${fontSize}
    outline: none;
  }

  .DayPicker-Day {
    ${solidBorder}
    border-radius: 0;

    &.DayPicker-Day--outside {
      border: 0;
    }
  }

  .DayPicker-Day--today {
    ${TYPOGRAPHY.fontStyles.regular}
    color: ${COLORS.primary1};
  }

  .DayPicker-Day--selected {
    &:not(.DayPicker-Day--disabled) {
      &:not(.DayPicker-Day--outside) {
        background-color: ${COLORS.primary1};
        border: double ${COLORS.primary1} ${borderSize};

        &:hover {
          background-color: ${COLORS.primary1};
          border: double ${COLORS.primary1} ${borderSize};
        }
      }
    }
  }

  .DayPicker-Month {
    margin: 0;
  }

  .DayPicker-wrapper {
    padding: 0 30px 34px 30px;
    outline: none;
  }

  .DayPicker {
    ${fontSize}
    ${TYPOGRAPHY.fontStyles.light}
    ${solidBorder}
    outline: none;

    &:not(.DayPicker--interactionDisabled) {
      .DayPicker-Day {
        &:not(.DayPicker-Day--disabled) {
          &:not(.DayPicker-Day--selected) {
            &:not(.DayPicker-Day--outside) {
              &:hover {
                background-color: ${COLORS.primary1};
                color: #fff;
                border: double ${COLORS.primary1} ${borderSize};
                ${TYPOGRAPHY.fontStyles.light}
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
    locale: 'fr',
  }

  state = {
    selectedDay: new Date(),
    focused: null,
    locale: this.props.locale || 'en',
  }

  render() {
    const { locale } = this.props

    return (
      <StyledDatePicker>
        <DayPickerInput
          formatDate={date => date.toLocaleDateString('fr-FR')}
          placeholder="jj/mm/aaaa"
          dayPickerProps={{
            locale: locale,
            months: MONTHS[locale],
            weekdaysLong: WEEKDAYS_LONG[locale],
            weekdaysShort: WEEKDAYS_SHORT[locale],
            firstDayOfWeek: FIRST_DAY_OF_WEEK[locale],
            labels: LABELS[locale],
            disabledDays: [
              {
                after: new Date(),
              },
            ],
            navbarElement: <Navbar />,
          }}
          component={props => {
            return <TextInputWithUnit type="text" unit="📅" {...props} />
          }}
        />
      </StyledDatePicker>
    )
  }
}
