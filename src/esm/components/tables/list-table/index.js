import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { ListTableStyles } from './styles';
import classNames from 'classnames';
var Context = React.createContext({
  id: null
});
export var ListTable = function ListTable(_ref) {
  var id = _ref.id,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["id", "children", "className"]);

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      id: id
    }
  }, /*#__PURE__*/React.createElement(ListTableStyles, null), /*#__PURE__*/React.createElement("section", _extends({}, props, {
    id: id,
    className: classNames('k-ListTable', className)
  }), children));
};

ListTable.Header = function (_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      children = _ref2.children,
      _ref2$listProps = _ref2.listProps,
      listProps = _ref2$listProps === void 0 ? {} : _ref2$listProps,
      others = _objectWithoutProperties(_ref2, ["className", "children", "listProps"]);

  return /*#__PURE__*/React.createElement("header", _extends({}, others, {
    className: classNames('k-ListTable__Header', className)
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-ListTable__HeaderList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child, index) {
      return React.cloneElement(child, {
        id: "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

ListTable.Body = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: classNames('k-ListTable__Body', className)
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
      others = _objectWithoutProperties(_ref5, ["className", "children", "listProps", "isHighlighted"]);

  return /*#__PURE__*/React.createElement("li", _extends({}, others, {
    className: classNames('k-ListTable__Row', className, {
      'k-ListTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-ListTable__RowList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref6) {
    var id = _ref6.id;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, function (child, index) {
      return React.cloneElement(child, {
        'aria-describedby': "".concat(id, "-col-").concat(index)
      });
    }));
  })));
};

ListTable.Col = function (_ref7) {
  var className = _ref7.className,
      props = _objectWithoutProperties(_ref7, ["className"]);

  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-ListTable__Col', className)
  }));
};

ListTable.propTypes = {
  id: PropTypes.string.isRequired
};