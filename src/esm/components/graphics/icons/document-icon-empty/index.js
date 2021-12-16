import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "title"];
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
var StyledDocumentIcon = styled.svg.withConfig({
  displayName: "document-icon-empty__StyledDocumentIcon",
  componentId: "sc-1wxnwfw-0"
})(["path.kiss-DocumentIcon__shadow{fill:#000 !important;opacity:0.05;}path.kiss-DocumentIcon__bg{fill:#fff !important;}path.kiss-DocumentIcon__fold{fill:#000 !important;opacity:0.1;}path.kiss-DocumentIcon__icon{fill:#000 !important;}"]);
export var DocumentIconEmpty = function DocumentIconEmpty(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledDocumentIcon, _extends({
    width: "25",
    height: "33",
    viewBox: "0 0 25 33",
    xmlns: "http://www.w3.org/2000/svg",
    className: classNames('k-ColorSvg', className)
  }, props), title && /*#__PURE__*/React.createElement("title", null, title), /*#__PURE__*/React.createElement("path", {
    className: "kiss-DocumentIcon__shadow",
    d: "M3 3h 15l 7 7V33H3L3 3z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "kiss-DocumentIcon__bg",
    d: "M0 0h15l7 7V30H0L0 0z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "kiss-DocumentIcon__fold",
    d: "M15 0v7h7L15 0z"
  }), children);
};
DocumentIconEmpty.propTypes = {
  title: PropTypes.string
};
DocumentIconEmpty.defaultProps = {
  title: ''
};