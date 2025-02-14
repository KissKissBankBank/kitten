import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete'

import { LocationIcon } from '../../../graphics/icons/location-icon'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { TextInput } from '../../../form/input/text-input'

const StyledLocationInput = styled.div`
  position: relative;
  width: 100%;

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
    ${TYPOGRAPHY.fontStyles['400']}
    margin-left: ${pxToRem(20)};
    color: ${COLORS.font1};
  }

  .k-LocationInput__autocompleteItem__secondaryText {
    ${TYPOGRAPHY.fontStyles['400']}
    margin-left: 1ch;
  }

  .k-LocationInput__loading {
    padding-left: ${pxToRem(20)};
    color: ${COLORS.font2};
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
  customInputValue,
  id,
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
      value={customInputValue || address}
      onSelect={handleSelect}
      onChange={handleChange}
      {...others}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <StyledLocationInput className="k-LocationInput">
          <TextInput
            {...getInputProps({
              ...inputProps,
              className: classNames(
                'k-LocationInput__input',
                inputProps?.className,
              ),
            })}
            id={id}
            has="icon"
            icon={<LocationIcon />}
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
  customInputValue: '',
}

LocationInput.propTypes = {
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  defaultValue: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  loadingText: PropTypes.string,
  customInputValue: PropTypes.string,
}
