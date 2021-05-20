import React from 'react'
import { VerticalProgress } from './index'
import { Marger } from '../../layout/marger'
import { Container } from '../../grid/container'
import { Text } from '../../typography/text'
import { LinkBox } from '../../box/link-box'
import { Button } from '../../buttons/button'

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
        <VerticalProgress.Step actions state="Brouillon">
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
            className="k-u-margin-bottom-noneHalf"
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
            className="k-u-margin-bottom-noneHalf"
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
        
        <VerticalProgress.Step waiting state="En cours de vérification">
          <div className="k-u-margin-top-singleHalf k-u-margin-bottom-double">
            <Text weight="light" size="tiny" lineHeight="normal">
              Votre coach est en train de parcourir votre projet. Il le validera ou vous enverra 
              ses suggestions d'améliorations par mail sous 2 jours ouvrés maximum.
            </Text>
          </div>
        </VerticalProgress.Step>

        <VerticalProgress.Step valid state="Prêt à être partagé">
          <div className="k-u-margin-top-singleHalf k-u-margin-bottom-double">
            <Text weight="light" size="tiny" lineHeight="normal">
              Partagez au plus vite votre projet à un coach pour recevoir des conseils 
              pour améliorer votre campagne par mail.
            </Text>
            <div className="k-u-margin-top-double">
              <Button variant="orion" modifier="helium">Partager à mon coach</Button>
            </div>
          </div>
        </VerticalProgress.Step>

        <VerticalProgress.Step disabled state="Partager avec mon coach" />
        <VerticalProgress.Step disabled state="Partager avec mon coach" />
        <VerticalProgress.Step disabled state="Partager avec mon coach" />

      </VerticalProgress>
    </StoryContainer>
  )
}
