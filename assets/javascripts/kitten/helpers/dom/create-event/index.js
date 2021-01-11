import domElementHelper from '../element-helper'

/** https://stackoverflow.com/questions/42706536/correct-way-to-dispatch-event-in-ie-11 */
/** This allows us to dispatch browser events in old IE and newer browsers */
export const createEvent = eventName => {
  //Needed for IE Support: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent#Browser_Compatibility
  //https://stackoverflow.com/a/49071358/79677
  let event
  if (typeof Event === 'function') {
    event = new Event(eventName, { bubbles: true })
  } else {
    if (domElementHelper.canUseDom()) {
      event = document.createEvent('Event')
      event.initEvent(eventName, true, true)
    }
  }
  return event
}
