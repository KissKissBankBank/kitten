import React from 'react'
import { storiesOf } from '@storybook/react'
import { checkA11y } from '@storybook/addon-a11y'
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs/react'
import { KarlProject } from './project'
import { ProjectHero } from './hero'
import { ProjectInformations } from './informations'
import { ProjectNavigation } from './navigation'
import { ProjectDescription } from './description'
import { StyleRoot } from 'radium'

const states = {
  started: 'Started',
  successful: 'Successful',
  failed: 'Failed',
}

const navigationItems = [
  { key: 'key1', text: 'Contreparties', href: '#' },
  { key: 'key2', text: 'Description', href: '#', selected: true },
  { key: 'key3', text: 'Actualités', href: '#', badge: 2 },
  { key: 'key4', text: 'Commentaires', href: '#' },
  { key: 'key5', text: 'Contributeurs', href: '#' },
]

storiesOf('ProjectPage', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('Page', () => <KarlProject />)
  .add('Hero', () => (
    <StyleRoot>
      <ProjectHero
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
  .add('Informations', () => (
    <StyleRoot>
      <ProjectInformations
        state={select('State', states, 'started')}
        info1={text('Info 1', '518')}
        info1Text={text('Info 1 - Text', 'Contributeurs')}
        info2={text('Info 2', '8 jours')}
        info2Text={text('Info 2 - Text', 'Restants')}
        info3={text('Info 3', '70 658 €')}
        info3Text={text('Info 3 - Text', 'Sur 150 000 €')}
        progress={text('Progress', '72')}
        description={text(
          'Description',
          'Initié par la Philharmonie de Paris et parrainé par Lilian Thuram, le projet Démos (Dispositif d’éducation musicale et orchestrale à vocation sociale) s’adresse depuis 2010 à des jeunes de 7 à 12 ans qui n’ont jamais eu l’occasion d’apprendre ou de pratiquer la musique.',
        )}
        facebook={boolean('Facebook', true)}
        twitter={boolean('Twitter', true)}
        linkedin={boolean('Linkedin', true)}
        coupDeCoeur={boolean('Coup de coeur ?', false)}
        coupDeCoeurImg={text(
          'Coup de coeur - Image',
          'https://placeimg.com/220/120/any',
        )}
        mentorsSize={text('Mentors size', '3')}
      />
    </StyleRoot>
  ))
  .add('Navigation', () => (
    <StyleRoot>
      <ProjectNavigation
        showContributeButton={boolean('Show button', true)}
        items={object('Items', navigationItems)}
      />
    </StyleRoot>
  ))
  .add('Description', () => (
    <StyleRoot>
      <ProjectDescription />
    </StyleRoot>
  ))
