import React from 'react'
import { VerticalProgress } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'
import { LinkBox } from '../../box/link-box'

const StoryContainer = ({ children }) => (
  <Container>
    <Marger top="5" bottom="5">
      {children}
    </Marger>
  </Container>
)

export default {
  title: 'Steppers/VerticalProgress',
  component: VerticalProgress,
}

export const Default = () => {
  return (
    <StoryContainer>
      <VerticalProgress>
        <VerticalProgress.Step actions title="Brouillon">
          <div className="k-u-margin-top-singleHalf k-u-margin-bottom-double">
            <Text weight="light" size="tiny" lineHeight="normal">
              Une fois les informations suivantes renseignées, vous pourrez envoyer votre projet 
              à un coach qui vous conseillera sur les amélioration à apporter à votre campagne.
            </Text>
          </div>

          <LinkBox 
            variant="orion" 
            backgroundColor="#fef1e7"
            textColor="#222"
            className="k-u-margin-bottom-single"
          >
            <LinkBox.Text>
              <Text size="tiny" weight="light" lineHeight="normal">
                <strong>Paramètres - </strong>Titre du projet, Catégorie principale, 
                Montant de  l’objectif, Type d’objectif …
              </Text>
            </LinkBox.Text>
          </LinkBox>

          <LinkBox
            variant="orion"
            backgroundColor="#fef1e7"
            textColor="#222"
            className="k-u-margin-bottom-single"
          >
            <LinkBox.Text>
              <Text size="tiny" weight="light" lineHeight="normal">
                <strong>Page projet - </strong>Slogan de votre projet
              </Text>
            </LinkBox.Text>
          </LinkBox>

          <LinkBox 
            variant="orion" 
            backgroundColor="#fef1e7"
            textColor="#222"
          >
            <LinkBox.Text>
              <Text size="tiny" weight="light" lineHeight="normal">
                <strong>Admin - </strong>Lieu de naissance
              </Text>
            </LinkBox.Text>
          </LinkBox>
        </VerticalProgress.Step>
        
      </VerticalProgress>
    </StoryContainer>
  )
}
