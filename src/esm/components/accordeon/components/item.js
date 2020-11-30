import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './header';
import { Content } from './content';
import { getReactElementsByType } from '../../../helpers/react/react-elements';
export var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index;
  var header = getReactElementsByType({
    children: children,
    type: Header
  });
  var content = getReactElementsByType({
    children: children,
    type: Content
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "k-Accordeon__item"
  }, header[0] && React.cloneElement(header[0], {
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