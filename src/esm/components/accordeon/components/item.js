import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from './header';
import { Content } from './content';
import { getReactElementsByType } from '../../../helpers/react/react-elements';
export var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id;
  var header = getReactElementsByType({
    children: children,
    type: Header
  });
  var content = getReactElementsByType({
    children: children,
    type: Content
  });
  return /*#__PURE__*/React.createElement(Fragment, null, header[0] && React.cloneElement(header[0], {
    id: id
  }), content[0] && React.cloneElement(content[0], {
    id: id
  }));
};
Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Item.defaultProps = {
  id: null
};