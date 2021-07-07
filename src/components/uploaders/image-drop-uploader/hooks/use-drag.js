"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDrag = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var useDrag = function useDrag(_ref) {
  var startingPosition = _ref.startingPosition,
      imageDimensions = _ref.imageDimensions,
      disabled = _ref.disabled;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDragging = _useState2[0],
      setDragging = _useState2[1];

  var _useState3 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      origin = _useState4[0],
      setOrigin = _useState4[1];

  var _useState5 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      translation = _useState6[0],
      setTranslation = _useState6[1];

  var _useState7 = (0, _react.useState)({
    x: 0,
    y: 0
  }),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      lastTranslation = _useState8[0],
      setLastTranslation = _useState8[1];

  (0, _react.useEffect)(function () {
    if (!imageDimensions) return;

    if (startingPosition) {
      setTranslation(getDestination(startingPosition));
      setLastTranslation(getDestination(startingPosition));
    } else {
      var destination = getDestination({
        x: Math.round((imageDimensions.containedSize.width - imageDimensions.scaledSize.width) / 2),
        y: Math.round((imageDimensions.containedSize.height - imageDimensions.scaledSize.height) / 2)
      });
      setTranslation(destination);
      setLastTranslation(destination);
    }
  }, [startingPosition, imageDimensions]);

  var handleMouseDown = function handleMouseDown(_ref2) {
    var clientX = _ref2.clientX,
        clientY = _ref2.clientY,
        target = _ref2.target;

    if (!isDragging) {
      var rect = target.getBoundingClientRect();
      setDragging(true);
      setOrigin({
        x: clientX - rect.left - lastTranslation.x,
        y: clientY - rect.top - lastTranslation.y
      });
    }
  };

  var handleMouseMove = function handleMouseMove(_ref3) {
    var clientX = _ref3.clientX,
        clientY = _ref3.clientY,
        target = _ref3.target;

    if (isDragging) {
      var rect = target.getBoundingClientRect();

      if (clientX - rect.left < 0 || clientX - rect.left > rect.width || clientY - rect.top < 0 || clientY - rect.top > rect.height) {
        setDragging(false);
        setLastTranslation({
          x: translation.x,
          y: translation.y
        });
        return;
      }

      var destination = getDestination({
        x: clientX - rect.left - origin.x,
        y: clientY - rect.top - origin.y
      });
      setTranslation({
        x: destination.x,
        y: destination.y
      });
    }
  };

  var handleMouseUp = function handleMouseUp() {
    if (isDragging) {
      setDragging(false);
      setLastTranslation({
        x: translation.x,
        y: translation.y
      });
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    var direction = {
      x: 0,
      y: 0
    };

    switch (event.key) {
      case 'ArrowLeft':
        direction.x = -1;
        break;

      case 'ArrowRight':
        direction.x = 1;
        break;

      case 'ArrowUp':
        direction.y = -1;
        break;

      case 'ArrowDown':
        direction.y = 1;
        break;
    }

    if (event.shiftKey) {
      direction = {
        x: direction.x * 10,
        y: direction.y * 10
      };
    }

    var destination = getDestination({
      x: lastTranslation.x + direction.x,
      y: lastTranslation.y + direction.y
    });
    setTranslation(destination);
    setLastTranslation(destination);
  };

  var getDestination = function getDestination(_ref4) {
    var x = _ref4.x,
        y = _ref4.y;
    var destinationX = x;
    var destinationY = y;

    if (x > 0) {
      destinationX = 0;
    }

    if (y > 0) {
      destinationY = 0;
    }

    if (-1 * Math.round(imageDimensions.scaledSize.width - imageDimensions.containedSize.width) > x) {
      destinationX = -1 * Math.round(imageDimensions.scaledSize.width - imageDimensions.containedSize.width);
    }

    if (-1 * Math.round(imageDimensions.scaledSize.height - imageDimensions.containedSize.height) > y) {
      destinationY = -1 * Math.round(imageDimensions.scaledSize.height - imageDimensions.containedSize.height);
    }

    return {
      x: destinationX,
      y: destinationY
    };
  };

  if (disabled) {
    return {
      liveImagePosition: {
        x: translation.x,
        y: translation.y
      },
      imagePosition: {
        x: lastTranslation.x,
        y: lastTranslation.y
      },
      cropZoneProps: {},
      isDragging: false
    };
  }

  return {
    isDragging: isDragging,
    liveImagePosition: {
      x: translation.x,
      y: translation.y
    },
    imagePosition: {
      x: lastTranslation.x,
      y: lastTranslation.y
    },
    cropZoneProps: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseMove,
      onMouseUp: handleMouseUp,
      onKeyUp: handleKeyUp,
      tabIndex: 0
    }
  };
};

exports.useDrag = useDrag;