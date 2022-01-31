import React from 'react'
import { VerticalStepper } from './index'
import { Text } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Feedback/VerticalStepper',
  component: VerticalStepper,
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalStepper" />
      ),
    },
  },
}

export const Default = () => {
  return (
    <VerticalStepper>
      <VerticalStepper.Step
        success
        href="#"
        statusProps={{ title: 'Étape validée' }}
      >
        <VerticalStepper.Title>ÉTAPE 1</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Décrivez-nous votre projet
          <VerticalStepper.Link>Modifier</VerticalStepper.Link>
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        valid
        href="#"
        statusProps={{ title: 'Étape complétée' }}
      >
        <VerticalStepper.Title>ÉTAPE 2</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Créez votre projet (nom, durée, ...)
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step bridge />

      <VerticalStepper.Step error statusProps={{ title: 'Étape à commencer' }}>
        <VerticalStepper.Title>ÉTAPE 3</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Préparez votre campagne (contenu de votre page, contreparties...)
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        disabled
        href="#"
        statusProps={{ title: 'Étape bloquée' }}
      >
        <VerticalStepper.Title>ÉTAPE 4</VerticalStepper.Title>

        <Text weight="light" size="tiny" lineHeight="normal">
          Soumettez votre projet (votre coach vérifie votre projet et vous
          conseille)
        </Text>
      </VerticalStepper.Step>
    </VerticalStepper>
  )
}
