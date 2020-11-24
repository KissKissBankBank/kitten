import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
// Taken from react-phone-input2 v2.13.8
// https://github.com/bl00mber/react-phone-input-2
// The MIT License (MIT)
// Copyright (c) 2017-2020 Nick Reiley <bloomber111@gmail.com> (https://github.com/bl00mber)
// Copyright (c) 2015-2017 Raza Gill <raza.gill@outlook.com> (https://github.com/razagill)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
import _rawCountries from './rawCountries';
import _rawTerritories from './rawTerritories';

function getMask(prefix, dialCode, predefinedMask, defaultMask, alwaysDefaultMask) {
  if (!predefinedMask || alwaysDefaultMask) {
    return prefix + ''.padEnd(dialCode.length, '.') + ' ' + defaultMask;
  } else {
    return prefix + ''.padEnd(dialCode.length, '.') + ' ' + predefinedMask;
  }
} // enableAreaCodes: boolean || array of iso2 codes


function initCountries(countries, enableAreaCodes, prefix, defaultMask, alwaysDefaultMask) {
  var _ref;

  var hiddenAreaCodes = [];
  var enableAllCodes;

  if (enableAreaCodes === true) {
    enableAllCodes = true;
  } else {
    enableAllCodes = false;
  }

  var initializedCountries = (_ref = []).concat.apply(_ref, _toConsumableArray(countries.map(function (country) {
    var countryItem = {
      name: country[0],
      regions: country[1],
      iso2: country[2],
      countryCode: country[3],
      dialCode: country[3],
      format: getMask(prefix, country[3], country[4], defaultMask, alwaysDefaultMask),
      priority: country[5] || 0
    };
    var areaItems = [];
    country[6] && country[6].map(function (areaCode) {
      var areaItem = _extends({}, countryItem);

      areaItem.dialCode = country[3] + areaCode;
      areaItem.isAreaCode = true;
      areaItem.areaCodeLength = areaCode.length;
      areaItems.push(areaItem);
    });

    if (areaItems.length > 0) {
      countryItem.mainCode = true;

      if (enableAllCodes || enableAreaCodes.constructor.name === 'Array' && enableAreaCodes.includes(country[2])) {
        countryItem.hasAreaCodes = true;
        return [countryItem].concat(areaItems);
      } else {
        hiddenAreaCodes = hiddenAreaCodes.concat(areaItems);
        return [countryItem];
      }
    } else {
      return [countryItem];
    }
  })));

  return [initializedCountries, hiddenAreaCodes];
}

function extendUserContent(userContent, contentItemIndex, extendingObject, firstExtension) {
  if (extendingObject === null) return;
  var keys = Object.keys(extendingObject);
  var values = Object.values(extendingObject);
  keys.forEach(function (iso2, index) {
    if (firstExtension) {
      // masks
      return userContent.push([iso2, values[index]]);
    }

    var countryIndex = userContent.findIndex(function (arr) {
      return arr[0] === iso2;
    });

    if (countryIndex === -1) {
      var newUserContent = [iso2];
      newUserContent[contentItemIndex] = values[index];
      userContent.push(newUserContent);
    } else {
      userContent[countryIndex][contentItemIndex] = values[index];
    }
  });
}

function initUserContent(masks, priority, areaCodes) {
  var userContent = [];
  extendUserContent(userContent, 1, masks, true);
  extendUserContent(userContent, 3, priority);
  extendUserContent(userContent, 2, areaCodes);
  return userContent;
}

function extendRawCountries(countries, userContent) {
  if (userContent.length === 0) return countries; // userContent index -> rawCountries index of country array to extend
  // [iso2 (0 -> 2), mask (1 -> 4), priority (3 -> 5), areaCodes (2 -> 6)]

  return countries.map(function (o) {
    var userContentIndex = userContent.findIndex(function (arr) {
      return arr[0] === o[2];
    }); // find by iso2

    if (userContentIndex === -1) return o; // if iso2 not in userContent, return source country object

    var userContentCountry = userContent[userContentIndex];
    if (userContentCountry[1]) o[4] = userContentCountry[1]; // mask

    if (userContentCountry[3]) o[5] = userContentCountry[3]; // priority

    if (userContentCountry[2]) o[6] = userContentCountry[2]; // areaCodes

    return o;
  });
}

var CountryData = function CountryData(enableAreaCodes, enableTerritories, _regions, _onlyCountries, preferredCountries, excludeCountries, _preserveOrder, masks, priority, _areaCodes, _localization, prefix, defaultMask, alwaysDefaultMask) {
  _classCallCheck(this, CountryData);

  this.filterRegions = function (regions, countries) {
    if (typeof regions === 'string') {
      var region = regions;
      return countries.filter(function (country) {
        return country.regions.some(function (element) {
          return element === region;
        });
      });
    }

    return countries.filter(function (country) {
      var matches = regions.map(function (region) {
        return country.regions.some(function (element) {
          return element === region;
        });
      });
      return matches.some(function (el) {
        return el;
      });
    });
  };

  this.sortTerritories = function (initializedTerritories, initializedCountries) {
    var fullCountryList = [].concat(_toConsumableArray(initializedTerritories), _toConsumableArray(initializedCountries));
    fullCountryList.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
    return fullCountryList;
  };

  this.getFilteredCountryList = function (countryCodes, sourceCountryList, preserveOrder) {
    if (countryCodes.length === 0) return sourceCountryList;
    var filteredCountries;

    if (preserveOrder) {
      // filter using iso2 user-defined order
      filteredCountries = countryCodes.map(function (countryCode) {
        var country = sourceCountryList.find(function (country) {
          return country.iso2 === countryCode;
        });
        if (country) return country;
      }).filter(function (country) {
        return country;
      }); // remove any not found
    } else {
      // filter using alphabetical order
      filteredCountries = sourceCountryList.filter(function (country) {
        return countryCodes.some(function (element) {
          return element === country.iso2;
        });
      });
    }

    return filteredCountries;
  };

  this.localizeCountries = function (countries, localization, preserveOrder) {
    for (var i = 0; i < countries.length; i++) {
      if (localization[countries[i].iso2] !== undefined) {
        countries[i].localName = localization[countries[i].iso2];
      } else if (localization[countries[i].name] !== undefined) {
        countries[i].localName = localization[countries[i].name];
      }
    }

    if (!preserveOrder) {
      countries.sort(function (a, b) {
        if (a.localName < b.localName) {
          return -1;
        }

        if (a.localName > b.localName) {
          return 1;
        }

        return 0;
      });
    }

    return countries;
  };

  this.getCustomAreas = function (country, areaCodes) {
    var customAreas = [];

    for (var i = 0; i < areaCodes.length; i++) {
      var newCountry = JSON.parse(JSON.stringify(country));
      newCountry.dialCode += areaCodes[i];
      customAreas.push(newCountry);
    }

    return customAreas;
  };

  this.excludeCountries = function (onlyCountries, excludedCountries) {
    if (excludedCountries.length === 0) {
      return onlyCountries;
    } else {
      return onlyCountries.filter(function (country) {
        return !excludedCountries.includes(country.iso2);
      });
    }
  };

  var userContent = initUserContent(masks, priority, _areaCodes);
  var rawCountries = extendRawCountries(JSON.parse(JSON.stringify(_rawCountries)), userContent);
  var rawTerritories = extendRawCountries(JSON.parse(JSON.stringify(_rawTerritories)), userContent);

  var _initCountries = initCountries(rawCountries, enableAreaCodes, prefix, defaultMask, alwaysDefaultMask),
      _initCountries2 = _slicedToArray(_initCountries, 2),
      _initializedCountries = _initCountries2[0],
      hiddenAreaCodes = _initCountries2[1];

  if (enableTerritories) {
    var _initCountries3 = initCountries(rawTerritories, enableAreaCodes, prefix, defaultMask, alwaysDefaultMask),
        _initCountries4 = _slicedToArray(_initCountries3, 2),
        initializedTerritories = _initCountries4[0],
        _hiddenAreaCodes = _initCountries4[1];

    _initializedCountries = this.sortTerritories(initializedTerritories, _initializedCountries);
  }

  if (_regions) _initializedCountries = this.filterRegions(_regions, _initializedCountries);
  this.onlyCountries = this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(_onlyCountries, _initializedCountries, _preserveOrder.includes('onlyCountries')), excludeCountries), _localization, _preserveOrder.includes('onlyCountries'));
  this.preferredCountries = preferredCountries.length === 0 ? [] : this.localizeCountries(this.getFilteredCountryList(preferredCountries, _initializedCountries, _preserveOrder.includes('preferredCountries')), _localization, _preserveOrder.includes('preferredCountries')); // apply filters to hiddenAreaCodes

  this.hiddenAreaCodes = this.excludeCountries(this.getFilteredCountryList(_onlyCountries, hiddenAreaCodes), excludeCountries);
};

export { CountryData as default };