"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatchMediaWithin = exports.createMatchMediaMax = exports.createMatchMediaMin = exports.createMatchMedia = exports.getJoinedQueries = exports.getMaxQuery = exports.getMinQuery = void 0;

var _screenConfig = require("../../constants/screen-config");

var getMinQuery = function getMinQuery(num) {
  return "(min-width: ".concat(num, "px)");
};

exports.getMinQuery = getMinQuery;

var getMaxQuery = function getMaxQuery(num) {
  return "(max-width: ".concat(num, "px)");
};

exports.getMaxQuery = getMaxQuery;

var getJoinedQueries = function getJoinedQueries(queries) {
  return queries.filter(function (q) {
    return q;
  }).join(' and ');
};

exports.getJoinedQueries = getJoinedQueries;

var createMatchMedia = function createMatchMedia(mediaQueryString) {
  if (typeof window === 'undefined' || !mediaQueryString) return;
  return window.matchMedia(mediaQueryString);
};

exports.createMatchMedia = createMatchMedia;

var createMatchMediaMin = function createMatchMediaMin(configName) {
  var screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMinQuery(screenConfig.min));
};

exports.createMatchMediaMin = createMatchMediaMin;

var createMatchMediaMax = function createMatchMediaMax(configName) {
  var screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  return createMatchMedia(getMaxQuery(screenConfig.max));
};

exports.createMatchMediaMax = createMatchMediaMax;

var createMatchMediaWithin = function createMatchMediaWithin(configName) {
  var screenConfig = _screenConfig.ScreenConfig[configName];
  if (!screenConfig) return;
  var minQuery = screenConfig.min ? getMinQuery(screenConfig.min) : null;
  var maxQuery = screenConfig.max ? getMaxQuery(screenConfig.max) : null;
  var query = getJoinedQueries([minQuery, maxQuery]);
  return createMatchMedia(query);
};

exports.createMatchMediaWithin = createMatchMediaWithin;