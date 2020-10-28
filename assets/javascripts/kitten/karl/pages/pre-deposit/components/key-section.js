import React from 'react'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Marger } from '../../../../components/layout/marger'
import { TitleWithStroke } from '../../../../components/typography/title-with-stroke'
import { Text } from '../../../../components/typography/text'
import { BulletList } from '../../../../components/lists/bullet-list'
import { Button } from '../../../../components/buttons/button'

const KeySection = () => (
  <Container className="PreDeposit__keySection">
    <Grid>
      <GridCol col-l="9" offset-l="1">
        <TitleWithStroke
          modifier="secondary"
          margin={false}
          className="PreDeposit__keySection__text"
        >
          La clé ? Un accompagnement sur mesure pour votre financement
        </TitleWithStroke>
      </GridCol>
    </Grid>

    <Grid>
      <GridCol offset-l="1" col-s="5" offset-s="1" className="k-u-hidden@s-up">
        <div className="PreDeposit__keySection__image" />
      </GridCol>

      <GridCol
        col-l="4"
        offset-l="1"
        col-s="6"
        offset-s="0"
        className="PreDeposit__keySection__bulletList k-u-margin-top-triple@xs-down"
      >
        <BulletList
          items={[
            {
              key: '1',
              className: 'k-u-margin-bottom-double',
              item: (
                <Text weight="light" className="PreDeposit__keySection__item">
                  Un coach pour vous conseiller sur la mise en forme de votre
                  page projet, votre stratégie de communication durant la
                  collecte et l'envoi de vos contreparties.
                </Text>
              ),
            },
            {
              key: '2',
              className: 'k-u-margin-bottom-double',
              item: (
                <Text weight="light" className="PreDeposit__keySection__item">
                  Une équipe d’experts pour chaque secteur d’activité, proche de
                  vos besoins et de vos problématiques.
                </Text>
              ),
            },
            {
              key: '3',
              item: (
                <Text weight="light" className="PreDeposit__keySection__item">
                  <span style={{ color: '#19b4fa' }}>Un blog</span> et{' '}
                  <span style={{ color: '#19b4fa' }}>des vidéos tutos</span>{' '}
                  pour devenir un pro du financement participatif !
                </Text>
              ),
            },
          ]}
        />
        <Marger className="PreDeposit__keySection__button k-u-margin-top-quadruple">
          <Button modifier="helium" size="big">
            Je lance mon projet
          </Button>
        </Marger>
      </GridCol>

      <GridCol
        offset-l="1"
        col-s="5"
        offset-s="1"
        className="k-u-hidden@xs-down"
      >
        <div className="PreDeposit__keySection__image" />
      </GridCol>
    </Grid>
  </Container>
)

export default KeySection
