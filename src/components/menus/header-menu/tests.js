"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _index = require("./index");

var CustomComponent = function CustomComponent() {
  return _react.default.createElement("a", {
    href: "#custom-component"
  }, "Custom component");
};

describe('<HeaderMenu />', function () {
  var component;
  describe('with three items', function () {
    beforeEach(function () {
      component = _reactTestRenderer.default.create(_react.default.createElement(_index.HeaderMenu, null, _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 1"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#",
        modifier: "light"
      }, "Item 2"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#",
        liProps: {
          className: 'customLiClass'
        }
      }, "Item 3"))).toJSON();
    });
    it('matches with snapshot', function () {
      expect(component).toMatchSnapshot();
    });
  });
  describe('with one selected item', function () {
    beforeEach(function () {
      component = _reactTestRenderer.default.create(_react.default.createElement(_index.HeaderMenu, null, _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 1"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#",
        isSelected: true
      }, "Item 2"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 3"))).toJSON();
    });
    it('matches with snapshot', function () {
      expect(component).toMatchSnapshot();
    });
  });
  describe('with one custom item', function () {
    beforeEach(function () {
      component = _reactTestRenderer.default.create(_react.default.createElement(_index.HeaderMenu, null, _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 1"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 2"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#",
        external: true
      }, _react.default.createElement(CustomComponent, null)))).toJSON();
    });
    it('matches with snapshot', function () {
      expect(component).toMatchSnapshot();
    });
  });
  describe('with border to right', function () {
    beforeEach(function () {
      component = _reactTestRenderer.default.create(_react.default.createElement(_index.HeaderMenu, {
        borderSide: "right"
      }, _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 1"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 2"), _react.default.createElement(_index.HeaderMenu.Item, {
        href: "#"
      }, "Item 3"))).toJSON();
    });
    it('matches with snapshot', function () {
      expect(component).toMatchSnapshot();
    });
  });
});