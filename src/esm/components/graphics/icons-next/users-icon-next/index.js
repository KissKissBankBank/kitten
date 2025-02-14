import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
export const UsersIconNext = _ref => {
  let {
    color,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    d: "M8.286 23c-1.98 0-3.818-.502-5.185-1.381-1.209-.777-2.148-1.917-2.148-3.333 0-1.416.939-2.557 2.147-3.334 1.368-.879 3.206-1.381 5.186-1.381s3.818.502 5.185 1.381c1.209.777 2.148 1.918 2.148 3.334 0 1.416-.939 2.556-2.148 3.333C12.104 22.498 10.266 23 8.286 23Zm-4.052-3.143.247.159h.018c.884.492 2.197.889 3.787.889 1.758 0 3.177-.486 4.052-1.048.994-.639 1.111-1.179 1.145-1.298l.077-.273-.077-.273c-.034-.12-.151-.66-1.145-1.298-.875-.563-2.294-1.048-4.052-1.048-1.758 0-3.177.485-4.052 1.048-.994.638-1.111 1.178-1.145 1.298l-.077.273.077.273c.034.119.151.659 1.145 1.298Zm4.052-8.381a4.19 4.19 0 1 1 0-8.382 4.19 4.19 0 0 1 0 8.382Zm2.095-4.19a2.096 2.096 0 1 0-4.192 0 2.096 2.096 0 0 0 4.192 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.542 12.289c1.198-.526 2.622-.817 4.128-.817 1.98 0 3.818.502 5.186 1.381 1.209.777 2.148 1.918 2.148 3.334 0 1.416-.939 2.556-2.148 3.333-1.312.844-3.058 1.34-4.946 1.379a5.259 5.259 0 0 0 .687-2.139c1.331-.134 2.41-.542 3.126-1.002.993-.639 1.11-1.179 1.144-1.298l.078-.273-.078-.273c-.034-.12-.151-.659-1.144-1.298-.875-.563-2.295-1.048-4.053-1.048a9.17 9.17 0 0 0-1.518.125 8.256 8.256 0 0 0-.599-.423 9.962 9.962 0 0 0-2.011-.981Zm.422-9.058a4.19 4.19 0 1 1 1.36 5.428c.1-.442.152-.901.152-1.373 0-1.551-.57-2.969-1.512-4.055Zm5.802 1.956a2.095 2.095 0 1 0-4.19 0 2.095 2.095 0 0 0 4.19 0Z",
    fill: color
  }));
};
UsersIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string
};
UsersIconNext.defaultProps = {
  color: '#222',
  title: null
};