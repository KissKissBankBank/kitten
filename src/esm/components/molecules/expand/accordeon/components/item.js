import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "id", "index", "className"];
import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getReactElementsByType } from '../../../../../helpers/react/react-elements';
import { Header } from './header';
import { Content } from './content';
import { Context } from './context';
export var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      selectedItem = _useContext.selectedItem;

  var header = getReactElementsByType({
    children: children,
    type: Header
  });
  var content = getReactElementsByType({
    children: children,
    type: Content
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Accordeon__item', className, {
      'k-Accordeon__item--expanded': selectedItem.includes(index)
    })
  }, props), header[0] && /*#__PURE__*/React.cloneElement(header[0], {
    id: id,
    index: index
  }), content[0] && /*#__PURE__*/React.cloneElement(content[0], {
    id: id,
    index: index
  }));
};
Item.propTypes = {
  id: PropTypes.string
};
Item.defaultProps = {
  id: null
};