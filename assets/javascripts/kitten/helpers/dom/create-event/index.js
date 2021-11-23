export const createEvent = eventName => {
  const event = new Event(eventName, { bubbles: true })
  return event
}
