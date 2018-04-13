import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import { KarlProject } from './project'
import { ProjectHeader } from './header'
import { StyleRoot } from 'radium'

const states = {
  started: 'Started',
  successful: 'Successful',
  failed: 'Failed',
}

storiesOf('ProjectPage', module)
  .addDecorator(withKnobs)
  .add('Page', () => <KarlProject />)
  .add('Header', () => (
    <StyleRoot>
      <ProjectHeader
        name={text('Title', 'Donnons pour Démos !')}
        categories={text(
          'Categories',
          'Musique, Santé & Éducation, Solidarité',
        )}
        image={text('Image', 'https://placeimg.com/850/480/any')}
        ownerImage={text('Owner image', 'https://placeimg.com/50/50/any')}
        ownerName={text('Owner name', 'Philharmonie de Paris')}
        ownerLocation={text('Owner location', 'Paris (75)')}
        state={select('State', states, 'started')}
        contributed={boolean('Contributed', false)}
      />
    </StyleRoot>
  ))
