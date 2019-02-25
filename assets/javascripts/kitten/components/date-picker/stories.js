import React from 'react'
import { DatePicker } from './index'
import { storiesOf } from '@storybook/react'
import { withKnobs, date, select, text, object } from '@storybook/addon-knobs'
import { Container } from '../../components/grid/container'
import { Marger } from '../../components/layout/marger'
import COLORS from '../../constants/colors-config'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

const today = new Date()

storiesOf('Form/DatePicker', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <DatePicker
          selectedDay={date('default selected Date', today)}
          locale={select(
            'Default language',
            { french: 'fr', english: 'en' },
            'fr',
          )}
          inputIcon={text('Icon', '📅')}
          styles={object('Styles', {
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
          })}
        />
      </StoryContainer>
    )
  })
