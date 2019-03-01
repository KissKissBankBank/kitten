import { debounce } from './debounce'

export const throttle = (fn, msDelay) => {
  let context, args, timeout, throttling, more, result

  var whenDone = debounce(function() {
    more = throttling = false
  }, msDelay)

  return function() {
    context = this
    args = arguments

    let later = function() {
      timeout = null
      if (more) {
        result = fn.apply(context, args)
      }
      whenDone()
    }
    if (!timeout) timeout = setTimeout(later, msDelay)

    if (throttling) {
      more = true
    } else {
      throttling = true
      result = fn.apply(context, args)
    }
    whenDone()
    return result
  }
}
