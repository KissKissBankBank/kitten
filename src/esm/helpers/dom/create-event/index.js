export var createEvent = function createEvent(eventName) {
  var event = new Event(eventName, {
    bubbles: true
  });
  return event;
};