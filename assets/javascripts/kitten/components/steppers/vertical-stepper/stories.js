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
          <VerticalStepper.Step success href="#">
            <VerticalStepper.Step.Label>Infos clés</VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link>Éditer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step valid href="#">
            <VerticalStepper.Step.Label>Réseaux</VerticalStepper.Step.Label>

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

          <VerticalStepper.Step error href="#">
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

            <VerticalStepper.Step.Link>Compléter</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step waiting href="#">
            <VerticalStepper.Step.Label>
              Contreparties
            </VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link>Commencer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>

          <VerticalStepper.Step href="#">
            <VerticalStepper.Step.Label>
              Statut et infos bancaires
            </VerticalStepper.Step.Label>

            <VerticalStepper.Step.Link>Commencer</VerticalStepper.Step.Link>
          </VerticalStepper.Step>
        </VerticalStepper>
      </StoryContainer>
    )
  })
