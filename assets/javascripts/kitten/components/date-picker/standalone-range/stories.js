import React, { Component } from 'react'
import { SandaloneRangeDatePicker } from './index'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  date,
  select,
  text,
  object,
  boolean,
  array,
} from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import COLORS from '../../../constants/colors-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5" style={{ width: 715 }}>
      {children}
    </Marger>
  </Container>
)

const today = new Date()

const styles = {
  header: {
    backgroundColor: COLORS.font1,
    color: '#fff',
    icon: {
      color: '#fff',
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

storiesOf('Form/DatePicker', module)
  .addDecorator(withKnobs)
  .add('Standalone Range DatePicker', () => {
    return (
      <StoryContainer>
        <SandaloneRangeDatePicker
          selectedDay={date('default selected Date', today)}
          locale="fr"
          disabledDays={array('Disabled days', disabledDays)}
          weekDays={array('Week days', weekDays)}
          months={array('Months', months)}
          title={text('Title', 'Sélectionnez la période souhaitée')}
          previousMonth={text(
            'Aria-label for previous month',
            'Mois précédent',
          )}
          nextMonth={text('Aria-label for next month', 'Mois suivant')}
          styles={object('Styles', styles)}
          cleanText={text('Clean text', 'Effacer')}
          choiceText={text('Choice text', 'Appliquer')}
        />
      </StoryContainer>
    )
  })
