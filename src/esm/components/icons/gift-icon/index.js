import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var GiftIcon = function GiftIcon(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["color", "title"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 22,
    height: 23,
    viewBox: "0 0 22 23",
    xmlns: "http://www.w3.org/2000/svg",
    fill: color
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M0 8.161v3.71c0 .39.106.774.305 1.112.2.337.487.618.833.813V23h19.724v-9.204c.346-.195.633-.476.833-.813.2-.338.305-.722.305-1.112v-3.71c0-.59-.24-1.156-.667-1.574a2.302 2.302 0 00-1.609-.652h-.459a4.006 4.006 0 00-.157-3.984A4.132 4.132 0 0017.59.52 4.246 4.246 0 0015.552 0c-.884 0-1.755.201-2.545.587A5.662 5.662 0 0011 2.226 5.662 5.662 0 008.993.587 5.795 5.795 0 006.448 0C5.734 0 5.033.18 4.41.522A4.133 4.133 0 002.892 1.95a4.006 4.006 0 00-.157 3.985h-.46c-.603 0-1.182.234-1.608.651A2.201 2.201 0 000 8.161zm2.276 0h7.586v3.71H2.276v-3.71zm1.138 12.613v-6.677h6.448v6.677H3.414zm15.172 0h-6.448v-6.677h6.448v6.677zm1.138-8.903h-7.586v-3.71h7.586v3.71zm-4.172-9.645c.503 0 .985.195 1.34.543.357.348.556.82.556 1.312 0 .492-.2.963-.555 1.311a1.919 1.919 0 01-1.341.543h-3.414v-.37c0-.886.36-1.735 1-2.361a3.453 3.453 0 012.414-.978zm-11 1.855c0-.492.2-.964.555-1.312a1.918 1.918 0 011.341-.543c.906 0 1.774.352 2.414.978.64.626 1 1.475 1 2.36v.371H6.448c-.503 0-.985-.195-1.34-.543a1.834 1.834 0 01-.556-1.311z"
  }));
};
GiftIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
GiftIcon.defaultProps = {
  color: '#fff',
  title: null
};