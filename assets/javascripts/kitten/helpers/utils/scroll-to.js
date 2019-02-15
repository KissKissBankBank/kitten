import { domElementHelper } from '../../helpers/dom/element-helper'

// Source: https://gist.github.com/james2doyle/5694700

const move = amount => {
  document.documentElement.scrollTop = amount
  document.body.parentNode.scrollTop = amount
  document.body.scrollTop = amount
}

const position = () =>
  document.documentElement.scrollTop ||
  document.body.parentNode.scrollTop ||
  document.body.scrollTop

// Easing function: http://goo.gl/5HLl8
const easeInOutQuad = (time, b, c, d) => {
  let t = time / (d / 2)

  if (t < 1) return (c / 2) * t * t + b
  t -= 1
  return (-c / 2) * (t * (t - 2) - 1) + b
}

const requestAnimFrame = (() => {
  if (!domElementHelper.canUseDom()) return () => {}

  const callbackTimer = callback => {
    window.setTimeout(callback, 1000 / 60)
  }

  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    callbackTimer
  )
})()

export const scrollTo = (elementTo, duration) => {
  const to = elementTo.offsetTop
  const start = position()
  const change = to - start
  const increment = 20
  const defaultDuration = 500
  let currentTime = 0

  const durationTime =
    typeof duration === 'undefined' ? defaultDuration : duration

  const animateScroll = () => {
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, durationTime)

    move(val)

    if (currentTime < durationTime) {
      requestAnimFrame(animateScroll)
    }
  }

  animateScroll()
}

export const scrollToTop = duration => scrollTo({ offsetTop: 0 }, duration)
