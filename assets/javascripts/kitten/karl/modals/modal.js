import React, { Component } from 'react'
import { Button } from 'kitten/components/buttons/button'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Modal } from 'kitten/components/modals/modal'

const KarlModalComponent = () => (
  <div>
    <Title
      margin={ false }
      modifier="quaternary">
        Title
    </Title>
    <Paragraph
      modifier="tertiary">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu,
        pretium
    </Paragraph>

    <Grid>
      <GridCol col="12" col-m="6">
        <Button
          className="k-u-margin-bottom-single@s-down"
          modifier="hydrogen"
          size="big">
          Action 1 Button
        </Button>
      </GridCol>

      <GridCol col="12" col-m="6">
        <Button
          modifier="helium"
          size="big">
          Action 2 Button
        </Button>
      </GridCol>
    </Grid>
  </div>
)

const KarlModalButton = () => (
  <Button modifier="helium">Open</Button>
)

export const KarlModal = props => (
  <Modal
    trigger={ <KarlModalButton /> }
    content={ <KarlModalComponent /> }
  />
)

export class KarlModalExternalTrigger extends Component {
  render() {
    return (
      <div>
        <Button onClick={ () => this._modal.open() }>
          Open
        </Button>
        <Modal
          ref={ node => this._modal = node }
          content={ <KarlModalComponent /> } />
      </div>
    )
  }
}
