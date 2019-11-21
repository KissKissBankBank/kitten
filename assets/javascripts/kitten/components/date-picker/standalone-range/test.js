import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { StandaloneRangeDatePicker } from './index'
import COLORS from '../../../constants/colors-config'

const testDate = new Date('2019-01-01T03:24:00')

const styles = {
  header: {
    backgroundColor: '#fff',
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
      color: '#fff',
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
      color: '#fff',
    },
  },
}

const weekDays = [
  'Dimanche',
  'Lundi',
  'Mardi',
  'Mercredi',
  'Jeudi',
  'Vendredi',
  'Samedi',
]

const disabledDays = [new Date(2019, 7, 16)]

const months = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

describe('<StandaloneRangeDatePicker />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <StandaloneRangeDatePicker
            selectedDay={testDate}
            locale="fr"
            disabledDays={disabledDays}
            weekDays={weekDays}
            months={months}
            title="Sélectionnez la période souhaitée"
            previousMonth="Mois précédent"
            nextMonth="Mois suivant"
            styles={styles}
            initialMonth={new Date('2019-01-01T03:24:00')}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
