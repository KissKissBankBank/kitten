import React from 'react'
import { Container } from 'kitten/components/grid/container'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

export const ProjectDescription = () => (
  <Container>
    <Grid>
      <GridCol col="6" offset="3">
        <Marger top="8" bottom="8">
          <Marger top="2" bottom="2">
            <Title modifier="secondary" margin={false}>
              Donnons pour Démos !
            </Title>
          </Marger>

          <Marger top="2" bottom="4">
            <HorizontalStroke size="big" />
          </Marger>

          <Marger top="4" bottom="1">
            <Title modifier="quaternary" margin={false}>
              Démos, qu’est-ce que c’est ?
            </Title>
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              Initié par la Philharmonie de Paris et parrainé par Lilian Thuram,
              le projet Démos (Dispositif d’éducation musicale et orchestrale à
              vocation sociale) s’adresse depuis 2010 à des jeunes de 7 à 12 ans
              qui n’ont jamais eu l’occasion d’apprendre ou de pratiquer la
              musique.
            </Paragraph>
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              Les enfants sont rassemblés pendant trois ans en orchestres
              symphoniques, encadrés par des musiciens professionnels et des
              animateurs du champ social de leur quartier.
            </Paragraph>
          </Marger>

          <Marger top="4" bottom="4">
            <img
              src="https://placeimg.com/850/480/any"
              style={{ display: 'block', width: '100%' }}
            />
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              Pendant les 3 ans du projet, un instrument de musique leur est
              confié. Ils le garderont s’ils choisissent de continuer la
              musique.
            </Paragraph>
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              Chaque année, les enfants se produisent en concert dans la Grande
              salle Pierre Boulez de la Philharmonie de Paris, devant plus de 2
              400 personnes, et en régions.
            </Paragraph>
          </Marger>

          <Marger top="4" bottom="1">
            <Title modifier="quaternary" margin={false}>
              Démos, une pédagogie innovante
            </Title>
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              La pédagogie de Démos repose sur une approche collective de la
              musique.
            </Paragraph>
          </Marger>

          <Marger top="1" bottom="1">
            <Paragraph margin={false}>
              Avant tout apprentissage théorique, l’enfant s’initie d’abord à la
              musique par le chant et la danse, avec le corps comme instrument
              premier. Il accède ensuite naturellement à l’instrument de
              musique, qu’il choisit au sein du parc instrumental de l’orchestre
              symphonique.
            </Paragraph>
          </Marger>
        </Marger>
      </GridCol>
    </Grid>
  </Container>
)
