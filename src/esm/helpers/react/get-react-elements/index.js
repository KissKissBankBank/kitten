import React from 'react';
import isFunction from 'lodash/fp/isFunction';
import filter from 'lodash/fp/filter';
export const getReactElementsByType = _ref => {
  let {
    children,
    type
  } = _ref;
  return React.Children.toArray(children).filter(child => child && child.type === type);
};
export const getReactElementsWithoutType = _ref2 => {
  let {
    children,
    type
  } = _ref2;
  return React.Children.toArray(children).filter(child => child && child.type !== type);
};
export const getReactElementsByTypeArray = _ref3 => {
  let {
    children,
    typeArray
  } = _ref3;
  return filter(child => child && (typeArray.includes(child.type) || isFunction(child)))(children);
};
export const getReactElementsWithoutTypeArray = _ref4 => {
  let {
    children,
    typeArray
  } = _ref4;
  return filter(child => child && (!typeArray.includes(child.type) || isFunction(child)))(children);
};