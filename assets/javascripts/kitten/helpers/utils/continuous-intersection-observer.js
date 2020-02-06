import React, { useRef, useEffect, useState } from 'react'
import useContinuousIntersectionObserver from './continuous-intersection-hook'

const ContinuousIntersectionObserver = ({ options, children, ...props }) => {
  const beforeEl = useRef(null)
  const afterEl = useRef(null)
  const targetEl = useRef(null)
  const consolidatedOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
    ...options,
  }

  const [isBeforeElIntersecting, setBeforeElIntersecting] = useState(false)
  const [isTargetElIntersecting, setTargetElIntersecting] = useState(false)
  const [isAfterElIntersecting, setAfterElIntersecting] = useState(false)

  const [isPartlyVisible, setPartlyVisible] = useState(false)
  const [visibleElement, setVisibleElement] = useState('before')

  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setBeforeElIntersecting(entry.isIntersecting)
        entry.isIntersecting && setVisibleElement('before')
      })
    },
    observedComponentRef: beforeEl,
    ...consolidatedOptions,
  })
  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setTargetElIntersecting(entry.isIntersecting)
      })
    },
    observedComponentRef: targetEl,
    ...consolidatedOptions,
  })
  useContinuousIntersectionObserver({
    onIntersect: entries => {
      entries.forEach(entry => {
        setAfterElIntersecting(entry.isIntersecting)
        entry.isIntersecting && setVisibleElement('after')
      })
    },
    observedComponentRef: afterEl,
    ...consolidatedOptions,
  })

  useEffect(() => {
    setPartlyVisible(false)

    if (isTargetElIntersecting) {
      setPartlyVisible(true)

      if (
        (!isBeforeElIntersecting && !isAfterElIntersecting) ||
        (isBeforeElIntersecting && isAfterElIntersecting)
      ) {
        setVisibleElement('target')
      }
    }
  }, [isBeforeElIntersecting, isTargetElIntersecting, isAfterElIntersecting])

  return (
    <>
      <div ref={beforeEl} {...props.beforeComponentProps} />
      <div ref={targetEl} {...props.targetComponentProps}>
        {children({
          isPartlyVisible: isPartlyVisible,
          isCompletelyVisible: visibleElement === 'target',
          visibleElement: visibleElement,
        })}
      </div>
      <div ref={afterEl} {...props.afterComponentProps} />
    </>
  )
}

export default ContinuousIntersectionObserver
