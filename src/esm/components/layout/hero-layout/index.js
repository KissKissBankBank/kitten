import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StyledLayout } from './styles';
import { Loader } from '../../graphics/animations/loader';
import { Grid, GridCol } from '../../layout/grid';
import { getReactElementsByType, getReactElementsWithoutType } from '../../../helpers/react/get-react-elements';
export const HeroLayout = _ref => {
  let {
    className,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledLayout, _extends({
    className: classNames('k-HeroLayout', className)
  }, props), children);
};

const Hero = _ref2 => {
  let {
    className,
    children,
    ...props
  } = _ref2;
  const imageElement = getReactElementsByType({
    children: children,
    type: HeroImage
  })[0];
  const otherChildren = getReactElementsWithoutType({
    children: children,
    type: HeroImage
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__hero', className)
  }, props), imageElement, /*#__PURE__*/React.createElement(Grid, {
    className: "k-HeroLayout__hero__grid"
  }, otherChildren));
};

const HeroImage = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__hero__background', className)
  }, props));
};

const HeroBlock = _ref4 => {
  let {
    children,
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement(GridCol, _extends({
    className: classNames('k-HeroLayout__hero__block', className),
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__promo', className)
  }, props));
};

HeroLayout.Main = _ref6 => {
  let {
    className,
    hasTopMenu = false,
    children,
    ...props
  } = _ref6;
  const TopMenuElement = getReactElementsByType({
    children: children,
    type: MainTopMenu
  })[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__page', className, {
      'k-HeroLayout__page--hasTopMenu': hasTopMenu || !!TopMenuElement
    })
  }, props), children);
};

HeroLayout.Main.defaultProps = {
  hasTopMenu: false
};
HeroLayout.Main.propTypes = {
  hasTopMenu: PropTypes.bool
};

HeroLayout.Main.Image = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__page__background', className)
  }, props));
};

HeroLayout.Main.FirstAside = _ref8 => {
  let {
    children,
    className,
    sticky,
    ...props
  } = _ref8;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__firstAside', className, {
      ["k-HeroLayout__sticky--" + sticky]: !!sticky && sticky != 'none'
    })
  }, props), /*#__PURE__*/React.createElement("div", {
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
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-HeroLayout__lastAside', className, {
      ["k-HeroLayout__sticky--" + sticky]: !!sticky && sticky != 'none'
    })
  }, props), /*#__PURE__*/React.createElement("div", {
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

HeroLayout.Main.Content = _ref11 => {
  let {
    children,
    loading,
    loaderComponent,
    contentProps,
    ...props
  } = _ref11;
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