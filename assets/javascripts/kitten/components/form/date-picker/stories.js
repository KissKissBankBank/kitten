import React, { Component } from 'react'
import { DatePicker } from './index'
import { date, text, object, array } from '@storybook/addon-knobs'
import { Container, Marger, COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

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
    backgroundColor: COLORS.font1,
    color: '#fff',
    icon: {
      color: '#fff',
    },
  },
  borderColor: COLORS.line1,
  weekdaysColor: COLORS.font1,
  day: {
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

class CustomInput extends Component {
  render() {
    return <input type="text" autoComplete="off" {...this.props} />
  }
}

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={['index.js', 'components/navbar.js']}
          importString="DatePicker"
        />
      ),
    },
  },
}

export const WithTextInputWithUnit = () => {
  return (
    <StoryContainer>
      <DatePicker
        selectedDay={date('default selected Date', today)}
        locale="fr"
        weekDays={array('Week days', weekDays)}
        months={array('Months', months)}
        previousMonth={text('Aria-label for previous month', 'Mois suivant')}
        nextMonth={text('Aria-label for next month', 'Mois précédent')}
        styles={object('Styles', styles)}
      />
    </StoryContainer>
  )
}

export const WithCustomInput = () => {
  return (
    <StoryContainer>
      <DatePicker
        selectedDay={date('default selected Date', today)}
        styles={object('Styles', styles)}
      >
        {CustomInput}
      </DatePicker>
    </StoryContainer>
  )
}
