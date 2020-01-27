import React from 'react'
import withContinuousIntersectionObserver from '../../hoc/with-continuous-intersection-observer'
import AnimatedNumbers from './animated-numbers'

const AnimatedNumbersHoc = withContinuousIntersectionObserver(AnimatedNumbers)

export default AnimatedNumbersHoc
