import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState, useEffect } from 'react';
import { useFocusTrap } from '../../dom/use-focus-trap';
import { usePrevious } from '../../utils/use-previous-hook';
export var useModal = function useModal(_ref) {
  var id = _ref.id,
      modalCloseText = _ref.modalCloseText,
      modalOpenText = _ref.modalOpenText;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var modalRef = useFocusTrap({
    shouldTrapFocus: show
  });
  var previousShowValue = usePrevious(show);

  var keyDownHandler = function keyDownHandler(event) {
    if (event.key === 'Escape') {
      setShow(false);
    }
  };

  useEffect(function () {
    if (show || previousShowValue) {
      document.getElementById("".concat(id, "__button")).focus();
    } // Prevent scrolling when Modal is open
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/


    if (show) {
      document.addEventListener('keydown', keyDownHandler);
      document.body.style.top = "-".concat(window.scrollY, "px");
      document.body.style.position = 'fixed';
    } else {
      document.removeEventListener('keydown', keyDownHandler);
      var scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [show]);
  return {
    show: show,
    buttonProps: {
      id: "".concat(id, "__button"),
      'aria-label': show ? modalCloseText : modalOpenText,
      'aria-controls': "".concat(id, "__modal"),
      'aria-expanded': show ? 'true' : null,
      onClick: function onClick() {
        return setShow(!show);
      }
    },
    modalProps: {
      id: "".concat(id, "__modal"),
      hidden: show ? null : 'hidden'
    },
    wrapperProps: {
      ref: modalRef
    },
    closeAction: function closeAction() {
      return setShow(false);
    },
    openAction: function openAction() {
      return setShow(true);
    }
  };
};