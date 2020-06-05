import React, { memo } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button, FLUID } from '../../../../components/buttons/button/button'
import { ScreenConfig } from '../../../../constants/screen-config'
import { IconList } from '../../../../components/lists/icon-list'

const StyledGrid = styled(Grid)`
  align-items: center;
`

const StyledTitle = styled(Title)`
  text-align: center;

  @media (min-width: ${ScreenConfig.L.min}px) {
    text-align: left;
  }
`

const StyledButton = styled(props => <Button as="a" {...props} />)`
  @media (max-width: ${ScreenConfig.XS.max}px) {
    ${FLUID}
  }
`

const TextWithIconList = () => (
  <Marger top={{ default: 8, fromS: 10 }} bottom={{ default: 8, fromS: 10 }}>
    <Container>
      <StyledGrid>
        <GridCol col-xs="10" offset-xs="1" col-l="4">
          <Marger bottom={{ default: 3, fromL: 2 }}>
            <StyledTitle tag="h2" modifier="secondary" margin={false}>
              Les bonnes raisons de nous rejoindre
            </StyledTitle>
          </Marger>

          <Marger bottom="4" className="k-u-hidden@m-down">
            <HorizontalStroke size="big" customSize={{ height: 6 }} />
          </Marger>

          <Marger top="4" className="k-u-hidden@m-down">
            <Button as="a" href="#" modifier="helium" big>
              Devenir partenaire
            </Button>
          </Marger>
        </GridCol>

        <GridCol col-xs="10" offset-xs="1" col-l="5">
          <IconList>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
              }}
            >
              <Text color="font1" weight="light">
                Donnez <Text weight="regular">de la visibilité et du sens</Text>{' '}
                à votre marque, entreprise, collectivité, association,
                fondation...
              </Text>
            </IconList.Item>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#CAF4FE', borderColor: '#CAF4FE' },
              }}
            >
              <Text color="font1" weight="light">
                <Text weight="regular">Fédérez votre communauté</Text> ou vos
                collaborateurs en donnant naissance à des projets impactants
              </Text>
            </IconList.Item>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
              }}
            >
              <Text color="font1" weight="light">
                Touchez de <Text weight="regular">nouveaux publics</Text>
              </Text>
            </IconList.Item>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#CAF4FE', borderColor: '#CAF4FE' },
              }}
            >
              <Text color="font1" weight="light">
                Repérez, accompagnez et{' '}
                <Text weight="regular">révélez les talents</Text> de demain dans
                les domaines qui vous tiennent à coeur
              </Text>
            </IconList.Item>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#FFEBE0', borderColor: '#FFEBE0' },
              }}
            >
              <Text color="font1" weight="light">
                Enrichissez votre image grâce aux{' '}
                <Text weight="regular">
                  valeurs citoyennes, positives et collaboratives
                </Text>{' '}
                du crowdfunding
              </Text>
            </IconList.Item>
            <IconList.Item
              iconProps={{
                style: { backgroundColor: '#CAF4FE', borderColor: '#CAF4FE' },
              }}
            >
              <Text color="font1" weight="light">
                Dynamisez l’économie locale en soutenant{' '}
                <Text weight="regular">
                  les créateurs et entrepreneurs de votre territoire
                </Text>
              </Text>
            </IconList.Item>
          </IconList>

          <Marger top="4" className="k-u-align-center k-u-hidden@l-up">
            <StyledButton href="#" modifier="helium" big>
              Devenir partenaire
            </StyledButton>
          </Marger>
        </GridCol>
      </StyledGrid>
    </Container>
  </Marger>
)

export default memo(TextWithIconList)
