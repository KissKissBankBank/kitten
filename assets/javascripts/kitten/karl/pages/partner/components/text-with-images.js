import React, { memo } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: ${pxToRem(40)};
  grid-row-gap: ${pxToRem(40)};

  @media (min-width: ${ScreenConfig.S.min}px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: ${pxToRem(50)};
  }

  @media (min-width: ${ScreenConfig.L.min}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${pxToRem(15)};
  grid-row-gap: ${pxToRem(15)};

  @media (min-width: ${ScreenConfig.L.min}px) {
    grid-column-gap: ${pxToRem(20)};
    grid-row-gap: ${pxToRem(20)};
  }
`

const StyledTitle = styled(Title)`
  text-align: center;

  @media (min-width: ${ScreenConfig.S.min}px) {
    text-align: left;
  }
`

const ImageCard = () => (
  <div style={{ paddingBottom: '100%', background: '#404040' }} />
)

const TextWithImages = () => (
  <Marger top={{ default: 8, fromS: 10 }} bottom={{ default: 8, fromS: 10 }}>
    <Container>
      <Grid>
        <GridCol col-xs="10" offset-xs="1">
          <StyledGrid>
            <div>
              <StyledTitle tag="h2" modifier="secondary" margin={false}>
                Nous travaillons déjà ensemble
              </StyledTitle>

              <Marger top="4" className="k-u-hidden@xs-down">
                <Button as="a" href="#" modifier="helium" big>
                  Rejoignez-nous
                </Button>
              </Marger>
            </div>

            <div>
              <StyledImagesGrid>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </StyledImagesGrid>

              <Marger top={2} className="k-u-align-center">
                <Text size="tiny" weight="regular" color="font1">
                  Marque ou entreprise
                </Text>
              </Marger>
            </div>

            <div>
              <StyledImagesGrid>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </StyledImagesGrid>

              <Marger top={2} className="k-u-align-center">
                <Text size="tiny" weight="regular" color="font1">
                  Collectivité territoriale ou réseau
                </Text>
              </Marger>
            </div>

            <div>
              <StyledImagesGrid>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </StyledImagesGrid>

              <Marger top={2} className="k-u-align-center">
                <Text size="tiny" weight="regular" color="font1">
                  Média ou agence
                </Text>
              </Marger>
            </div>

            <div>
              <StyledImagesGrid>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </StyledImagesGrid>

              <Marger top={2} className="k-u-align-center">
                <Text size="tiny" weight="regular" color="font1">
                  Marque ou Association ou fondation
                </Text>
              </Marger>
            </div>

            <div>
              <StyledImagesGrid>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </StyledImagesGrid>

              <Marger top={2} className="k-u-align-center">
                <Text size="tiny" weight="regular" color="font1">
                  École ou incubateur
                </Text>
              </Marger>
            </div>
          </StyledGrid>

          <Marger top="4" className="k-u-hidden@s-up">
            <Button as="a" href="#" modifier="helium" big fluid>
              Vous aussi, rejoignez-nous
            </Button>
          </Marger>
        </GridCol>
      </Grid>
    </Container>
  </Marger>
)

export default memo(TextWithImages)
