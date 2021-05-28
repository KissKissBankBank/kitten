import React from 'react'
import { LinkBox } from './index'
import { text, boolean, color, select } from '@storybook/addon-knobs'
import { FlashCircleIcon } from '../../icons/flash-circle-icon'
import { Text } from '../../typography/text'
import COLORS from '../../../constants/colors-config'
import { Container } from '../../grid/container'
import { Grid, GridCol } from '../../grid/grid'

export const Default = () => (
  <LinkBox
    href={text('Href', '#anchor')}
    isExternal={boolean('External?', false)}
  >
    <LinkBox.Icon>
      <FlashCircleIcon
        circleColor="#caf4fe"
        flashColor={COLORS.primary1}
        width="60"
        height="60"
      />
    </LinkBox.Icon>

    <LinkBox.Text>
      <Text size="micro" lineHeight="normal">
        Partie 1
      </Text>

      <Text size="tiny" weight="regular" lineHeight="normal">
        Les différents types de financement participatif
      </Text>
    </LinkBox.Text>
  </LinkBox>
)

export const WithVariant = () => (
  <Container>
    <Grid>
      <GridCol col="6">
        <LinkBox
          href={text('Href', '#anchor')}
          isExternal={boolean('External?', false)}
          variant={select('variant', ['andromeda', 'orion'], 'andromeda')}
          backgroundColor={color('Background color', '#fef1e7')}
          textColor={color('Textcolor', '#222')}
        >
          <LinkBox.Text>
            <Text size="tiny" weight="light" lineHeight="normal">
              <strong>Paramètres -</strong> Titre du projet, Catégorie principale, 
              Montant de  l’objectif, Type d’objectif …
            </Text>
          </LinkBox.Text>
        </LinkBox>
      </GridCol>
    </Grid>
  </Container>

)
