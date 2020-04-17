import React from 'react'
import styled from 'styled-components'
import { Title } from '../../../components/typography/title'
import { pxToRem } from '../../../helpers/utils/typography'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol } from '../../../components/grid/grid'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const StyledMarger = styled.div`
  margin-top: ${pxToRem(50)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin-top: ${pxToRem(80)};
  }
`

const StyledHorizontalStrokeContainer = styled.div`
  margin-top: ${pxToRem(15)};
  margin-bottom: ${pxToRem(30)};

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    margin-top: ${pxToRem(20)};
    margin-bottom: ${pxToRem(40)};
  }
`

const StyledHorizontalStroke = styled.div`
  display: block;
  border: none;
  background-color: ${COLORS.font1};
  margin: 0 auto;
  width: ${pxToRem(30)};
  height: ${pxToRem(4)};

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    width: ${pxToRem(40)};
    height: ${pxToRem(6)};
  }
`

const HomePage = () => (
  <Container>
    <Grid>
      <GridCol>
        <StyledMarger>
          <Title className="k-u-align-center" modifier="tertiary" margin={false}>
            La communauté des projets engagés
          </Title>

          <StyledHorizontalStrokeContainer>
            <StyledHorizontalStroke />
          </StyledHorizontalStrokeContainer>

        </StyledMarger>
      </GridCol>
    </Grid>

  </Container>
)

export default HomePage
