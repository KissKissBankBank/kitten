import React from 'react'
import { VerticalStepper } from './index'
import { Text } from '../../..'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Organisms/VerticalStepper',
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

export const WithOrionVariant = () => {
  return (
    <VerticalStepper >
      <VerticalStepper.Step
        success
        href="#"
        statusProps={{ title: 'Étape validée' }}

      >
        <VerticalStepper.Title >ÉTAPE 1</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Décrivez-nous votre projet
          <VerticalStepper.Link >Modifier</VerticalStepper.Link>
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        valid
        href="#"
        statusProps={{ title: 'Étape complétée' }}

      >
        <VerticalStepper.Title >ÉTAPE 2</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Créez votre projet (nom, durée, ...)
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step  bridge />

      <VerticalStepper.Step
        error
        statusProps={{ title: 'Étape à commencer' }}

      >
        <VerticalStepper.Title >ÉTAPE 3</VerticalStepper.Title>
        <Text weight="light" size="tiny" lineHeight="normal">
          Préparez votre campagne (contenu de votre page, contreparties...)
        </Text>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        disabled
        href="#"
        statusProps={{ title: 'Étape bloquée' }}

      >
        <VerticalStepper.Title >ÉTAPE 4</VerticalStepper.Title>

        <Text weight="light" size="tiny" lineHeight="normal">
          Soumettez votre projet (votre coach vérifie votre projet et vous
          conseille)
        </Text>
      </VerticalStepper.Step>
    </VerticalStepper>
  )
}

export const Default = () => {
  return (
    <VerticalStepper>
      <VerticalStepper.Step
        success
        href="#"
        statusProps={{ title: 'Étape validée' }}
      >
        <VerticalStepper.Title>Infos clés</VerticalStepper.Title>

        <VerticalStepper.Link>Éditer</VerticalStepper.Link>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        valid
        href="#"
        statusProps={{ title: 'Étape complétée' }}
      >
        <VerticalStepper.Title>Réseaux</VerticalStepper.Title>

        <VerticalStepper.Link>Éditer</VerticalStepper.Link>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        error
        href="#"
        statusProps={{ title: 'Étape à améliorer' }}
      >
        <VerticalStepper.Title>Présentation du projet</VerticalStepper.Title>

        <VerticalStepper.List error>
          <VerticalStepper.List.Item>
            Veuillez renseigner votre slogan
          </VerticalStepper.List.Item>
          <VerticalStepper.List.Item>
            Veuillez renseigner votre description détaillée du projet
          </VerticalStepper.List.Item>
        </VerticalStepper.List>

        <VerticalStepper.Link>Compléter</VerticalStepper.Link>
      </VerticalStepper.Step>

      <VerticalStepper.Step
        waiting
        href="#"
        statusProps={{ title: 'Étape à compléter' }}
      >
        <VerticalStepper.Title>Contreparties</VerticalStepper.Title>

        <VerticalStepper.Link>Commencer</VerticalStepper.Link>
      </VerticalStepper.Step>

      <VerticalStepper.Step statusProps={{ title: 'Étape à commencer' }}>
        <VerticalStepper.Title>Statut et infos bancaires</VerticalStepper.Title>

        <VerticalStepper.Link as="a" href="#">
          Compléter
        </VerticalStepper.Link>
      </VerticalStepper.Step>

      <VerticalStepper.Step disabled statusProps={{ title: 'Étape bloquée' }}>
        <VerticalStepper.Title>Réception des fonds</VerticalStepper.Title>

        <Text weight="light" size="micro">
          Pièces justificatives à compléter lorsque vous aurez atteint 50% de
          votre objectif
        </Text>
      </VerticalStepper.Step>
    </VerticalStepper>
  )
}
