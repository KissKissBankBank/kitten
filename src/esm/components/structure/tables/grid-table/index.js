import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { StyledGridTable } from './styles';
import classNames from 'classnames';
const Context = /*#__PURE__*/React.createContext({
  id: null
});
export const GridTable = _ref => {
  let {
    scrollable,
    id,
    children,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      id
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

GridTable.Header = _ref2 => {
  let {
    className = '',
    children,
    listProps = {},
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement("header", _extends({}, others, {
    className: classNames('k-GridTable__Header', className)
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-GridTable__HeaderList', listProps.className)
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

GridTable.Body = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("ul", _extends({}, props, {
    className: classNames('k-GridTable__Body', className)
  }));
};

GridTable.Row = _ref5 => {
  let {
    className = '',
    children,
    listProps = {},
    isHighlighted = false,
    ...others
  } = _ref5;
  return /*#__PURE__*/React.createElement("li", _extends({}, others, {
    className: classNames('k-GridTable__Row', className, {
      'k-GridTable__Row--is_highlighted': isHighlighted
    })
  }), /*#__PURE__*/React.createElement("ul", _extends({}, listProps, {
    className: classNames('k-GridTable__RowList', listProps.className)
  }), /*#__PURE__*/React.createElement(Context.Consumer, null, _ref6 => {
    let {
      id
    } = _ref6;
    return /*#__PURE__*/React.createElement(React.Fragment, null, React.Children.map(children, (child, index) => {
      return /*#__PURE__*/React.cloneElement(child, {
        'aria-labelledby': id + "-col-" + index
      });
    }));
  })));
};

GridTable.Col = _ref7 => {
  let {
    className,
    ...props
  } = _ref7;
  return /*#__PURE__*/React.createElement("li", _extends({}, props, {
    className: classNames('k-GridTable__Col', className)
  }));
};

GridTable.propTypes = {
  id: PropTypes.string.isRequired
};