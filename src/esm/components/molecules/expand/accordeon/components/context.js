import { createContext } from 'react';
export var Context = createContext({
  selectedItem: null,
  updateSelectedItem: function updateSelectedItem() {},
  componentId: 'accordeon',
  closeOnClick: false
});