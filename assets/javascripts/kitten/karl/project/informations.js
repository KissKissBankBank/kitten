import React, { Fragment } from 'react'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import COLORS from 'kitten/constants/colors-config'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button } from 'kitten/components/buttons/button'
import { Progress } from 'kitten/components/meters/progress'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
} from 'kitten/components/buttons/social-button-icon'

const ProjectContribution = () => (
  <Marger top="2" bottom="2" style={styles.contribution}>
    <ButtonImage
      tag="span"
      big
      img={{ src: 'https://placeimg.com/50/50/any' }}
      withoutPointerEvents
    />

    <Marger style={styles.contribution.text}>
      <Text tag="div" size="micro" weight="light">
        <Text size="micro" weight="regular">
          Solène
        </Text>{' '}
        a contribué à ce projet
      </Text>

      <Text tag="div" size="micro" weight="regular" color="primary1">
        50 €
      </Text>
    </Marger>
  </Marger>
)

export const ProjectInformations = () => (
  <Container>
    <Grid>
      <GridCol col="4">
        <Marger top="5" bottom="10" style={styles.contributions}>
          <Marger top="8" bottom="2">
            <Title modifier="senary" margin={false}>
              Derniers contributeurs
            </Title>
          </Marger>

          <Marger top="2" bottom="3">
            <HorizontalStroke style={{ background: COLORS.background1 }} />
          </Marger>

          <Marger top="3" bottom="8">
            <ProjectContribution />
            <ProjectContribution />
            <ProjectContribution />
          </Marger>
        </Marger>
      </GridCol>

      <GridCol col="6" offset="1">
        <Marger top="5" bottom="0.5" style={styles.informations}>
          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text tag="div" color="font1" weight="regular">
              517
            </Text>
            <Text tag="div" color="font1" weight="light" size="tiny">
              Contributeurs
            </Text>
          </Marger>

          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text tag="div" color="font1" weight="regular">
              8 jours
            </Text>
            <Text tag="div" color="font1" weight="light" size="tiny">
              Restants
            </Text>
          </Marger>

          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text tag="div" color="font1" weight="regular">
              70 658 €
            </Text>
            <Text tag="div" color="font1" weight="light" size="tiny">
              Sur 150 000 €
            </Text>
          </Marger>
        </Marger>

        <Marger top="0.5" bottom="3.5" style={styles.flex}>
          <div style={styles.progress}>
            <Progress value="72" rampProps={{ style: { height: '6px' } }} />
          </div>

          <Text tag="div" color="font1" weight="regular" lineHeight="normal">
            72 %
          </Text>
        </Marger>

        <Marger top="3.5" bottom="2">
          <Paragraph margin={false}>
            Initié par la Philharmonie de Paris et parrainé par Lilian Thuram,
            le projet Démos (Dispositif d’éducation musicale et orchestrale à
            vocation sociale) s’adresse depuis 2010 à des jeunes de 7 à 12 ans
            qui n’ont jamais eu l’occasion d’apprendre ou de pratiquer la
            musique.
          </Paragraph>
        </Marger>

        <Marger>
          <Text
            tag="a"
            href="#"
            color="primary1"
            size="normal"
            weight="regular"
            style={{ textDecoration: 'none' }}
          >
            Lire la suite…
          </Text>
        </Marger>

        <Marger top="3" bottom="5" style={styles.flexSpaceBetween}>
          <Button icon>
            <HeartIcon className="k-Button__icon" />
            Suivre le projet
          </Button>

          <div>
            <Text
              color="font1"
              size="tiny"
              weight="regular"
              style={styles.social}
            >
              Partager
            </Text>
            <FacebookButtonIcon style={styles.social} />
            <TwitterButtonIcon style={styles.social} />
            <LinkedinButtonIcon style={styles.social} />
          </div>
        </Marger>

        <Marger top="5" bottom="10" style={styles.flexSpaceBetween}>
          <div>
            <Marger bottom="1.5">
              <Text color="font1" size="tiny" weight="regular">
                Projet coup de coeur
              </Text>
            </Marger>

            <Marger top="1.5">
              <img
                src="https://placeimg.com/220/120/any"
                style={{ display: 'block' }}
              />
            </Marger>
          </div>

          <div>
            <Marger bottom="1.5">
              <Text color="font1" size="tiny" weight="regular">
                Mentors de ce projet
              </Text>
            </Marger>

            <Marger top="1.5">
              <div style={styles.flex}>
                <img
                  src="https://placeimg.com/120/120/any"
                  style={styles.mentor}
                />
                <img
                  src="https://placeimg.com/120/120/any"
                  style={styles.mentor}
                />
                <img
                  src="https://placeimg.com/120/120/any"
                  style={{ ...styles.mentor, ...styles.mentor.last }}
                />
              </div>
            </Marger>
          </div>
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)

const styles = {
  flex: {
    display: 'flex',
    alignItems: 'center',
  },

  flexSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contributions: {
    overflow: 'hidden',
    backgroundColor: COLORS.font1,
    color: COLORS.background1,
    marginLeft: `-${CONTAINER_PADDING}px`,
    padding: `0 ${CONTAINER_PADDING}px`,
  },

  contribution: {
    display: 'flex',
    alignItems: 'center',

    text: {
      marginLeft: '10px',
      marginRight: '20px',
      lineHeight: '1.4',
      color: COLORS.background1,
    },
  },

  informations: {
    display: 'flex',
    alignItems: 'center',

    info: {
      marginRight: '40px',
      lineHeight: '1.4',
    },
  },

  progress: {
    width: '500px',
    marginRight: '20px',
  },

  social: {
    marginLeft: '15px',
  },

  mentor: {
    display: 'block',
    marginRight: '20px',

    last: {
      marginRight: 0,
    },
  },
}
