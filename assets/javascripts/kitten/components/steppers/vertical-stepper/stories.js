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

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalStepper variant="orion">
        <VerticalStepper.Step
          success
          href="#"
          statusProps={{ title: 'Étape validée' }}
        >
          <VerticalStepper.Title
            variant="orion"
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
