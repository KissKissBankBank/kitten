import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
export var LoginIcon = function LoginIcon(_ref) {
  var title = _ref.title,
      color = _ref.color,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["title", "color", "width", "height"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 17",
    width: width,
    height: height
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "m39.2218974 37.5471768c-.3890011-2.4673578-2.4326492-4.3329258-4.7634739-5.022914 1.0015386-1.115581 1.5345259-2.9351498 1.5365146-4.1687287.0029832-1.8911677-1.5484472-3.8555341-3.5258696-3.8555341s-3.5288527 1.9643664-3.5258696 3.8555341c.0019887 1.2389788.5393512 3.0689475 1.5494416 4.1833284-2.3103405.701388-4.3285325 2.5581563-4.7147494 5.0083143-.1598961 1.0147827 1.0178466 1.6883712 1.7799387 2.0333653 1.4951485.6765884 3.2028953.9069845 4.8296996.9189842 1.646493.0119998 3.3679622-.2021965 4.8955275-.8495854.8006741-.3395942 2.1080838-1.0291824 1.9388405-2.1027641z",
    fill: color,
    fillRule: "evenodd",
    transform: "translate(-25 -24)"
  }));
};
LoginIcon.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
LoginIcon.defaultProps = {
  color: '#fff',
  title: null,
  width: 15,
  height: 17
};