import React, { Component } from 'react'
import styled from 'styled-components'
import { Marger } from '../../../../components/layout/marger'
import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Title } from '../../../../components/typography/title'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${pxToRem(40)};
  grid-row-gap: ${pxToRem(50)};
`

const StyledImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content;
  grid-column-gap: ${pxToRem(20)};
  grid-row-gap: ${pxToRem(20)};
`

class TextWithImages extends Component {
  render() {
    return (
      <Marger top="10" bottom="10">
        <Container>
          <Grid>
            <GridCol col-l="10" offset-l="1">
              <StyledGrid>
                <div>
                  <Marger bottom="4">
                    <Title tag="h1" modifier="secondary" margin={false}>
                      Nous travaillons déjà ensemble
                    </Title>
                  </Marger>

                  <Button as="a" href="#" modifier="helium" big>
                    Vous aussi, rejoignez-nous
                  </Button>
                </div>

                <StyledImagesGrid>
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                </StyledImagesGrid>

                <StyledImagesGrid>
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                </StyledImagesGrid>

                <StyledImagesGrid>
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                </StyledImagesGrid>

                <StyledImagesGrid>
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                </StyledImagesGrid>

                <StyledImagesGrid>
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                  <div style={{ height: 100, background: '#404040' }} />
                </StyledImagesGrid>
              </StyledGrid>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

export default TextWithImages
