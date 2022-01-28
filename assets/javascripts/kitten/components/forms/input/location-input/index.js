import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete'

import { LocationIcon } from '../../../../components/visuals/icons/location-icon'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'

const StyledLocationInput = styled.div`
  position: relative;
  width: 100%;

  .k-LocationInput__input {
    ${TYPOGRAPHY.fontStyles.light}
    font-size: ${stepToRem(-1)};
    line-height: 1.3;

    position: relative;
    display: block;
    box-sizing: border-box;
    padding: 0 ${pxToRem(15)} 0 ${pxToRem(35)};
    border-radius: var(--border-radius-s);

    width: 100%;
    height: ${pxToRem(50)};
    background: ${COLORS.background1};
    border: var(--border);
    color: ${COLORS.font1};

    transition: color 0.2s, border-color 0.2s;

    &::placeholder {
      color: ${COLORS.font2};
    }

    &:hover {
      border: var(--border-hover);
    }

    &:focus {
      color: ${COLORS.font1};
      outline: var(--outline-input);
      outline-offset: var(--outline-offset-input);
    }

    &:disabled {
      border: var(--border-disabled);
      background-color: ${COLORS.line1};
      color: ${COLORS.font2};

      cursor: not-allowed;

      &::placeholder {
        opacity: 1;
      }
    }
  }

  .k-LocationInput__autocomplete {
    box-sizing: border-box;
    background-color: ${COLORS.background1};
    border: var(--border-active);
    border-top: 0;
    position: absolute;
    z-index: 1000;
    z-index: var(--menu-z-index, 1000);
    width: 100%;

    overflow-y: scroll;

    &:empty {
      border: 0;
    }
  }

  .k-LocationInput__autocompleteItem,
  .k-LocationInput__autocompleteItem--active {
    padding: 0 ${pxToRem(12)};
    height: ${pxToRem(50)};
    display: flex;
    align-items: center;
    font-size: ${stepToRem(-1)};
    cursor: pointer;
    color: ${COLORS.font1};
  }

  .k-LocationInput__autocompleteItem--active {
    background-color: ${COLORS.background3};
  }

  .k-LocationInput__autocompleteItem__mainText {
    ${TYPOGRAPHY.fontStyles.light}
    margin-left: ${pxToRem(20)};
    color: ${COLORS.font1};
  }

  .k-LocationInput__autocompleteItem__secondaryText {
    ${TYPOGRAPHY.fontStyles.light}
    margin-left: 1ch;
  }

  .k-LocationInput__loading {
    padding-left: ${pxToRem(20)};
    color: ${COLORS.font2};
  }

  .k-LocationInput__icon {
    position: absolute;
    z-index: 1;
    top: ${pxToRem(15)};
    left: ${pxToRem(15)};
  }
`

// Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>

export const LocationInput = ({
  onChange,
  onSelect,
  defaultValue,
  inputProps,
  name,
  loadingText,
  ...others
}) => {
  const [address, updateAddress] = useState(defaultValue)

  const handleChange = returnedAddress => {
    updateAddress(returnedAddress)
    onChange({ value: returnedAddress, name: name })
  }

  const handleSelect = (returnedAddress, placeId) => {
    geocodeByPlaceId(placeId).then(results => {
      const place = results[0]

      if (place) {
        updateAddress(returnedAddress)
        onSelect({ value: returnedAddress, placeId, place })
      }
    })
  }

  return (
    <PlacesAutocomplete
      value={address}
      onSelect={handleSelect}
      onChange={handleChange}
      {...others}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <StyledLocationInput className="k-LocationInput">
          <div className="k-LocationInput__icon">
            <LocationIcon />
          </div>
          <input
            {...getInputProps({
              ...inputProps,
              className: classNames(
                'k-LocationInput__input',
                inputProps?.className,
              ),
            })}
          />
          <div className="k-LocationInput__autocomplete">
            {loading && (
              <div className="k-LocationInput__loading k-LocationInput__autocompleteItem">
                {loadingText}
              </div>
            )}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'k-LocationInput__autocompleteItem--active'
                : 'k-LocationInput__autocompleteItem'

              return (
                <div
                  key={suggestion.formattedSuggestion.mainText}
                  {...getSuggestionItemProps(suggestion, {
                    className,
                  })}
                >
                  <span className="k-LocationInput__autocompleteItem__mainText">
                    {suggestion.formattedSuggestion.mainText}
                  </span>
                  {', '}
                  <span className="k-LocationInput__autocompleteItem__secondaryText">
                    {suggestion.formattedSuggestion.secondaryText}
                  </span>
                </div>
              )
            })}
          </div>
        </StyledLocationInput>
      )}
    </PlacesAutocomplete>
  )
}

LocationInput.defaultProps = {
  onChange: () => {},
  onSelect: () => {},
  defaultValue: '',
  inputProps: {},
  name: 'location-input',
  loadingText: 'Loading...',
}

LocationInput.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  loadingText: PropTypes.string,
}
