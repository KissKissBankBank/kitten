import { ScreenConfig, ORDERED_SCREEN_SIZES } from '../../constants/screen-config';
export var getMinQuery = function getMinQuery(num) {
  return "(min-width: ".concat(num, "px)");
};
export var getMaxQuery = function getMaxQuery(num) {
  return "(max-width: ".concat(num, "px)");
};
export var getJoinedQueries = function getJoinedQueries(queries) {
  return queries.filter(function (q) {
    return q;
  }).join(' and ');
};
export var createMatchMedia = function createMatchMedia(mediaQueryString) {
  if (typeof window === 'undefined' || !mediaQueryString) return;
  return window.matchMedia(mediaQueryString);
};
export var createMatchMediaMin = function createMatchMediaMin(configName) {
  var screenConfig = ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMinQuery(screenConfig.min));
};
export var createMatchMediaMax = function createMatchMediaMax(configName) {
  var screenConfig = ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMaxQuery(screenConfig.max));
};
export var createMatchMediaWithin = function createMatchMediaWithin(configName) {
  var screenConfig = ScreenConfig[configName];
  if (!screenConfig) return;
  var minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null;
  var maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null;
  var query = getJoinedQueries([minQuery, maxQuery]);
  return createMatchMedia(query);
};
export var getScreenSizeFrom = function getScreenSizeFrom(direction) {
  return function (screenSize) {
    var currentIndex = ORDERED_SCREEN_SIZES.indexOf(screenSize.toUpperCase());
    var lastIndex = ORDERED_SCREEN_SIZES.length - 1;
    var nextIndex = currentIndex === lastIndex ? currentIndex : currentIndex + 1;
    var prevIndex = currentIndex === 0 ? 0 : currentIndex - 1;

    switch (direction) {
      case 'previous':
        return ORDERED_SCREEN_SIZES[prevIndex];

      case 'next':
        return ORDERED_SCREEN_SIZES[nextIndex];

      default:
        return ORDERED_SCREEN_SIZES[currentIndex];
    }
  };
};