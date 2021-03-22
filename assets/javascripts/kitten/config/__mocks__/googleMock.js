export const GEOCODE_RESULT = {
  'San Francisco': [
    {
      address_components: [
        {
          long_name: 'San Francisco',
          short_name: 'SF',
          types: ['locality', 'political'],
        },
        {
          long_name: 'San Francisco County',
          short_name: 'San Francisco County',
          types: ['administrative_area_level_2', 'political'],
        },
        {
          long_name: 'California',
          short_name: 'CA',
          types: ['administrative_area_level_1', 'political'],
        },
        {
          long_name: 'United States',
          short_name: 'US',
          types: ['country', 'political'],
        },
      ],
      formatted_address: 'San Francisco, CA, USA',
      geometry: {
        bounds: {
          south: 37.6398299,
          west: -123.17382499999997,
          north: 37.9298239,
          east: -122.28178000000003,
        },
        location: { lat: 37.7749295, lng: -122.41941550000001 },
        location_type: 'APPROXIMATE',
        viewport: {
          south: 37.70339999999999,
          west: -122.52699999999999,
          north: 37.812,
          east: -122.34820000000002,
        },
      },
      place_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
      types: ['locality', 'political'],
    },
  ],
}

class GeocoderMock {
  geocode({ address, placeId }, callback) {
    if (address) {
      this._geocodeAddress(address, callback)
    } else if (placeId) {
      this._geocodePlaceID(placeId, callback)
    } else {
      callback({}, 'ZERO_RESULTS')
    }
  }

  _geocodeAddress(address, callback) {
    if (address.startsWith('San Francisco')) {
      callback(GEOCODE_RESULT['San Francisco'], 'OK')
    } else {
      callback([], 'ZERO_RESULTS')
    }
  }

  _geocodePlaceID(placeId, callback) {
    if (placeId === 'ChIJIQBpAG2ahYAR_6128GcTUEo') {
      callback(GEOCODE_RESULT['San Francisco'], 'OK')
    } else {
      callback([], 'ZERO_RESULTS')
    }
  }
}

class AutocompleteServiceMock {
  getPlacePredictions(_filters, callback) {
    callback([], 'OK')
  }
}

export const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  const google = {
    maps: {
      places: {
        AutocompleteService: AutocompleteServiceMock,
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
      Geocoder: GeocoderMock,
      GeocoderStatus: {
        ERROR: 'ERROR',
        INVALID_REQUEST: 'INVALID_REQUEST',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
  }
  global.window.google = google
}
