import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { FacebookIcon } from 'kitten/components/icons/facebook-icon'
import { TwitterIcon } from 'kitten/components/icons/twitter-icon'
import { LinkedinIcon } from 'kitten/components/icons/linkedin-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'

export class KarlFooterLendo extends Component {
  renderFollow() {
    return (
      <div>
        <Paragraph modifier="tertiary">
          Suivez nous
        </Paragraph>
        <ButtonIcon
          modifier="facebook">
          <FacebookIcon
            className="k-ButtonIcon__svg" />
        </ButtonIcon>
        <ButtonIcon
          modifier="twitter">
          <TwitterIcon
            className="k-ButtonIcon__svg" />
        </ButtonIcon>
        <ButtonIcon
          modifier="linkedin">
          <LinkedinIcon
            className="k-ButtonIcon__svg" />
        </ButtonIcon>
      </div>
    )
  }

  renderNetwork() {
    return (
      <Marger top="2.5" bottom="2.5">
        <Grid>
          <GridCol col="12" col-m="6">
            <Paragraph
              modifier="tertiary"
              className="k-FooterLendo__grid">
              Inscrivez-vous à notre Newsletter et à l'alerte nouveau projet
            </Paragraph>
            <TextInputWithButton />
            { this.renderFollow() }
          </GridCol>
        </Grid>
      </Marger>
    )
  }

  render() {
    return (
      <div className="k-FooterLendo">
        { this.renderNetwork() }
      </div>
    )
  }
}
