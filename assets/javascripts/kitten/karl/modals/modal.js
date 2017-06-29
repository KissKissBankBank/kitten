import React from 'react'
import { modal } from 'kitten/hoc/modal'
import { Button } from 'kitten/components/buttons/button'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'

const KarlModalComponent = props => {
  return (
    <div>
      <Title
        margin={ false }
        modifier="quaternary">
          Titre de la popin
      </Title>
      <Paragraph
        modifier="tertiary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium
      </Paragraph>

      <Grid>
        <GridCol col="12" col-m="6" className="k-Modal__button--first">
          <Button
            className="k-Modal__button--button"
            modifier="hydrogen"
            size="big">
              Action 1 Button
          </Button>
        </GridCol>

        <GridCol col="12" col-m="6" className="k-Modal__button--last">
          <Button
            modifier="helium"
            size="big">
              Action 2 Button
          </Button>
        </GridCol>
      </Grid>
    </div>
  )
}

const KarlModalButton = props => {
  return (
    <Button modifier="helium" { ...props }>Open</Button>
  )
}

export const ButtonWithModal = modal(KarlModalComponent, KarlModalButton)
