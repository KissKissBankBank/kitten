"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ListTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

const Context = /*#__PURE__*/_react.default.createContext({
  id: null
});

const ListTable = _ref => {
  let {
    id,
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: {
      id
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ListTableStyles, null), /*#__PURE__*/_react.default.createElement("section", (0, _extends2.default)({}, props, {
    id: id,
    className: (0, _classnames.default)('k-ListTable', className)
  }), children));
};

exports.ListTable = ListTable;

ListTable.Header = _ref2 => {
  let {
    className = '',
    children,
    listProps = {},
    ...others
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("header", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-ListTable__Header', className)
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-ListTable__HeaderList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, _ref3 => {
    let {
      id
    } = _ref3;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, (child, index) => {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        id: id + "-col-" + index
      });
    }));
  })));
};

ListTable.Body = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ListTable__Body', className)
  }));
};

ListTable.Row = _ref5 => {
  let {
    className = '',
    children,
    listProps = {},
    isHighlighted = false,
    ...others
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, others, {
    className: (0, _classnames.default)('k-ListTable__Row', className, {
      'k-ListTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)('k-ListTable__RowList', listProps.className)
  }), /*#__PURE__*/_react.default.createElement(Context.Consumer, null, _ref6 => {
    let {
      id
    } = _ref6;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _react.default.Children.map(children, (child, index) => {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        'aria-describedby': id + "-col-" + index
      });
    }));
  })));
};

ListTable.Col = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-ListTable__Col', className)
  }));
};

ListTable.propTypes = {
  id: _propTypes.default.string.isRequired
};