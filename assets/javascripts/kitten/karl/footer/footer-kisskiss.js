import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'
import { Row } from 'kitten/components/grid/row'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { TextInputWithButton } from 'kitten/components/form/text-input-with-button'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  InstagramButtonIcon,
} from 'kitten/components/buttons/social-button-icon'
import { Separator } from 'kitten/components/layout/separator'
import { LinkList } from 'kitten/components/links/link-list'

export class KarlFooterKisskiss extends Component {
  renderNetwork() {
    return (
      <Row>
        <Grid>
          <GridCol col-m="6" col-l="9">
            <div className="karl-FooterKisskiss__network">
              <Grid>
                <GridCol
                  col-m="12"
                  col-l="3"
                  className="karl-FooterKisskiss--center"
                >
                  <Text
                    size="tiny"
                    weight="regular"
                  >
                    Inscrivez-vous à notre Newsletter
                  </Text>
                </GridCol>

                <GridCol
                  col-m="12"
                  col-l="5"
                  className={ classNames('k-u-margin-top-single@m-down',
                                         'karl-FooterKisskiss--center') }
                >
                  <TextInputWithButton
                    value="Envoyer"
                  />
                </GridCol>
              </Grid>
            </div>
          </GridCol>

          <GridCol
            col-m="6"
            col-l="3"
            className="k-u-margin-top-triple@s-down karl-FooterKisskiss--center k-u-blockAlign-right"
          >
            <div className="karl-FooterKisskiss__network__logo">
              <div className="k-u-blockAlign-center">
                <Text
                  size="tiny"
                  weight="regular"
                  className={ classNames('k-u-align-center@l-down',
                                         'k-u-align-right@l-up') }
                >
                  Suivez-nous
                </Text>
              </div>

              <div
                className={ classNames('k-u-align-center',
                                       'k-u-margin-top-single@m-down') }
              >
                <FacebookButtonIcon
                  className="k-u-margin-right-single"
                />

                <TwitterButtonIcon
                  className="k-u-margin-right-single"
                />

                <InstagramButtonIcon />
              </div>
            </div>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  renderList() {
    const items = [
      { key: 'key1', item: 'L’équipe', href: '#' },
      { key: 'key2', item: 'Presse', href: '#' },
      { key: 'key3', item: 'Conditions générales', href: '#' },
      { key: 'key4', item: 'Nos valeurs', href: '#' },
    ]

    const items2 = [
      { key: 'key1', item: 'Crowd', href: '#' },
      { key: 'key2', item: 'Les Mentors', href: '#' },
      { key: 'key3', item: 'Pop My Project', href: '#' },
      { key: 'key4', item: 'Les StaKissTiques', href: '#' },
      { key: 'key5', item: 'KissKiss Cinéma', href: '#' },
    ]

    const items3 = [
      { key: 'key1', item: 'Réussir sa collecte', href: '#' },
      { key: 'key2', item: 'Questions fréquentes', href: '#' },
      { key: 'key3', item: 'Conditions générales', href: '#' },
      { key: 'key4', item: 'Nous contacter', href: '#' },
    ]

    return (
      <Row className="karl-FooterKisskiss__background">
        <Grid>
          <GridCol
            col-l="2"
            className="karl-FooterKisskiss__padding">
            <div className={ classNames('k-u-align-center@l-down',
                                        'k-u-margin-bottom-triple',
                                        'karl-FooterLendo__logo__img',
                                        'karl-FooterLendo__logo__imgLendo') }
            >
              <img
                src="/assets/brand/kisskissbankbank.svg"
                alt="Logo Lendopolis"
                className="karl-FooterLendo__logo__img__imgTag"
              />
            </div>
          </GridCol>
        </Grid>
      </Row>
    )
  }

  render() {
    return (
      <div className="karl-FooterKisskiss">
        { this.renderNetwork() }
        { this.renderList() }
      </div>
    )
  }
}
