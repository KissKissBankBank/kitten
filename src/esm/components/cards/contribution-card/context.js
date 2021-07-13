import { createContext } from 'react';
export var Context = createContext({
  isInputEmpty: true,
  setEmptyInput: function setEmptyInput() {}
});