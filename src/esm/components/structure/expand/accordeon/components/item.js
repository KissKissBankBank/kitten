import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getReactElementsByType } from '../../../../../helpers/react/get-react-elements';
import { Header } from './header';
import { Content } from './content';
import { Context } from './context';
export const Item = _ref => {
  let {
    children,
    id,
    index,
    className,
    ...props
  } = _ref;
  const {
    selectedItem
  } = useContext(Context);
  const header = getReactElementsByType({
    children,
    type: Header
  });
  const content = getReactElementsByType({
    children,
    type: Content
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Accordeon__item', className, {
      'k-Accordeon__item--expanded': selectedItem.includes(index)
    })
  }, props), header[0] && /*#__PURE__*/React.cloneElement(header[0], {
    id,
    index
  }), content[0] && /*#__PURE__*/React.cloneElement(content[0], {
    id,
    index
  }));
};
Item.propTypes = {
  id: PropTypes.string
};
Item.defaultProps = {
  id: null
};