import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './header';
import { Content } from './content';
import { getReactElementsByType } from '../../../../../helpers/react/react-elements';
import classNames from 'classnames';
export var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "id", "index", "className"]);

  var header = getReactElementsByType({
    children: children,
    type: Header
  });
  var content = getReactElementsByType({
    children: children,
    type: Content
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Accordeon__item', className)
  }, props), header[0] && React.cloneElement(header[0], {
    id: id,
    index: index
  }), content[0] && React.cloneElement(content[0], {
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