import React, { useRef, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { cssPropertyDistributor } from '../../helpers/dom/css-property-distributor'
import { Container } from '../../components/grid/container'

const StyledSpan = styled.span`
  display: inline-block;
  border: 1px solid red;
  overflow: hidden;
`

const MaxWidthComponent = () => {
  const element1 = useRef(null)
  const element2 = useRef(null)

  useEffect(() => {
    cssPropertyDistributor({
      elements: [element1.current, element2.current],
      property: 'width',
      direction: 'max',
    })
  }, [])

  return (
    <Container>
      <StyledSpan ref={element1}>
        <strong>This is a very big wide element</strong>
      </StyledSpan>
      <br />
      <StyledSpan ref={element2}>
        <small>smol el</small>
      </StyledSpan>
    </Container>
  )
}

const MinWidthComponent = () => {
  const element1 = useRef(null)
  const element2 = useRef(null)

  useEffect(() => {
    cssPropertyDistributor({
      elements: [element1.current, element2.current],
      property: 'width',
      direction: 'min',
    })
  }, [])

  return (
    <Container>
      <StyledSpan ref={element1}>
        <strong>This is a very big wide element</strong>
      </StyledSpan>
      <br />
      <StyledSpan ref={element2}>
        <small>smol el</small>
      </StyledSpan>
    </Container>
  )
}

const MaxHeightComponent = () => {
  const element1 = useRef(null)
  const element2 = useRef(null)

  useEffect(() => {
    cssPropertyDistributor({
      elements: [element1.current, element2.current],
      property: 'height',
      direction: 'max',
    })
  }, [])

  return (
    <Container>
      <StyledSpan ref={element1}>
        <strong>
          This
          <br />
          is
          <br />a<br />
          very
          <br />
          big
          <br />
          high
          <br />
          element
        </strong>
      </StyledSpan>
      <br />
      <StyledSpan ref={element2}>
        <small>smol el</small>
      </StyledSpan>
    </Container>
  )
}

const MinHeightComponent = () => {
  const element1 = useRef(null)
  const element2 = useRef(null)

  useEffect(() => {
    cssPropertyDistributor({
      elements: [element1.current, element2.current],
      property: 'height',
      direction: 'min',
    })
  }, [])

  return (
    <Container>
      <StyledSpan ref={element1}>
        <strong>
          This
          <br />
          is
          <br />a<br />
          very
          <br />
          big
          <br />
          high
          <br />
          element
        </strong>
      </StyledSpan>
      <br />
      <StyledSpan ref={element2}>
        <small>smol el</small>
      </StyledSpan>
    </Container>
  )
}

storiesOf('helpers/dom/cssPropertyDistributor', module)
  .add('distributing max width', MaxWidthComponent)
  .add('distributing min width', MinWidthComponent)
  .add('distributing max height', MaxHeightComponent)
  .add('distributing min height', MinHeightComponent)
