import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useEffect, useState } from 'react';
import useContinuousIntersectionObserver from './continuous-intersection-hook';
import domElementHelper from '../dom/element-helper';

var ContinuousIntersectionObserver = function ContinuousIntersectionObserver(_ref) {
  var options = _ref.options,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["options", "children"]);

  var beforeEl = useRef(null);
  var afterEl = useRef(null);
  var targetEl = useRef(null);

  var consolidatedOptions = _extends({
    root: null,
    rootMargin: '0px',
    threshold: 0
  }, options);

  var isIOpossible = domElementHelper.canUseDom() && 'IntersectionObserver' in window;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isBeforeElIntersecting = _useState2[0],
      setBeforeElIntersecting = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isTargetElIntersecting = _useState4[0],
      setTargetElIntersecting = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAfterElIntersecting = _useState6[0],
      setAfterElIntersecting = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPartlyVisible = _useState8[0],
      setPartlyVisible = _useState8[1];

  var _useState9 = useState('before'),
      _useState10 = _slicedToArray(_useState9, 2),
      visibleElement = _useState10[0],
      setVisibleElement = _useState10[1];

  if (isIOpossible) {
    useContinuousIntersectionObserver(_extends({
      onIntersect: function onIntersect(entries) {
        entries.forEach(function (entry) {
          setBeforeElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('before');
        });
      },
      observedComponentRef: beforeEl
    }, consolidatedOptions));
    useContinuousIntersectionObserver(_extends({
      onIntersect: function onIntersect(entries) {
        entries.forEach(function (entry) {
          setTargetElIntersecting(entry.isIntersecting);
        });
      },
      observedComponentRef: targetEl
    }, consolidatedOptions));
    useContinuousIntersectionObserver(_extends({
      onIntersect: function onIntersect(entries) {
        entries.forEach(function (entry) {
          setAfterElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('after');
        });
      },
      observedComponentRef: afterEl
    }, consolidatedOptions));
    useEffect(function () {
      setPartlyVisible(false);

      if (isTargetElIntersecting) {
        setPartlyVisible(true);

        if (!isBeforeElIntersecting && !isAfterElIntersecting || isBeforeElIntersecting && isAfterElIntersecting) {
          setVisibleElement('target');
        }
      }
    }, [isBeforeElIntersecting, isTargetElIntersecting, isAfterElIntersecting]);
  } else {
    // if there's not IntersectionObserver
    setVisibleElement('target');
    setPartlyVisible(true);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    ref: beforeEl
  }, props.beforeComponentProps)), /*#__PURE__*/React.createElement("div", _extends({
    ref: targetEl
  }, props.targetComponentProps), children({
    isPartlyVisible: isPartlyVisible,
    isCompletelyVisible: visibleElement === 'target',
    visibleElement: visibleElement
  })), /*#__PURE__*/React.createElement("div", _extends({
    ref: afterEl
  }, props.afterComponentProps)));
};

export default ContinuousIntersectionObserver;