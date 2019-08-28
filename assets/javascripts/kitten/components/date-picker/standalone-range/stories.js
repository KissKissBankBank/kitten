import React, { Component } from 'react'
import { StandaloneRangeDatePicker } from './index'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  date,
  select,
  text,
  object,
  boolean,
  array,
  number,
} from '@storybook/addon-knobs'
import { Container } from '../../../components/grid/container'
import { Marger } from '../../../components/layout/marger'
import COLORS from '../../../constants/colors-config'
import { withInfo } from '@storybook/addon-info'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

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

const info = {
  text: `
  # StandaloneRangeDatePicker
    &nbsp;

    ## Import
    ~~~js
    import { StandaloneRangeDatePicker } from '@kisskissbankbank/kitten/src/components/date-picker/standalone-range'
    ~~~

    ## Usage
    ~~~js
    <StandaloneRangeDatePicker
      disabledDays: [
        {
          after: new Date(),
        },
      ],
      selectedDay={new Date()}
      locale="fr"
      disabledDays={[new Date(2019, 7, 16), new Date(2019, 7, 18)]}
      weekDays={[
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
      ]}
      months={[
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
      ]}
      title="Select a period"
      previousMonth="Previous month"
      nextMonth="Next month"
      styles={{
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
      }}
      firstDayOfWeek={1}
    />
    ~~~
  `,
}

storiesOf('Form/DatePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add(
    'Standalone Range DatePicker',
    () => {
      return (
        <StoryContainer>
          <StandaloneRangeDatePicker
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
            firstDayOfWeek={number('First day of the week', 1)}
            initialMonth={new Date('2019-01-01T03:24:00')}
            numberOfMonths={number('Number of months', 2)}
            navbarElement={boolean('NavBar component', false)}
          />
        </StoryContainer>
      )
    },
    { info },
  )
