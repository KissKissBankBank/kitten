import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { ListTableStyles } from './styles';
import classNames from 'classnames';
const Context = /*#__PURE__*/React.createContext({
  id: null
});
export const ListTable = _ref => {
  let {
    id,
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      id
    }
  }, /*#__PURE__*/React.createElement(ListTableStyles, null), /*#__PURE__*/React.createElement("section", _extends({}, props, {
    id: id,
    className: classNames('k-ListTable', className)
  }), children));
};

ListTable.Header = _ref2 => {
  let {
    className = '',
    children,
    listProps = {},
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement("header", _extends({}, others, {
    className: classNames('k-ListTable__Header', className)
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-ListTable__HeaderList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, _ref3 => {
    let {
      id
    } = _ref3;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
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
  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: classNames('k-ListTable__Body', className)
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
  return /*#__PURE__*/React.createElement("li", _extends({}, others, {
    className: classNames('k-ListTable__Row', className, {
      'k-ListTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-ListTable__RowList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, _ref6 => {
    let {
      id
    } = _ref6;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
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
  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-ListTable__Col', className)
  }));
};

ListTable.propTypes = {
  id: PropTypes.string.isRequired
};