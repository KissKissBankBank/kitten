import React, { useRef, useEffect, useState } from 'react'
import useContinuousIntersectionObserver from '../helpers/utils/continuous-intersection-hook'

const withContinuousIntersectionObserver = WrappedComponent => props => {
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

  const [isPartlyVisible, setPartlyVisible] = useState(false)
  const [isCompletelyVisible, setCompletelyVisible] = useState(false)
  const [visibleElement, setVisibleElement] = useState('before')

  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setBeforeElIntersecting(entry.isIntersecting)
        entry.isIntersecting && setVisibleElement('before')
      })
    },
    observedComponentRef: beforeEl,
    ...options,
  })
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
        setAfterElIntersecting(entry.isIntersecting)
        entry.isIntersecting && setVisibleElement('after')
      })
    },
    observedComponentRef: afterEl,
    ...options,
  })

  useEffect(() => {
    setCompletelyVisible(false)
    setPartlyVisible(false)

    if (isTargetElIntersecting) {
      setPartlyVisible(true)

      if (
        (!isBeforeElIntersecting && !isAfterElIntersecting) ||
        (isBeforeElIntersecting && isAfterElIntersecting)
      ) {
        setVisibleElement('target')
        setCompletelyVisible(true)
      }
    }
  }, [isBeforeElIntersecting, isTargetElIntersecting, isAfterElIntersecting])

  return (
    <>
      <div ref={beforeEl} {...props.beforeComponentProps} />
      <div ref={targetEl} {...props.targetComponentProps}>
        <WrappedComponent
          {...props}
          isPartlyVisible={isPartlyVisible}
          isCompletelyVisible={isCompletelyVisible}
          visibleElement={visibleElement}
          isBeforeVisible={isPartlyVisible && visibleElement === 'before'}
          isAfterVisible={isPartlyVisible && visibleElement === 'after'}
        />
      </div>
      <div ref={afterEl} {...props.afterComponentProps} />
    </>
  )
}

export default withContinuousIntersectionObserver
