import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["options", "children"];
import React, { useRef, useEffect, useState } from 'react';
import useContinuousIntersectionObserver from './continuous-intersection-hook';
import domElementHelper from '../dom/element-helper';

var ContinuousIntersectionObserver = function ContinuousIntersectionObserver(_ref) {
  var options = _ref.options,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
      isBeforeElIntersecting = _useState[0],
      setBeforeElIntersecting = _useState[1];

  var _useState2 = useState(false),
      isTargetElIntersecting = _useState2[0],
      setTargetElIntersecting = _useState2[1];

  var _useState3 = useState(false),
      isAfterElIntersecting = _useState3[0],
      setAfterElIntersecting = _useState3[1];

  var _useState4 = useState(false),
      isPartlyVisible = _useState4[0],
      setPartlyVisible = _useState4[1];

  var _useState5 = useState('before'),
      visibleElement = _useState5[0],
      setVisibleElement = _useState5[1];

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