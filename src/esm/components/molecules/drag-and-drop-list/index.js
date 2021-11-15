import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import DragonDrop from 'drag-on-drop';
import { createGlobalStyle } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { Button } from '../../../components/molecules/buttons/button';
import { MenuIcon } from '../../../components/graphics/icons/menu-icon';
export var BUTTON_SHIFT = pxToRem(40 + 15);
var DragAndDropListStyles = createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .k-DragAndDropList {\n    display: flex;\n    flex-direction: column;\n    gap: var(--dragAndDropList-gap, ", ");\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n\n  .k-DragAndDropList__item {\n    display: flex;\n    gap: ", ";\n    align-items: center;\n    transition: opacity 0.2s ease;\n\n    &.gu-unselectable {\n      user-select: none !important;\n    }\n\n    &.gu-transit {\n      opacity: 0.2;\n      cursor: move;\n    }\n\n    &.gu-mirror {\n      box-sizing: border-box;\n      position: fixed !important;\n      margin: 0 !important;\n      z-index: 9999 !important;\n      opacity: 0.9;\n    }\n\n    &.gu-hide {\n      display: none !important;\n    }\n\n    .k-DragAndDropList__item__child {\n      flex: 1 0 100%;\n      max-width: 100%;\n    }\n\n  }\n  .k-DragAndDropList__item--hasButton {\n    .k-DragAndDropList__item__button {\n      flex: 0 0 ", ";\n      padding: 0;\n      width: ", ";\n      box-sizing: border-box;\n      border-radius: ", ";\n      cursor: grab;\n    }\n\n    &.gu-mirror .k-DragAndDropList__item__button {\n      cursor: grabbing;\n    }\n\n    .k-DragAndDropList__item__child {\n      flex: 1 0 calc(100% - ", ");\n      max-width: calc(100% - ", ");\n    }\n  }\n"])), pxToRem(15), pxToRem(15), pxToRem(40), pxToRem(40), pxToRem(20), BUTTON_SHIFT, BUTTON_SHIFT);
export var DragAndDropList = function DragAndDropList(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onChange = _ref.onChange,
      a11yButtonLabel = _ref.a11yButtonLabel,
      a11yAnnouncement = _ref.a11yAnnouncement,
      a11yButtonDescElement = _ref.a11yButtonDescElement,
      a11yContainerLabelElement = _ref.a11yContainerLabelElement,
      gap = _ref.gap,
      style = _ref.style,
      showHandle = _ref.showHandle,
      props = _objectWithoutProperties(_ref, ["children", "className", "onChange", "a11yButtonLabel", "a11yAnnouncement", "a11yButtonDescElement", "a11yContainerLabelElement", "gap", "style", "showHandle"]);

  var listElement = useRef(null);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      dragonInstance = _useState2[0],
      setDragonInstance = _useState2[1];

  var dragonOptions = {
    activeClass: 'k-DragAndDropList__item--active',
    inactiveClass: 'k-DragAndDropList__item--inactive',
    announcement: {
      grabbed: function grabbed(element) {
        return a11yAnnouncement.grabbed(element.dataset.simpleName);
      },
      dropped: function dropped(element) {
        return a11yAnnouncement.dropped(element.dataset.simpleName);
      },
      reorder: function reorder(element, items) {
        var position = items.indexOf(element) + 1;
        var name = element.dataset.simpleName;
        return a11yAnnouncement.reorder(name, position, items.length);
      },
      cancel: a11yAnnouncement.cancel
    }
  };
  useEffect(function () {
    if (!listElement) return;
    var dragon = new DragonDrop(listElement.current, _extends({}, dragonOptions, {
      handle: showHandle && 'button.k-DragAndDropList__item__button'
    }));
    dragon.on('dropped', handleChange);
    setDragonInstance(dragon);
  }, [listElement, showHandle]);
  useEffect(function () {
    if (!dragonInstance) return;
    if (!listElement) return;
    if (children.length == 0) return;
    dragonInstance.initElements(listElement.current);
  }, [children, listElement, showHandle]);

  var handleChange = function handleChange(container, item) {
    var newPosition = _toConsumableArray(container.children).indexOf(item) + 1;

    var newList = _toConsumableArray(container.children).map(function (child) {
      var _child$dataset;

      return (_child$dataset = child.dataset) === null || _child$dataset === void 0 ? void 0 : _child$dataset.id;
    });

    onChange({
      movedItem: item.dataset.id,
      newPosition: newPosition,
      newList: newList
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ol", _extends({
    ref: listElement,
    className: classNames('k-DragAndDropList', className),
    "aria-labelledby": a11yContainerLabelElement,
    style: _extends({}, style, {
      '--dragAndDropList-gap': pxToRem(gap)
    })
  }, props), (children === null || children === void 0 ? void 0 : children.length) > 0 && _toConsumableArray(children).map(function (child, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: child.props.id + index,
      className: classNames('k-DragAndDropList__item', {
        'k-DragAndDropList__item--hasButton': !!showHandle
      }),
      "data-simple-name": child.props.simpleName,
      "data-id": child.props.id
    }, !!showHandle && /*#__PURE__*/React.createElement(Button, {
      fit: "content",
      "aria-label": a11yButtonLabel,
      "aria-describedby": a11yButtonDescElement,
      className: "k-DragAndDropList__item__button"
    }, /*#__PURE__*/React.createElement(MenuIcon, {
      width: 10,
      height: 10
    })), React.cloneElement(child, _extends({}, child.props, {
      className: classNames(child.props.className, 'k-DragAndDropList__item__child')
    })));
  })), /*#__PURE__*/React.createElement(DragAndDropListStyles, null));
};
DragAndDropList.defaultProps = {
  a11yButtonLabel: 'Reorder',
  a11yAnnouncement: {
    grabbed: function grabbed(name) {
      return "".concat(name, " grabbed");
    },
    dropped: function dropped(name) {
      return "".concat(name, " dropped");
    },
    reorder: function reorder(name, position, length) {
      return "The rankings have been updated, ".concat(name, " is now ranked #").concat(position, " out of ").concat(length);
    },
    cancel: 'Reranking cancelled.'
  },
  onChange: function onChange() {},
  gap: 15,
  showHandle: true
};
DragAndDropList.propTypes = {
  a11yButtonLabel: PropTypes.string,
  a11yAnnouncement: PropTypes.shape({
    grabbed: PropTypes.func,
    dropped: PropTypes.func,
    reorder: PropTypes.func,
    cancel: PropTypes.string
  }),
  onChange: PropTypes.func,
  gap: PropTypes.number,
  showHandle: PropTypes.bool
};