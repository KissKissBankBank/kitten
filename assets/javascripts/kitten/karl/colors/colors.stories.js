import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Container } from '../../components/grid/container'
import { getColor, colorAliases } from '../../helpers/utils/get-color'
import { GUTTER } from '../../constants/grid-config'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: ${GUTTER}px;
  grid-template-columns: repeat(4, 1fr);
  margin: ${GUTTER}px 0;
`

const StyledBox = styled.div`
  position: relative;
  padding-top: 100%;
  background-color: ${({ colorObject }) => colorObject.colorValue};
  color: ${({ colorObject }) => colorObject.invertedColorValue};

  > code {
    position: absolute;
    left: 0.8rem;
    bottom: 0.5rem;
  }
`

storiesOf('Colors', module).add(
  'getColor()',
  withInfo('getColor() aliases')(() => {
    return (
      <Container>
        <StyledGrid>
          {Object.keys(colorAliases).map((item, index) => (
            <StyledBox key={item} colorObject={colorAliases[item]}>
              <code>
                '{item}'<br />
                {colorAliases[item].colorValue}
              </code>
            </StyledBox>
          ))}
        </StyledGrid>
      </Container>
    )
  }),
)
