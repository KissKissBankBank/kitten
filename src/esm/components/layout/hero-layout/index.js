import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"],
    _excluded2 = ["className", "children"],
    _excluded3 = ["className"],
    _excluded4 = ["children", "className"],
    _excluded5 = ["className"],
    _excluded6 = ["className", "hasTopMenu", "children"],
    _excluded7 = ["className"],
    _excluded8 = ["children", "className", "sticky"],
    _excluded9 = ["children", "className", "sticky"],
    _excluded10 = ["children", "className", "bgProps"],
    _excluded11 = ["children", "loading", "loaderComponent", "contentProps"];
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledLayout } from './styles';
import { Loader } from '../../graphics/animations/loader';
import { Grid, GridCol } from '../../layout/grid';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/get-react-elements';
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
      hasTopMenu = _ref6.hasTopMenu,
      children = _ref6.children,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded6);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__page', className, {
      'k-HeroLayout__page--hasTopMenu': hasTopMenu
    })
  }, props), children);
};

HeroLayout.Main.defaultProps = {
  hasTopMenu: false
};
HeroLayout.Main.propTypes = {
  hasTopMenu: PropTypes.bool
};

HeroLayout.Main.Image = function (_ref7) {
  var className = _ref7.className,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded7);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__page__background', className)
  }, props));
};

HeroLayout.Main.FirstAside = function (_ref8) {
  var _classNames;

  var children = _ref8.children,
      className = _ref8.className,
      sticky = _ref8.sticky,
      props = _objectWithoutPropertiesLoose(_ref8, _excluded8);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__firstAside', className, (_classNames = {}, _classNames["k-HeroLayout__sticky--" + sticky] = !!sticky && sticky != 'none', _classNames))
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Menu = HeroLayout.Main.FirstAside;

HeroLayout.Main.LastAside = function (_ref9) {
  var _classNames2;

  var children = _ref9.children,
      className = _ref9.className,
      sticky = _ref9.sticky,
      props = _objectWithoutPropertiesLoose(_ref9, _excluded9);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__lastAside', className, (_classNames2 = {}, _classNames2["k-HeroLayout__sticky--" + sticky] = !!sticky && sticky != 'none', _classNames2))
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Aside = HeroLayout.Main.LastAside;

var MainTopMenu = function MainTopMenu(_ref10) {
  var children = _ref10.children,
      className = _ref10.className,
      bgProps = _ref10.bgProps,
      props = _objectWithoutPropertiesLoose(_ref10, _excluded10);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, bgProps, {
    className: classNames('k-HeroLayout__topMenuBg k-HeroLayout__sticky--both', bgProps == null ? void 0 : bgProps.className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__insideTop"
  })), /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__topMenu k-HeroLayout__sticky--both', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-HeroLayout__sticky__insideTop"
  }, children)));
};

MainTopMenu.defaultProps = {
  bgProps: {}
};
MainTopMenu.propTypes = {
  bgProps: PropTypes.object
};

HeroLayout.Main.Content = function (_ref11) {
  var children = _ref11.children,
      loading = _ref11.loading,
      loaderComponent = _ref11.loaderComponent,
      contentProps = _ref11.contentProps,
      props = _objectWithoutPropertiesLoose(_ref11, _excluded11);

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
HeroLayout.Main.TopMenu = MainTopMenu;