import { useContext } from 'react';
import { Context } from './context';
export const LoggedOut = _ref => {
  let {
    children
  } = _ref;
  const {
    isLogged
  } = useContext(Context);
  if (isLogged) return null;
  return children;
};