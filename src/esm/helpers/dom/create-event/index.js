import { domElementHelper } from '../element-helper';
export const createEvent = eventName => {
  if (!domElementHelper.canUseDom()) return {};
  const event = new Event(eventName, {
    bubbles: true
  });
  return event;
};