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
  borderColor: 'var(--color-grey-400)',
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

export default {
  component: StandaloneRangeDatePicker,
  title: 'Forms/StandaloneRangeDatePicker',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="StandaloneRangeDatePicker" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container">
        {story()}
      </div>
    ),
  ],

  args: {
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
  },

  argTypes: {
    selectedDay: {
      name: 'selectedDay',
      control: 'date',
    },
    locale: {
      name: 'locale',
      control: { type: 'text' },
    },
    disabledDays: {
      name: 'disabledDays',
      control: 'object',
    },
    weekDays: {
      name: 'weekDays',
      control: 'object',
    },
    months: {
      name: 'months',
      control: 'object',
    },
    title: {
      name: 'title',
      control: 'text',
    },
    previousMonth: {
      name: 'previousMonth',
      description: 'data-label for the previous month button',
      control: 'text',
    },
    nextMonth: {
      name: 'nextMonth',
      description: 'data-label for the next month button',
      control: 'text',
    },
    styles: {
      name: 'styles',
      control: 'object',
    },
    firstDayOfWeek: {
      name: 'firstDayOfWeek',
      control: 'number',
    },
    numberOfMonths: {
      name: 'numberOfMonths',
      control: 'number',
    },
    initialMonth: {
      name: 'initialMonth',
      control: 'date',
    },
    from: {
      name: 'from',
      control: 'date',
    },
    to: {
      name: 'to',
      control: 'date',
    },
  },
}

export const Default = args => <StandaloneRangeDatePicker {...args} />
