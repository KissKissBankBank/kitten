import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import find from 'lodash/fp/find';
import { ArrowIcon } from '../../graphics/icons/arrow-icon';
import { DoubleArrowIcon } from '../../graphics/icons/double-arrow-icon';
import { FlexWrapper } from '../../layout/flex-wrapper';
import { StyledDashboardMenu } from './styles';
export const DashboardMenu = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledDashboardMenu, _extends({
    className: classNames('k-DashboardMenu', className)
  }, props));
};

const List = _ref2 => {
  let {
    className,
    subList,
    hideable,
    ...props
  } = _ref2;
  return /*#__PURE__*/React.createElement("ul", _extends({
    className: classNames('k-DashboardMenu__list', className, {
      'k-DashboardMenu__list--subList': !!subList,
      'k-DashboardMenu__list--hideable': !!hideable
    })
  }, props));
};

const Item = _ref3 => {
  let {
    className,
    icon,
    endIcon,
    isActive,
    children,
    size = 'default',
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__itemWrapper"
  }, /*#__PURE__*/React.createElement("a", _extends({
    className: classNames('k-DashboardMenu__item', className, "k-DashboardMenu__item--" + size),
    "aria-current": isActive ? 'page' : null
  }, props), !!icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__item__text"
  }, children), endIcon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, endIcon)));
};

const Expandable = _ref4 => {
  let {
    className,
    children,
    icon,
    title,
    size = 'default',
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("li", {
    className: "k-DashboardMenu__expandableWrapper"
  }, /*#__PURE__*/React.createElement("details", _extends({
    className: classNames('k-DashboardMenu__expandable', className, "k-DashboardMenu__expandable--" + size)
  }, props), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardMenu__expandable__title"
  }, !!icon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, typeof icon === 'function' ? icon() : icon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__text"
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__expandable__title__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: "bottom"
  })))), /*#__PURE__*/React.createElement("ul", {
    className: "k-DashboardMenu__expandable__list"
  }, children)));
};

const Separator = _ref5 => {
  let {
    className,
    children,
    ...props
  } = _ref5;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DashboardMenu__separator', className)
  }, props), /*#__PURE__*/React.createElement("hr", null), children);
};

const Selector = _ref6 => {
  let {
    data,
    className,
    ...props
  } = _ref6;
  const detailsElement = useRef(null);
  useEffect(() => {
    if (!!detailsElement.current) {
      detailsElement.current.addEventListener('toggle', handleDetails);
    }

    return () => {
      if (!!detailsElement.current) {
        detailsElement.current.removeEventListener('toggle', handleDetails);
      }
    };
  }, [detailsElement]);

  const closeSelector = () => {
    detailsElement.current.open = false;
  };

  const handleDetails = event => {
    if (event.target.open) {
      window.addEventListener('keydown', handleEsc);
      window.addEventListener('click', handleClickOutside);
      event.target.querySelector('.k-DashboardMenu__selectorButton:first-child').focus();
    } else {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('click', handleClickOutside);
    }
  };

  const handleEsc = event => {
    if (event.key === 'Escape' && detailsElement != null && detailsElement.current) {
      closeSelector();
    }
  };

  const handleClickOutside = event => {
    if (detailsElement != null && detailsElement.current && !detailsElement.current.contains(event.target)) {
      closeSelector();
    }
  };

  if (data.length === 1) {
    const {
      children,
      icon,
      isActive,
      ...dataProps
    } = data[0];
    return /*#__PURE__*/React.createElement("div", _extends({}, dataProps, {
      className: classNames('k-DashboardMenu__selectorButton', 'k-u-margin-top-single', 'k-u-margin-bottom-noneHalf', dataProps.className, className)
    }), !!icon && /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  }

  const activeItem = find(item => item.isActive)(data);
  const {
    className: activeClassName,
    icon: activeIcon,
    children: activeChildren
  } = activeItem || {};
  return /*#__PURE__*/React.createElement("details", _extends({
    ref: detailsElement,
    className: classNames('k-DashboardMenu__selectorWrapper', className)
  }, props), /*#__PURE__*/React.createElement("summary", {
    className: classNames('k-DashboardMenu__selectorSummary', activeClassName)
  }, /*#__PURE__*/React.createElement(FlexWrapper, {
    gap: 15,
    direction: "row",
    className: "k-DashboardMenu__selectorSummary__flex"
  }, !!activeIcon && /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper"
  }, activeIcon), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__selectorButton__text"
  }, activeChildren), /*#__PURE__*/React.createElement("span", {
    className: "k-DashboardMenu__iconWrapper k-DashboardMenu__selectorButton__arrow"
  }, /*#__PURE__*/React.createElement(DoubleArrowIcon, {
    color: "currentColor"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "k-DashboardMenu__selectorList"
  }, data.map((_ref7, index) => {
    let {
      icon,
      children,
      isActive,
      onClick,
      ...itemProps
    } = _ref7;
    if (isActive) return;
    return /*#__PURE__*/React.createElement("a", _extends({
      key: children + index
    }, itemProps, {
      className: classNames('k-DashboardMenu__selectorButton', itemProps.className),
      onClick: e => {
        onClick(e, closeSelector);
      }
    }), !!icon && /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__iconWrapper"
    }, icon), /*#__PURE__*/React.createElement("span", {
      className: "k-DashboardMenu__selectorButton__text"
    }, children));
  })));
};

Item.proptypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small'])
};
Expandable.proptypes = {
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  title: PropTypes.node,
  size: PropTypes.oneOf(['default', 'small'])
};
Selector.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    isActive: PropTypes.bool,
    icon: PropTypes.node
  }))
};
DashboardMenu.List = List;
DashboardMenu.Item = Item;
DashboardMenu.Expandable = Expandable;
DashboardMenu.Separator = Separator;
DashboardMenu.Selector = Selector;