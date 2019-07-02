import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Container } from '../../components/grid/container'
import { colorAliases } from '../../constants/colors-config'
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
  background-color: ${({ colorValue }) => colorValue};

  > code {
    position: absolute;
    left: 0.5rem;
    bottom: 0.5rem;
    background: white;
    padding: 0 0.3rem;

    ::-moz-selection {
      background-color: ${({ colorValue }) => colorValue};
    }

    ::selection {
      background-color: ${({ colorValue }) => colorValue};
    }
  }
`

storiesOf('Colors', module).add(
  'COLOR',
  withInfo('COLOR names')(() => {
    return (
      <Container>
        <StyledGrid>
          {Object.keys(colorAliases).map((item, index) => (
            <StyledBox key={item} colorValue={colorAliases[item]()}>
              <code>
                COLORS.{item}()
                <br />
                {colorAliases[item]()}
              </code>
            </StyledBox>
          ))}
        </StyledGrid>
      </Container>
    )
  }),
)
