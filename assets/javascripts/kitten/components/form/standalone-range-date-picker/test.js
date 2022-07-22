import React from 'react'
import renderer from 'react-test-renderer'
import { StandaloneRangeDatePicker } from './index'

const testDate = new Date('2019-01-01T03:24:00')

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
            previousMonth={() => 'Mois précédent'}
            nextMonth={() => 'Mois suivant'}
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
