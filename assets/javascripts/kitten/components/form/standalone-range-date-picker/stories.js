import React from 'react'
import { StandaloneRangeDatePicker } from './index'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'
import getMonth from 'date-fns/getMonth'
import fr from 'date-fns/locale/fr'

const today = new Date()

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
  title: 'Form/StandaloneRangeDatePicker',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="StandaloneRangeDatePicker"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],

  args: {
    selectedDay: today,
    locale: 'fr',
    disabledDays: disabledDays,
    weekDays: weekDays,
    months: months,
    title: 'Sélectionnez la période souhaitée',
    previousMonth: (month) => `Mois précédent : ${fr.localize.month(getMonth(month))}`,
    nextMonth: (month) => `Mois suivant : ${fr.localize.month(getMonth(month))}`,
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
      control: 'function',
    },
    nextMonth: {
      name: 'nextMonth',
      description: 'data-label for the next month button',
      control: 'function',
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
