"use strict";

exports.__esModule = true;
exports.useModal = void 0;

var _react = require("react");

var _useFocusTrap = require("../../hooks/use-focus-trap");

var _usePrevious = require("../../hooks/use-previous");

var useModal = function useModal(_ref) {
  var id = _ref.id,
      modalCloseText = _ref.modalCloseText,
      modalOpenText = _ref.modalOpenText;

  var _useState = (0, _react.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var modalRef = (0, _useFocusTrap.useFocusTrap)({
    shouldTrapFocus: show
  });
  var previousShowValue = (0, _usePrevious.usePrevious)(show);

  var keyDownHandler = function keyDownHandler(event) {
    if (event.key === 'Escape') {
      setShow(false);
    }
  };

  (0, _react.useEffect)(function () {
    if (show || previousShowValue) {
      document.getElementById(id + "__button").focus();
    } // Prevent scrolling when Modal is open
    // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/


    if (show) {
      document.addEventListener('keydown', keyDownHandler);
      document.body.style.top = "-" + window.scrollY + "px";
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
      id: id + "__button",
      'aria-label': show ? modalCloseText : modalOpenText,
      'aria-controls': id + "__modal",
      'aria-expanded': show ? 'true' : null,
      onClick: function onClick() {
        return setShow(!show);
      }
    },
    modalProps: {
      id: id + "__modal",
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

exports.useModal = useModal;