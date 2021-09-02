import React from 'react'
import { StandaloneRangeDatePicker } from './index'
import COLORS from '../../../constants/colors-config'
import { action } from '@storybook/addon-actions'

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

// disable yesterday
const disabledDays = [new Date(today.setDate(today.getDate() - 1))]

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

export const Default = args => <StandaloneRangeDatePicker {...args} />

Default.decorators = [story => <div className="story-Container">{story()}</div>]

Default.args = {
  selectedDay: today,
  locale: 'fr',
  disabledDays: disabledDays,
  weekDays: weekDays,
  months: months,
  title: 'Sélectionnez la période souhaitée',
  previousMonth: 'Mois précédent',
  nextMonth: 'Mois suivant',
  styles: styles,
  firstDayOfWeek: 1,
  initialMonth: today,
  numberOfMonths: 2,
  onChange: action('onChange'),
}

Default.argTypes = {
  selectedDay: {
    name: 'selectedDay',
    control: { type: 'date' },
  },
  locale: {
    name: 'locale',
    control: { type: 'string' },
  },
  disabledDays: {
    name: 'disabledDays',
    control: { type: 'object' },
  },
  weekDays: {
    name: 'weekDays',
    control: { type: 'object' },
  },
  months: {
    name: 'months',
    control: { type: 'object' },
  },
  title: {
    name: 'title',
    control: { type: 'text' },
  },
  previousMonth: {
    name: 'previousMonth',
    description: 'data-label for the previous month button',
    control: { type: 'text' },
  },
  nextMonth: {
    name: 'nextMonth',
    description: 'data-label for the next month button',
    control: { type: 'text' },
  },
  styles: {
    name: 'styles',
    control: { type: 'object' },
  },
  firstDayOfWeek: {
    name: 'firstDayOfWeek',
    control: { type: 'number' },
  },
  numberOfMonths: {
    name: 'numberOfMonths',
    control: { type: 'number' },
  },
  initialMonth: {
    name: 'initialMonth',
    control: { type: 'date' },
  },
  from: {
    name: 'from',
    control: { type: 'date' },
  },
  to: {
    name: 'to',
    control: { type: 'date' },
  },
}
