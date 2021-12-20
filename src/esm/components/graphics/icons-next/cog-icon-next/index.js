import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "title"];
import React from 'react';
import PropTypes from 'prop-types';
export var CogIconNext = function CogIconNext(_ref) {
  var color = _ref.color,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "23",
    height: "23",
    viewBox: "0 0 23 23",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M11.222 15.046a4.037 4.037 0 1 0 0-8.074 4.037 4.037 0 0 0 0 8.074Zm0-5.871a1.835 1.835 0 1 1 0 3.67 1.835 1.835 0 0 1 0-3.67Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.501 12.408a2.216 2.216 0 0 0-.554 2.837l1.468 2.543c.55.95 1.72 1.348 2.734.928l1.1-.448c.365.249.748.47 1.146.661l.169 1.185a2.232 2.232 0 0 0 2.208 1.905h2.917a2.203 2.203 0 0 0 2.181-1.89l.169-1.185c.398-.192.78-.412 1.145-.66l1.1.447a2.214 2.214 0 0 0 2.746-.947l1.468-2.543a2.218 2.218 0 0 0-.554-2.84l-.94-.735a8.34 8.34 0 0 0 0-1.32l.94-.735a2.216 2.216 0 0 0 .554-2.837L20.03 4.231a2.191 2.191 0 0 0-2.734-.928l-1.101.448a8.866 8.866 0 0 0-1.145-.661l-.169-1.185A2.232 2.232 0 0 0 12.673 0H9.755a2.203 2.203 0 0 0-2.18 1.89l-.17 1.185c-.397.192-.78.412-1.144.66L5.16 3.289a2.214 2.214 0 0 0-2.745.947L.947 6.778a2.218 2.218 0 0 0 .554 2.84l.94.735a8.372 8.372 0 0 0 0 1.32l-.94.735Zm3.116-1.399c.002-.538.07-1.074.201-1.596l-1.96-1.538 1.469-2.543 2.308.925a6.606 6.606 0 0 1 2.752-1.593l.367-2.462h2.936l.367 2.462c1.04.298 1.99.846 2.767 1.597l2.309-.925L19.6 7.879l-1.96 1.538a6.398 6.398 0 0 1 0 3.193l1.96 1.537-1.468 2.543-2.309-.924a6.606 6.606 0 0 1-2.767 1.589l-.367 2.462H9.754l-.367-2.462a6.605 6.605 0 0 1-2.767-1.597l-2.308.925-1.468-2.543 1.96-1.538a6.606 6.606 0 0 1-.187-1.593Z",
    fill: color
  }));
};
CogIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
CogIconNext.defaultProps = {
  color: '#222',
  title: null
};