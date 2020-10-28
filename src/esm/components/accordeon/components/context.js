import React from 'react';
export var Context = React.createContext({
  selectedItem: null,
  updateSelectedItem: function updateSelectedItem() {},
  isAnimated: true,
  componentId: 'accordeon'
});