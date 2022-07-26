import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useEffect, useState } from 'react';
import useContinuousIntersectionObserver from './continuous-intersection-hook';
import { domElementHelper } from '../dom/element-helper';

const ContinuousIntersectionObserver = _ref => {
  let {
    options,
    children,
    ...props
  } = _ref;
  const beforeEl = useRef(null);
  const afterEl = useRef(null);
  const targetEl = useRef(null);
  const consolidatedOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
    ...options
  };
  const isIOpossible = domElementHelper.canUseDom() && 'IntersectionObserver' in window;
  const [isBeforeElIntersecting, setBeforeElIntersecting] = useState(false);
  const [isTargetElIntersecting, setTargetElIntersecting] = useState(false);
  const [isAfterElIntersecting, setAfterElIntersecting] = useState(false);
  const [isPartlyVisible, setPartlyVisible] = useState(false);
  const [visibleElement, setVisibleElement] = useState('before');

  if (isIOpossible) {
    useContinuousIntersectionObserver({
      onIntersect: entries => {
        entries.forEach(entry => {
          setBeforeElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('before');
        });
      },
      observedComponentRef: beforeEl,
      ...consolidatedOptions
    });
    useContinuousIntersectionObserver({
      onIntersect: entries => {
        entries.forEach(entry => {
          setTargetElIntersecting(entry.isIntersecting);
        });
      },
      observedComponentRef: targetEl,
      ...consolidatedOptions
    });
    useContinuousIntersectionObserver({
      onIntersect: entries => {
        entries.forEach(entry => {
          setAfterElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('after');
        });
      },
      observedComponentRef: afterEl,
      ...consolidatedOptions
    });
    useEffect(() => {
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