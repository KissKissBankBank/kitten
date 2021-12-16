import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "menu", "menuProps", "fullWidth", "contentProps", "loading", "loaderComponent"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledLayout } from './styles';
import { Loader } from '../../../components/atoms/loader';
export var DeskLayout = function DeskLayout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      menu = _ref.menu,
      menuProps = _ref.menuProps,
      fullWidth = _ref.fullWidth,
      contentProps = _ref.contentProps,
      loading = _ref.loading,
      loaderComponent = _ref.loaderComponent,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledLayout, _extends({
    className: classNames('k-DeskLayout__wrapper', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-DeskLayout"
  }, /*#__PURE__*/React.createElement("div", _extends({}, menuProps, {
    className: classNames('k-DeskLayout__menu', menuProps.className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DeskLayout__menu__inside"
  }, menu)), loading && /*#__PURE__*/React.createElement("div", {
    className: "k-DeskLayout__loading"
  }, loaderComponent), !loading && /*#__PURE__*/React.createElement("div", _extends({}, contentProps, {
    className: classNames('k-DeskLayout__content', contentProps.className, {
      'k-DeskLayout__content--fullWidth': fullWidth
    })
  }), children)));
};
DeskLayout.defaultProps = {
  menu: null,
  menuProps: {},
  contentProps: {},
  fullWidth: false,
  loading: false,
  loaderComponent: /*#__PURE__*/React.createElement(Loader, null)
};
DeskLayout.propTypes = {
  menu: PropTypes.node,
  menuProps: PropTypes.object,
  contentProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node
};