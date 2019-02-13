import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { VerticalStepper } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

storiesOf('Steppers/VerticalStepper', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    return (
      <StoryContainer>
        <VerticalStepper>
          <VerticalStepper.Step
            success
            href="#"
            statusProps={{ title: 'Étape validée' }}
          >
            <VerticalStepper.Step.Title>Infos clés</VerticalStepper.Step.Title>

            <VerticalStepper.Step.Link>Éditer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step
            valid
            href="#"
            statusProps={{ title: 'Étape complétée' }}
          >
            <VerticalStepper.Step.Title>Réseaux</VerticalStepper.Step.Title>

            <VerticalStepper.Step.List>
              <VerticalStepper.Step.List.Item>
                Facebook
              </VerticalStepper.Step.List.Item>
              <VerticalStepper.Step.List.Item>
                Twitter
              </VerticalStepper.Step.List.Item>
              <VerticalStepper.Step.List.Item>…</VerticalStepper.Step.List.Item>
            </VerticalStepper.Step.List>

            <VerticalStepper.Step.Link>Éditer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step
            error
            href="#"
            statusProps={{ title: 'Étape à améliorer' }}
          >
            <VerticalStepper.Step.Title>
              Présentation du projet
            </VerticalStepper.Step.Title>

            <VerticalStepper.Step.List error>
              <VerticalStepper.Step.List.Item>
                Veuillez renseigner votre slogan
              </VerticalStepper.Step.List.Item>
              <VerticalStepper.Step.List.Item>
                Veuillez renseigner votre description détaillée du projet
              </VerticalStepper.Step.List.Item>
            </VerticalStepper.Step.List>

            <VerticalStepper.Step.Link>Compléter</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step
            waiting
            href="#"
            statusProps={{ title: 'Étape à compléter' }}
          >
            <VerticalStepper.Step.Title>
              Contreparties
            </VerticalStepper.Step.Title>

            <VerticalStepper.Step.Link>Commencer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step statusProps={{ title: 'Étape à commencer' }}>
            <VerticalStepper.Step.Title>
              Statut et infos bancaires
            </VerticalStepper.Step.Title>

            <VerticalStepper.Step.Link>Commencer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>
        </VerticalStepper>
      </StoryContainer>
    )
  })
