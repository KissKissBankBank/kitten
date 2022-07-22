"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.HeroLayout = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _loader = require("../../graphics/animations/loader");

var _grid = require("../../layout/grid");

var _getReactElements = require("../../../helpers/react/get-react-elements");

const HeroLayout = _ref => {
  let {
    className,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.StyledLayout, (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout', className)
  }, props), children);
};

exports.HeroLayout = HeroLayout;

const Hero = _ref2 => {
  let {
    className,
    children,
    ...props
  } = _ref2;
  const imageElement = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: HeroImage
  })[0];
  const otherChildren = (0, _getReactElements.getReactElementsWithoutType)({
    children: children,
    type: HeroImage
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__hero', className)
  }, props), imageElement, /*#__PURE__*/_react.default.createElement(_grid.Grid, {
    className: "k-HeroLayout__hero__grid"
  }, otherChildren));
};

const HeroImage = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__hero__background', className)
  }, props));
};

const HeroBlock = _ref4 => {
  let {
    children,
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement(_grid.GridCol, (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__hero__block', className),
    col: "12",
    "col-s": "10",
    "offset-s": "1",
    "col-l": "8",
    "offset-l": "2"
  }, props), children);
};

HeroLayout.Promo = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__promo', className)
  }, props));
};

HeroLayout.Main = _ref6 => {
  let {
    className,
    hasTopMenu = false,
    children,
    ...props
  } = _ref6;
  const TopMenuElement = (0, _getReactElements.getReactElementsByType)({
    children: children,
    type: MainTopMenu
  })[0];
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__page', className, {
      'k-HeroLayout__page--hasTopMenu': hasTopMenu || !!TopMenuElement
    })
  }, props), children);
};

HeroLayout.Main.defaultProps = {
  hasTopMenu: false
};
HeroLayout.Main.propTypes = {
  hasTopMenu: _propTypes.default.bool
};

HeroLayout.Main.Image = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__page__background', className)
  }, props));
};

HeroLayout.Main.FirstAside = _ref8 => {
  let {
    children,
    className,
    sticky,
    ...props
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__firstAside', className, {
      ["k-HeroLayout__sticky--" + sticky]: !!sticky && sticky != 'none'
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Menu = HeroLayout.Main.FirstAside;

HeroLayout.Main.LastAside = _ref9 => {
  let {
    children,
    className,
    sticky,
    ...props
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__lastAside', className, {
      ["k-HeroLayout__sticky--" + sticky]: !!sticky && sticky != 'none'
    })
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HeroLayout__sticky__inside"
  }, children));
};

HeroLayout.Main.Aside = HeroLayout.Main.LastAside;

const MainTopMenu = _ref10 => {
  let {
    children,
    className,
    bgProps,
    ...props
  } = _ref10;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, bgProps, {
    className: (0, _classnames.default)('k-HeroLayout__topMenuBg k-HeroLayout__sticky--both', bgProps == null ? void 0 : bgProps.className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HeroLayout__sticky__insideTop"
  })), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-HeroLayout__topMenu k-HeroLayout__sticky--both', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-HeroLayout__sticky__insideTop"
  }, children)));
};

MainTopMenu.defaultProps = {
  bgProps: {}
};
MainTopMenu.propTypes = {
  bgProps: _propTypes.default.object
};

HeroLayout.Main.Content = _ref11 => {
  let {
    children,
    loading,
    loaderComponent,
    contentProps,
    ...props
  } = _ref11;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: "k-HeroLayout__loading"
  }), loaderComponent), !loading && /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, contentProps, {
    className: (0, _classnames.default)('k-HeroLayout__content', contentProps.className)
  }), children));
};

HeroLayout.Main.Content.defaultProps = {
  contentProps: {},
  loading: false,
  loaderComponent: /*#__PURE__*/_react.default.createElement(_loader.Loader, null)
};
HeroLayout.Main.Content.propTypes = {
  contentProps: _propTypes.default.object,
  loading: _propTypes.default.bool,
  loaderComponent: _propTypes.default.node
};
HeroLayout.Hero = Hero;
HeroLayout.Hero.Image = HeroImage;
HeroLayout.Hero.Block = HeroBlock;
HeroLayout.Main.TopMenu = MainTopMenu;