import { createContext } from 'react';
export const Context = /*#__PURE__*/createContext({
  selectedItem: null,
  updateSelectedItem: () => {},
  componentId: 'accordeon',
  closeOnClick: false
});