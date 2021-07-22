"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var Context = _react.default.createContext({
  id: null
});

var ListTable = function ListTable(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["id", "children", "className"]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ListTableStyles, null), /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({}, props, {
    id: id,
    className: (0, _classnames.default)('k-ListTable', className)
  }), children));
};

exports.ListTable = ListTable;

ListTable.Header = function (_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children,
      _ref2$listProps = _ref2.listProps,
      listProps = _ref2$listProps === void 0 ? {} : _ref2$listProps,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["className", "children", "listProps"]);
  return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-ListTable__Header', className)
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-ListTable__HeaderList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, function (_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child, index) {
      return _react.default.cloneElement(child, {
        id: "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

ListTable.Body = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className"]);
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ListTable__Body', className)
  }));
};

ListTable.Row = function (_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === void 0 ? '' : _ref5$className,
      children = _ref5.children,
      _ref5$listProps = _ref5.listProps,
      listProps = _ref5$listProps === void 0 ? {} : _ref5$listProps,
      _ref5$isHighlighted = _ref5.isHighlighted,
      isHighlighted = _ref5$isHighlighted === void 0 ? false : _ref5$isHighlighted,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["className", "children", "listProps", "isHighlighted"]);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-ListTable__Row', className, {
      'k-ListTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-ListTable__RowList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, function (_ref6) {
    var id = _ref6.id;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, function (child, index) {
      return _react.default.cloneElement(child, {
        'aria-describedby': "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

ListTable.Col = function (_ref7) {
  var className = _ref7.className,
      props = (0, _objectWithoutProperties2.default)(_ref7, ["className"]);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ListTable__Col', className)
  }));
};

ListTable.propTypes = {
  id: _propTypes.default.string.isRequired
};