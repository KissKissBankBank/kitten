import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import useContinuousIntersectionObserver from '../../../helpers/utils/continuous-intersection-hook'
import { usePrevious } from '../../../helpers/utils/use-previous'

const StyledContainer = styled.section`
  color: white;
  background: black;
`

const StyledImage = styled.div`
  transition: transform 1s, opacity 0.3s;
  z-index: 0;

  transform-origin: 50% 50%;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }

  transform: scale(1);

  ${({ visibleElement }) => {
    switch (visibleElement) {
      case 'start':
        return css`
          opacity: 1;
          transform: scale(1.5);
        `
      case 'before':
        return css`
          opacity: 1;
        `
      case 'target':
        return css`
          opacity: 0.2;
        `
      case 'after':
        return css`
          opacity: 0;
        `
      case 'end':
        return css`
          display: none;
        `
    }
  }}
`

const sectionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  z-index: 1;
  position: relative;
`

const StyledTopSection = styled.div`
  min-height: 110vh;
  ${sectionStyles}
`

const StyledBottomSection = styled.div`
  min-height: 110vh;
  ${sectionStyles}

  transition: all .5s;
  transition-delay: 0.3s;

  ${({ visibleElement }) => {
    switch (visibleElement) {
      case 'start':
      case 'before':
        return css`
          opacity: 0;
        `
      case 'target':
        return css`
          opacity: 1;
          transition-delay: 0s;
        `
      case 'after':
      case 'end':
        return css`
          opacity: 0;
        `
    }
  }}
`

const AnimatedBackgroundTransition = () => {
  const beforeEl = useRef(null)
  const afterEl = useRef(null)
  const targetEl = useRef(null)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }

  const [isBeforeElIntersecting, setBeforeElIntersecting] = useState(false)
  const [isTargetElIntersecting, setTargetElIntersecting] = useState(false)
  const [isAfterElIntersecting, setAfterElIntersecting] = useState(false)

  const [visibleElement, setVisibleElement] = useState('start')

  const previousTargetTop = usePrevious(
    targetEl.current && targetEl.current.getBoundingClientRect().top,
  )

  const targetHeight = targetEl.current && targetEl.current.clientHeight

  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setTargetElIntersecting(entry.isIntersecting)
      })
    },
    observedComponentRef: targetEl,
    ...options,
  })
  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setBeforeElIntersecting(entry.isIntersecting)
      })
    },
    observedComponentRef: beforeEl,
    ...options,
  })
  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setAfterElIntersecting(entry.isIntersecting)
      })
    },
    observedComponentRef: afterEl,
    ...options,
  })

  useEffect(() => {
    if (targetEl.current.getBoundingClientRect().top >= 0) {
      setVisibleElement('start')
    }

    if (isTargetElIntersecting) {
      setVisibleElement('target')
    }
    if (isBeforeElIntersecting) {
      setVisibleElement('before')

      if (previousTargetTop < targetEl.current.getBoundingClientRect().top) {
        setVisibleElement('start')
      }
    }
    if (isAfterElIntersecting) {
      setVisibleElement('after')
    }

    if (targetEl.current.getBoundingClientRect().top < 0 - targetHeight / 2) {
      setVisibleElement('end')
    }
  }, [isBeforeElIntersecting, isAfterElIntersecting, isTargetElIntersecting])

  return (
    <StyledContainer>
      <StyledImage visibleElement={visibleElement}>
        <img src="http://placekitten.com/1200/800" alt="" />
      </StyledImage>
      <StyledTopSection>
        <h1>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum.
        </h1>
      </StyledTopSection>
      <div ref={beforeEl} style={{ scrollSnapAlign: 'none' }} />
      <div ref={targetEl} style={{ scrollSnapAlign: 'center' }}>
        <StyledBottomSection visibleElement={visibleElement}>
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
            facilisis in, egestas eget quam. Curabitur blandit tempus porttitor.
            Maecenas sed diam eget risus varius blandit sit amet non magna. Cras
            mattis consectetur purus sit amet fermentum. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </StyledBottomSection>
      </div>
      <div ref={afterEl} style={{ scrollSnapAlign: 'none' }} />
    </StyledContainer>
  )
}

export default AnimatedBackgroundTransition
