import { useState, useEffect } from 'react';
import { pauseEvent } from '../utils/pause-event';
export var useDrag = function useDrag(_ref) {
  var startingPosition = _ref.startingPosition,
      imageDimensions = _ref.imageDimensions,
      disabled = _ref.disabled;

  var _useState = useState(false),
      isDragging = _useState[0],
      setDragging = _useState[1];

  var _useState2 = useState({
    x: 0,
    y: 0
  }),
      origin = _useState2[0],
      setOrigin = _useState2[1];

  var _useState3 = useState({
    x: 0,
    y: 0
  }),
      translation = _useState3[0],
      setTranslation = _useState3[1];

  var _useState4 = useState({
    x: 0,
    y: 0
  }),
      lastTranslation = _useState4[0],
      setLastTranslation = _useState4[1];

  useEffect(function () {
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

  var handleMouseDown = function handleMouseDown(e) {
    pauseEvent(e);
    var clientX = e.clientX,
        clientY = e.clientY,
        target = e.target;

    if (!isDragging) {
      var rect = target.getBoundingClientRect();
      setDragging(true);
      setOrigin({
        x: clientX - rect.left - lastTranslation.x,
        y: clientY - rect.top - lastTranslation.y
      });
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    pauseEvent(e);
    var clientX = e.clientX,
        clientY = e.clientY,
        target = e.target;

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

  var getDestination = function getDestination(_ref2) {
    var x = _ref2.x,
        y = _ref2.y;
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