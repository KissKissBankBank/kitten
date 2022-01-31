import React from 'react'
import { DatePicker } from './index'
import { COLORS } from '../../..'
import { DocsPage } from 'storybook/docs-page'

const styles = {
  header: {
    backgroundColor: COLORS.font1,
    color: '#fff',
    icon: {
      color: '#fff',
    },
  },
  borderColor: 'var(--color-grey-400)',
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
      color: 'var(--color-grey-400)',
    },
    selected: {
      backgroundColor: COLORS.primary1,
      color: '#fff',
    },
  },
}

const CustomInput = props => {
  return <input type="text" autoComplete="off" {...props} />
}

export default {
  title: 'Forms/DatePicker',
  component: DatePicker,
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    selectedDay: new Date(),
    locale: 'fr',
    weekDays: [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi',
    ],
    months: [
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
    ],
    previousMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    styles: styles,
    datePickerProps: null,
  },
  argTypes: {
    selectedDay: {
      name: 'selectedDay',
    },
    locale: {
      name: 'locale',
    },
    weekDays: {
      name: 'weekDays',
    },
    months: {
      name: 'months',
    },
    previousMonth: {
      name: 'previousMonth',
      description: 'Aria-label for previous month',
    },
    nextMonth: {
      name: 'nextMonth',
      description: 'Aria-label for next month',
    },
    styles: {
      name: 'styles',
      control: {
        type: 'object',
      },
    },
    datePickerProps: {
      name: 'datePickerProps',
      control: {
        type: 'object',
      },
    },
  },
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

export const WithTextInputWithUnit = args => <DatePicker {...args} />

export const WithCustomInput = args => (
  <DatePicker {...args}>{CustomInput}</DatePicker>
)
