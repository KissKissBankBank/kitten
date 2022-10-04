import React from 'react'
import { VerticalProgress } from './index'
import { Text, LinkBox, Button } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  component: VerticalProgress,
  title: 'Feedback/VerticalProgress',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="VerticalProgress" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <VerticalProgress withoutBorder>
      <VerticalProgress.Step statusType="actions" progressTitle="Brouillon">
        <div className="k-u-margin-top-singleHalf k-u-margin-bottom-double">
          <Text weight="400" size="small" lineHeight="normal">
            Une fois les informations suivantes renseignées, vous pourrez
            envoyer votre projet à un coach qui vous conseillera sur les
            amélioration à apporter à votre campagne.
          </Text>
        </div>

        <LinkBox
          backgroundColor="#fef1e7"
          textColor="#222"
          className="k-u-margin-bottom-noneHalf"
          href="#"
          isSmall
        >
          <LinkBox.Text>
            <Text size="small" weight="700" lineHeight="normal">
              Paramètres
            </Text>
          </LinkBox.Text>
        </LinkBox>

        <LinkBox
          backgroundColor="#fef1e7"
          textColor="#222"
          className="k-u-margin-bottom-noneHalf"
          href="#"
          isSmall
        >
          <LinkBox.Text>
            <Text size="small" weight="700" lineHeight="normal">
              Page projet
            </Text>
          </LinkBox.Text>
        </LinkBox>

        <LinkBox backgroundColor="#fef1e7" textColor="#222" href="#" isSmall>
          <LinkBox.Text>
            <Text size="small" weight="700" lineHeight="normal">
              Admin
            </Text>
          </LinkBox.Text>
        </LinkBox>
      </VerticalProgress.Step>

      <VerticalProgress.Step
        statusType="publish"
        progressTitle="Partagé à mon coach"
      />

      <VerticalProgress.Step
        statusType="waiting"
        progressTitle="En cours de vérification"
      >
        <div className="k-u-margin-top-singleHalf">
          <Text weight="400" size="small" lineHeight="normal">
            Votre coach est en train de parcourir votre projet. Il le validera
            ou vous enverra ses suggestions d'améliorations par mail sous 2
            jours ouvrés maximum.
          </Text>
        </div>
      </VerticalProgress.Step>

      <VerticalProgress.Step
        statusType="valid"
        progressTitle="Prêt à être partagé"
      >
        <div className="k-u-margin-top-singleHalf">
          <Text weight="400" size="small" lineHeight="normal">
            Partagez au plus vite votre projet à un coach pour recevoir des
            conseils pour améliorer votre campagne par mail.
          </Text>
          <div className="k-u-margin-top-double">
            <Button modifier="helium">Partager à mon coach</Button>
          </div>
        </div>
      </VerticalProgress.Step>

      <VerticalProgress.Step
        statusType="disabled"
        progressTitle="Partager avec mon coach"
      />
      <VerticalProgress.Step statusType="disabled" progressTitle="Finaliser" />
      <VerticalProgress.Step statusType="disabled" progressTitle="Publier" />
    </VerticalProgress>
  )
}
