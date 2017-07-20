import React, { component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'

export class KarlFooterLendo extends Component {
  renderNetwork() {
    return (
      <Marger top="2.5" bottom="2.5">
        <Grid>
          <GridCol col="12" col-m="6">
          </GridCol>
        </Grid>
      </Marger>
    )
  }
}
