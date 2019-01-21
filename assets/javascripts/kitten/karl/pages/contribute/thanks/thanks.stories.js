import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'

import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'

import { TextInput } from '../../../../components/form/text-input'
import { Button } from '../../../../components/buttons/button'

import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
} from '../../../../components/buttons/social-button-icon-words'
import { EmailIcon } from '../../../../components/icons/email-icon'

import { Carousel } from '../../../../components/carousel/carousel'
import { CrowdfundingCard } from '../../../../components/cards/crowdfunding-card'

storiesOf('Pages/Contribute', module).add('Thanks', () => {
  return (
    <Marger top="10" bottom="10">
      <Container>
        <Grid>
          <GridCol
            col-xs="12"
            offset-xs="0"
            col-m="9"
            offset-m="1"
            col-l="6"
            offset-l="3"
          >
            <Marger bottom="3">
              <Title modifier="tertiary">
                Bravo, grâce à vous <br />
                la collecte progresse !
              </Title>
            </Marger>
            <Marger bottom="4">
              <Text>
                Vos contreparties seront délivrées par le créateur quand la
                collecte sera réussie. Vous pourrez également lui demander un
                reçu de don.
              </Text>
            </Marger>
            <Marger bottom="8">
              <Title modifier="quinary">
                Postez un message de soutien sur la page du projet
              </Title>
              <Marger top="3" bottom="3">
                <TextInput
                  tag="textarea"
                  placeholder="Laissez un message au porteur de projet…"
                />
              </Marger>
              <Button modifier="helium">Valider</Button>
            </Marger>

            <Marger bottom="8">
              <Marger bottom="3">
                <Title modifier="quinary">Faites connaître le projet</Title>
              </Marger>
              <Marger bottom="2">
                <FacebookButtonIconWords>
                  Partager sur Facebook
                </FacebookButtonIconWords>
              </Marger>
              <Marger bottom="2">
                <TwitterButtonIconWords>
                  Partager sur Twitter
                </TwitterButtonIconWords>
              </Marger>
              <Marger bottom="9">
                <Button modifier="lithium" size="big" icon={true}>
                  <EmailIcon className="k-Button__icon" />
                  Partager par email
                </Button>
              </Marger>
            </Marger>
          </GridCol>
        </Grid>

        <Grid>
          <GridCol />
        </Grid>

        <Carousel
          itemMinWidth={280}
          baseItemMarginBetween={20}
          data={[
            {
              title: 'Item A',
              imageSrc: 'http://placekitten.com/500/300/',
              thumbSrc: 'http://placekitten.com/80/80/',
            },
            {
              title: 'Item B',
              imageSrc: 'http://placekitten.com/501/301/',
              thumbSrc: 'http://placekitten.com/81/81/',
            },
            {
              title: 'Item C',
              imageSrc: 'http://placekitten.com/502/302/',
              thumbSrc: 'http://placekitten.com/82/82/',
            },
            {
              title: 'Item D',
              imageSrc: 'http://placekitten.com/503/303/',
              thumbSrc: 'http://placekitten.com/83/83/',
            },
            {
              title: 'Item E',
              imageSrc: 'http://placekitten.com/504/304/',
              thumbSrc: 'http://placekitten.com/84/84/',
            },
          ]}
          renderItem={({ item }) => {
            return (
              <CrowdfundingCard
                href="#"
                imageProps={{
                  src: item.imageSrc,
                  alt: 'Image alt',
                  backgroundColor: '#d8d8d8',
                  color: '#333',
                }}
                avatarProps={{
                  src: item.thumbSrc,
                  alt: 'Avatar alt',
                }}
                ownerTitle="Title"
                ownerDescription="Custom description"
                titleProps={{
                  tag: 'h4',
                }}
                cardTitle={item.title}
                cardSubTitle="Custom subtitle"
                titlesMinHeight
                info1="Custom information #1"
                info2="Custom information #2"
                info3="Custom information #3"
                progress="84"
                state="Custom state"
              />
            )
          }}
        />
      </Container>
    </Marger>
  )
})
