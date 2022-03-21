"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.GridTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["scrollable", "id", "children", "className"],
    _excluded2 = ["className", "children", "listProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className", "children", "listProps", "isHighlighted"],
    _excluded5 = ["className"];

var Context = /*#__PURE__*/_react.default.createContext({
  id: null
});

var GridTable = function GridTable(_ref) {
  var scrollable = _ref.scrollable,
      id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledGridTable, (0, _extends2.default)({}, props, {
    id: id,
    className: (0, _classnames.default)('k-GridTable__wrapper', className, {
      'k-GridTable--scrollable': scrollable
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-GridTable"
  }, children)));
};

exports.GridTable = GridTable;

GridTable.Header = function (_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children,
      _ref2$listProps = _ref2.listProps,
      listProps = _ref2$listProps === void 0 ? {} : _ref2$listProps,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
  return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-GridTable__Header', className)
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-GridTable__HeaderList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, function (_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child, index) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        id: id + "-col-" + index
      });
    }));
  })));
};

GridTable.Body = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded3);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-GridTable__Body', className)
  }));
};

GridTable.Row = function (_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === void 0 ? '' : _ref5$className,
      children = _ref5.children,
      _ref5$listProps = _ref5.listProps,
      listProps = _ref5$listProps === void 0 ? {} : _ref5$listProps,
      _ref5$isHighlighted = _ref5.isHighlighted,
      isHighlighted = _ref5$isHighlighted === void 0 ? false : _ref5$isHighlighted,
      others = (0, _objectWithoutPropertiesLoose2.default)(_ref5, _excluded4);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-GridTable__Row', className, {
      'k-GridTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-GridTable__RowList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, function (_ref6) {
    var id = _ref6.id;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child, index) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        'aria-labelledby': id + "-col-" + index
      });
    }));
  })));
};

GridTable.Col = function (_ref7) {
  var className = _ref7.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref7, _excluded5);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-GridTable__Col', className)
  }));
};

GridTable.propTypes = {
  id: _propTypes.default.string.isRequired
};