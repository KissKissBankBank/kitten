import React, { Fragment } from 'react'
import Radium from 'radium'
import {
  NUM_COLUMNS,
  CONTAINER_PADDING,
  CONTAINER_PADDING_MOBILE,
} from 'kitten/constants/grid-config'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { Text } from 'kitten/components/typography/text'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Progress } from 'kitten/components/meters/progress'
import { HeartIcon } from 'kitten/components/icons/heart-icon'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
} from 'kitten/components/buttons/social-button-icon'

const Marger = Radium(MargerBase)

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

const ProjectInformationsBase = ({
  viewportIsTabletOrLess,
  viewportIsMobile,
  ...others
}) => (
  <Container>
    <Grid>
      <GridCol col="4" className="k-u-hidden@m-down">
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

      <GridCol col="12" col-l="6" offset-l="1">
        <Marger
          top={viewportIsMobile ? 3 : 5}
          bottom={viewportIsMobile ? 0 : 0.5}
          style={styles.informations}
        >
          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text
              tag="div"
              color="font1"
              weight="regular"
              size={viewportIsMobile ? 'tiny' : 'default'}
            >
              {others.info1}
            </Text>
            <Text
              tag="div"
              color="font1"
              weight="light"
              size={viewportIsMobile ? 'micro' : 'tiny'}
            >
              {others.info1Text}
            </Text>
          </Marger>

          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text
              tag="div"
              color="font1"
              weight="regular"
              size={viewportIsMobile ? 'tiny' : 'default'}
            >
              {others.info2}
            </Text>
            <Text
              tag="div"
              color="font1"
              weight="light"
              size={viewportIsMobile ? 'micro' : 'tiny'}
            >
              {others.info2Text}
            </Text>
          </Marger>

          <Marger top="1" bottom="1" style={styles.informations.info}>
            <Text
              tag="div"
              color="font1"
              weight="regular"
              size={viewportIsMobile ? 'tiny' : 'default'}
            >
              {others.info3}
            </Text>
            <Text
              tag="div"
              color="font1"
              weight="light"
              size={viewportIsMobile ? 'micro' : 'tiny'}
            >
              {others.info3Text}
            </Text>
          </Marger>
        </Marger>

        <Marger
          top={viewportIsMobile ? 0 : 0.5}
          bottom="3.5"
          style={styles.flex}
        >
          <div style={styles.progress}>
            <Progress
              value={others.progress}
              rampProps={{ style: { height: '6px' } }}
            />
          </div>

          <Text
            tag="div"
            color="font1"
            weight="regular"
            lineHeight="normal"
            style={styles.unflexible}
          >
            {others.progress} %
          </Text>
        </Marger>

        <Marger top="3.5" bottom="2">
          <Paragraph margin={false}>{others.description}</Paragraph>
        </Marger>

        <Marger>
          <Text
            tag="a"
            href="#"
            color="primary1"
            size="default"
            weight="regular"
            style={{ textDecoration: 'none' }}
          >
            Lire la suite…
          </Text>
        </Marger>

        <Marger
          top="3"
          bottom={viewportIsMobile ? 1 : 3}
          style={styles.flexSpaceBetween}
        >
          {viewportIsTabletOrLess && (
            <ButtonIcon>
              <HeartIcon className="k-ButtonIcon__svg" />
            </ButtonIcon>
          )}

          {!viewportIsTabletOrLess && (
            <Button icon>
              <HeartIcon className="k-Button__icon" />
              Suivre le projet
            </Button>
          )}

          {(others.facebook || others.twitter || others.linkedin) && (
            <div>
              <Text
                color="font1"
                size="tiny"
                weight="regular"
                style={styles.social}
                className="k-u-hidden@m-down"
              >
                Partager
              </Text>

              {others.facebook && <FacebookButtonIcon style={styles.social} />}
              {others.twitter && <TwitterButtonIcon style={styles.social} />}
              {others.linkedin && <LinkedinButtonIcon style={styles.social} />}
            </div>
          )}
        </Marger>

        <Marger
          top={viewportIsMobile ? 1 : 3}
          bottom={viewportIsMobile ? 4.5 : 8}
          style={styles.flexSpaceBetween}
        >
          {others.coupDeCoeur && (
            <div style={styles.coupDeCoeur}>
              <Marger top="2" bottom="1.5">
                <Text color="font1" size="tiny" weight="regular">
                  Projet coup de coeur
                </Text>
              </Marger>

              <Marger top="1.5">
                <img
                  src={others.coupDeCoeurImg}
                  style={styles.coupDeCoeur.img}
                />
              </Marger>
            </div>
          )}

          {others.mentorsSize && (
            <div>
              <Marger top="2" bottom="1.5">
                <Text color="font1" size="tiny" weight="regular">
                  Mentors de ce projet
                </Text>
              </Marger>

              <Marger top="1.5">
                <div style={[styles.flex, styles.flexWrap]}>
                  {Array.apply(null, { length: others.mentorsSize }).map(() => (
                    <img
                      src="https://placeimg.com/120/120/any"
                      style={styles.mentor}
                    />
                  ))}
                </div>
              </Marger>
            </div>
          )}
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

  flexWrap: {
    flexWrap: 'wrap',
  },

  flexSpaceBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      justifyContent: 'initial',
    },
  },

  unflexible: {
    flexShrink: 0,
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
    flexWrap: 'wrap',

    info: {
      marginRight: '40px',
      lineHeight: '1.4',
    },
  },

  progress: {
    width: '500px',
    marginRight: '20px',

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      width: 'auto',
      flex: '1',
    },
  },

  social: {
    marginLeft: '15px',
  },

  coupDeCoeur: {
    marginRight: '20px',
    marginBottom: '20px',

    img: {
      display: 'block',
      height: '120px',

      [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
        height: '80px',
      },
    },
  },

  mentor: {
    display: 'block',
    marginRight: '20px',
    marginBottom: '20px',
    height: '120px',

    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      height: '80px',
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginRight: '15px',
      marginBottom: '15px',
    },

    last: {
      marginRight: 0,
    },
  },
}

// TODO: Remove on KissKiss.
ProjectInformationsBase.defaultProps = {
  info1: '517',
  info1Text: 'Contributeurs',
  info2: '8 jours',
  info2Text: 'Restants',
  info3: '70 658 €',
  info3Text: 'Sur 150 000 €',
  progress: 72,
  description:
    'Initié par la Philharmonie de Paris et parrainé par Lilian Thuram, le projet Démos (Dispositif d’éducation musicale et orchestrale à vocation sociale) s’adresse depuis 2010 à des jeunes de 7 à 12 ans qui n’ont jamais eu l’occasion d’apprendre ou de pratiquer la musique.',
  facebook: true,
  twitter: true,
  linkedin: true,
  coupDeCoeur: true,
  coupDeCoeurImg: 'https://placeimg.com/220/120/any',
  mentorsSize: 3,
}

export const ProjectInformations = mediaQueries(
  Radium(ProjectInformationsBase),
  {
    viewportIsTabletOrLess: true,
    viewportIsMobile: true,
  },
)
