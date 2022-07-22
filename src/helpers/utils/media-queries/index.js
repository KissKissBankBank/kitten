"use strict";

exports.__esModule = true;
exports.getScreenSizeFrom = exports.getMinQuery = exports.getMaxQuery = exports.getJoinedQueries = exports.createMatchMediaWithin = exports.createMatchMediaMin = exports.createMatchMediaMax = exports.createMatchMedia = void 0;

var _screenConfig = require("../../../constants/screen-config");

const getMinQuery = num => "(min-width: " + num + "px)";

exports.getMinQuery = getMinQuery;

const getMaxQuery = num => "(max-width: " + num + "px)";

exports.getMaxQuery = getMaxQuery;

const getJoinedQueries = queries => queries.filter(q => q).join(' and ');

exports.getJoinedQueries = getJoinedQueries;

const createMatchMedia = mediaQueryString => {
  if (typeof window === 'undefined' || !mediaQueryString) return;
  return window.matchMedia(mediaQueryString);
};

exports.createMatchMedia = createMatchMedia;

const createMatchMediaMin = configName => {
  const screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMinQuery(screenConfig.min));
};

exports.createMatchMediaMin = createMatchMediaMin;

const createMatchMediaMax = configName => {
  const screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMaxQuery(screenConfig.max));
};

exports.createMatchMediaMax = createMatchMediaMax;

const createMatchMediaWithin = configName => {
  const screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  const minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null;
  const maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null;
  const query = getJoinedQueries([minQuery, maxQuery]);
  return createMatchMedia(query);
};

exports.createMatchMediaWithin = createMatchMediaWithin;

const getScreenSizeFrom = direction => screenSize => {
  const currentIndex = _screenConfig.ORDERED_SCREEN_SIZES.indexOf(screenSize.toUpperCase());

  const lastIndex = _screenConfig.ORDERED_SCREEN_SIZES.length - 1;
  const nextIndex = currentIndex === lastIndex ? currentIndex : currentIndex + 1;
  const prevIndex = currentIndex === 0 ? 0 : currentIndex - 1;

  switch (direction) {
    case 'previous':
      return _screenConfig.ORDERED_SCREEN_SIZES[prevIndex];

    case 'next':
      return _screenConfig.ORDERED_SCREEN_SIZES[nextIndex];

    default:
      return _screenConfig.ORDERED_SCREEN_SIZES[currentIndex];
  }
};

exports.getScreenSizeFrom = getScreenSizeFrom;