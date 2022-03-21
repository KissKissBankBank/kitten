import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["scrollable", "id", "children", "className"],
    _excluded2 = ["className", "children", "listProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className", "children", "listProps", "isHighlighted"],
    _excluded5 = ["className"];
import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridTable } from './styles';
import classNames from 'classnames';
var Context = /*#__PURE__*/React.createContext({
  id: null
});
export var GridTable = function GridTable(_ref) {
  var scrollable = _ref.scrollable,
      id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/React.createElement(StyledGridTable, _extends({}, props, {
    id: id,
    className: classNames('k-GridTable__wrapper', className, {
      'k-GridTable--scrollable': scrollable
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-GridTable"
  }, children)));
};

GridTable.Header = function (_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children,
      _ref2$listProps = _ref2.listProps,
      listProps = _ref2$listProps === void 0 ? {} : _ref2$listProps,
      others = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("header", _extends({}, others, {
    className: classNames('k-GridTable__Header', className)
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-GridTable__HeaderList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child, index) {
      return /*#__PURE__*/React.cloneElement(child, {
        id: id + "-col-" + index
      });
    }));
  })));
};

GridTable.Body = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded3);

  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: classNames('k-GridTable__Body', className)
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
      others = _objectWithoutPropertiesLoose(_ref5, _excluded4);

  return /*#__PURE__*/React.createElement("li", _extends({}, others, {
    className: classNames('k-GridTable__Row', className, {
      'k-GridTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-GridTable__RowList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref6) {
    var id = _ref6.id;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child, index) {
      return /*#__PURE__*/React.cloneElement(child, {
        'aria-labelledby': id + "-col-" + index
      });
    }));
  })));
};

GridTable.Col = function (_ref7) {
  var className = _ref7.className,
      props = _objectWithoutPropertiesLoose(_ref7, _excluded5);

  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-GridTable__Col', className)
  }));
};

GridTable.propTypes = {
  id: PropTypes.string.isRequired
};