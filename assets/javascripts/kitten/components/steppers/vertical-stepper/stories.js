import React from 'react'
import { VerticalStepper } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Steppers/VerticalStepper',
  component: VerticalStepper,
}

export const WithOrionVariant = () => {
  return (
    <StoryContainer>
      <VerticalStepper variant="orion">
        <VerticalStepper.Step
          success
          href="#"
          statusProps={{ title: 'ÉTAPE 1' }}
          variant="orion"
        >
          <VerticalStepper.Title variant="orion">ÉTAPE 1</VerticalStepper.Title>
          <Text color="font1" size="tiny">Décrivez-nous votre projet</Text>

        </VerticalStepper.Step>

        <VerticalStepper.Step
          valid
          href="#"
          statusProps={{ title: 'ÉTAPE 2' }}
          variant="orion"
        >
          <VerticalStepper.Title variant="orion">ÉTAPE 2</VerticalStepper.Title>
          <Text color="font1" size="tiny">Créez votre projet (nom, durée, ...)</Text>
        </VerticalStepper.Step>

        <VerticalStepper.Step
          href="#"
          waiting
          statusProps={{ title: 'ÉTAPE 3' }}
          variant="orion"
        >
          <VerticalStepper.Title variant="orion">ÉTAPE 3</VerticalStepper.Title>
          <Text color="font1" size="tiny">Préparez votre campagne (contenu de votre page, contreparties...)</Text>
        </VerticalStepper.Step>

        <VerticalStepper.Step
          disabled
          href="#"
          statusProps={{ title: 'ÉTAPE 4' }}
          variant="orion"
        >
          <VerticalStepper.Title variant="orion">ÉTAPE 4</VerticalStepper.Title>
          <Text color="font2" size="tiny">Soumettez votre projet (votre coach vérifie votre projet et vous conseille)</Text>
        </VerticalStepper.Step>

      </VerticalStepper>
    </StoryContainer>
  )
}

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalStepper>
        <VerticalStepper.Step
          success
          href="#"
          statusProps={{ title: 'Étape validée' }}
        >
          <VerticalStepper.Title
          
          >
            Infos clés
          </VerticalStepper.Title>

          <VerticalStepper.Link>Éditer</VerticalStepper.Link>
        </VerticalStepper.Step>

        <VerticalStepper.Step
          valid
          href="#"
          statusProps={{ title: 'Étape complétée' }}
        >
          <VerticalStepper.Title>Réseaux</VerticalStepper.Title>

          <VerticalStepper.List>
            <VerticalStepper.List.Item>Facebook</VerticalStepper.List.Item>
            <VerticalStepper.List.Item>Twitter</VerticalStepper.List.Item>
            <VerticalStepper.List.Item>…</VerticalStepper.List.Item>
          </VerticalStepper.List>

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
          <VerticalStepper.Title>
            Statut et infos bancaires
          </VerticalStepper.Title>

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
    </StoryContainer>
  )
}
