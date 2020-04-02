import React, { useRef, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'
import { cssPropertyDistributor } from '../../helpers/dom/css-property-distributor'
import { Container } from '../../components/grid/container'

const StyledP = styled.p`
  margin-top: 2rem;
`

const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid red;
  overflow: hidden;

  ${({ property }) =>
    property === 'height' &&
    css`
      max-width: 5em;
    `}
`

const ExampleComponent = ({ property, direction }) => {
  const element1 = useRef(null)
  const element2 = useRef(null)

  useEffect(() => {
    cssPropertyDistributor({
      elements: [element1.current, element2.current],
      property: property,
      direction: direction,
    })
  }, [])

  const directionText = {
    max: 'biggest',
    min: 'smallest',
  }

  return (
    <Container>
      <StyledP>
        Distributing the {directionText[direction]} element’s {property}:
      </StyledP>
      <StyledSpan ref={element1} property={property}>
        <strong>This is a very big element</strong>
      </StyledSpan>
      <br />
      <StyledSpan ref={element2}>
        <small>smol el</small>
      </StyledSpan>
    </Container>
  )
}

storiesOf('helpers/dom/cssPropertyDistributor', module)
  .add('distributing max width', () => {
    return <ExampleComponent property="width" direction="max" />
  })
  .add('distributing min width', () => {
    return <ExampleComponent property="width" direction="min" />
  })
  .add('distributing max height', () => {
    return <ExampleComponent property="height" direction="max" />
  })
  .add('distributing min height', () => {
    return <ExampleComponent property="height" direction="min" />
  })
