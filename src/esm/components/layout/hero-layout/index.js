import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className"],
    _excluded4 = ["children", "className"],
    _excluded5 = ["className"],
    _excluded6 = ["className"],
    _excluded7 = ["children", "className"],
    _excluded8 = ["children", "className"],
    _excluded9 = ["children", "loading", "loaderComponent", "contentProps"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledLayout } from './styles';
import { Loader } from '../../graphics/animations/loader';
import { Grid, GridCol } from '../../layout/grid';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/react-elements';
export var HeroLayout = function HeroLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledLayout, _extends({
    className: classNames('k-HeroLayout', className)
  }, props), children);
};

var Hero = function Hero(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var imageElement = getReactElementsByType({
    children: children,
    type: HeroImage
  })[0];
  var otherChildren = getReactElementsWithoutType({
    children: children,
    type: HeroImage
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__hero', className)
  }, props), imageElement, /*#__PURE__*/React.createElement(Grid, {
    className: "k-HeroLayout__hero__grid"
  }, otherChildren));
};

var HeroImage = function HeroImage(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__hero__background', className)
  }, props));
};

var HeroBlock = function HeroBlock(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement(GridCol, _extends({
    className: classNames('k-HeroLayout__hero__block', className),
    col: "12",
    "col-s": "10",
    "offset-s": "1",
    "col-l": "8",
    "offset-l": "2"
  }, props), children);
};

HeroLayout.Promo = function (_ref5) {
  var className = _ref5.className,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__promo', className)
  }, props));
};

HeroLayout.Main = function (_ref6) {
  var className = _ref6.className,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__page', className)
  }, props));
};

HeroLayout.Main.Aside = function (_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded7);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__aside k-HeroLayout__sticky', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Menu = function (_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      props = _objectWithoutPropertiesLoose(_ref8, _excluded8);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__menu k-HeroLayout__sticky', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Content = function (_ref9) {
  var children = _ref9.children,
      loading = _ref9.loading,
      loaderComponent = _ref9.loaderComponent,
      contentProps = _ref9.contentProps,
      props = _objectWithoutPropertiesLoose(_ref9, _excluded9);

  return /*#__PURE__*/React.createElement(React.Fragment, null, loading && /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "k-HeroLayout__loading"
  }), loaderComponent), !loading && /*#__PURE__*/React.createElement("div", _extends({}, props, contentProps, {
    className: classNames('k-HeroLayout__content', contentProps.className)
  }), children));
};

HeroLayout.Main.Content.defaultProps = {
  contentProps: {},
  loading: false,
  loaderComponent: /*#__PURE__*/React.createElement(Loader, null)
};
HeroLayout.Main.Content.propTypes = {
  contentProps: PropTypes.object,
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node
};
HeroLayout.Hero = Hero;
HeroLayout.Hero.Image = HeroImage;
HeroLayout.Hero.Block = HeroBlock;