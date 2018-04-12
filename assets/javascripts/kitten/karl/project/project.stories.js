import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { KarlProject } from './project'

storiesOf('ProjectPage', module)
  .addDecorator(withKnobs)
  .add('by default', () => <KarlProject />)
