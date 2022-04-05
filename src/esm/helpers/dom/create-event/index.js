import { domElementHelper } from '../element-helper';
export var createEvent = function createEvent(eventName) {
  if (!domElementHelper.canUseDom()) return {};
  var event = new Event(eventName, {
    bubbles: true
  });
  return event;
};