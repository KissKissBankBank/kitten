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
          <VerticalStepper.Step valid>
            <VerticalStepper.Step.Label>Infos clés</VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link href="#">
              Éditer
            </VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step valid>
            <VerticalStepper.Step.Label>Réseaux</VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link href="#">
              Éditer
            </VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step error>
            <VerticalStepper.Step.Label>
              Présentation du projet
            </VerticalStepper.Step.Label>

            <VerticalStepper.Step.List>
              <VerticalStepper.Step.List.Item>
                Veuillez renseigner votre slogan
              </VerticalStepper.Step.List.Item>
              <VerticalStepper.Step.List.Item>
                Veuillez renseigner votre description détaillée du projet
              </VerticalStepper.Step.List.Item>
            </VerticalStepper.Step.List>

            <VerticalStepper.Step.Link href="#">
              Compléter
            </VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step>
            <VerticalStepper.Step.Label>
              Contreparties
            </VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link href="#">
              Commencer
            </VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step>
            <VerticalStepper.Step.Label>
              Statut et infos bancaires
            </VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link href="#">
              Commencer
            </VerticalStepper.Step.Link>
          </VerticalStepper.Step>
        </VerticalStepper>
      </StoryContainer>
    )
  })
