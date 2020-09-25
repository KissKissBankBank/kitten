import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var SaveIcon = function SaveIcon(_ref) {
  var color = _ref.color,
      props = _objectWithoutProperties(_ref, ["color"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 17
  }, props), /*#__PURE__*/React.createElement("title", null, "Save"), /*#__PURE__*/React.createElement("path", {
    d: "M12 0l4 4v13H0V0h12zM8 9a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4-6H4v3h8V3z",
    fill: color,
    fillRule: "evenodd"
  }));
};
SaveIcon.propTypes = {
  color: PropTypes.string
};
SaveIcon.defaultProps = {
  color: '#222'
};