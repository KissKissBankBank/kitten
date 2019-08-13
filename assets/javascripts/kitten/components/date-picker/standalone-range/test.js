import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { SandaloneRangeDatePicker } from './index'
import COLORS from '../../../constants/colors-config'

const today = new Date()

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

describe('<SandaloneRangeDatePicker />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SandaloneRangeDatePicker
            selectedDay={today}
            locale="fr"
            disabledDays={disabledDays}
            weekDays={weekDays}
            months={months}
            title="Sélectionnez la période souhaitée"
            previousMonth="Mois précédent"
            nextMonth="Mois suivant"
            styles={styles}
            cleanText="Effacer"
            choiceText="Appliquer"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})
