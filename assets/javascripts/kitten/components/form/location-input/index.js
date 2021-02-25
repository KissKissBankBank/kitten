import React, { Component } from 'react'
// Via "https://github.com/kenny-hibino/react-places-autocomplete"
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete'
import { LocationIcon } from '../../../components/icons/location-icon'
import styled from 'styled-components'
import classNames from 'classnames'

import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'

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

    width: 100%;
    height: ${pxToRem(50)};
    background: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: 0;
    color: ${COLORS.font1};

    transition: color .2s, border-color .2s;

    &::placeholder {
      color: ${COLORS.font2};
    }

    &:focus {
      color: ${COLORS.font1};
      border-color: ${COLORS.line2};
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }

    &:disabled {
      border-color: ${COLORS.line1};
      background-color: ${COLORS.line1};
      color: ${COLORS.font2};

      cursor: not-allowed;

      &::placeholder {
        opacity: 1;
      }
    }
  }

  .k-LocationInput__autocomplete {
    background-color: ${COLORS.background1};
    border: ${pxToRem(2)} solid ${COLORS.line1};

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

export class LocationInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: this.props.defaultValue,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleChange(address) {
    this.setState({ address })
    this.props.onChange({ value: address, name: this.props.name })
  }

  handleSelect(address, placeId) {
    geocodeByPlaceId(placeId).then(results => {
      const place = results[0]

      if (place) {
        this.setState({ address })
        this.props.onSelect({ value: address, placeId, place })
      }
    })
  }

  render() {
    const {
      onChange,
      onSelect,
      defaultValue,
      inputProps,
      ...others
    } = this.props

    return (
      <PlacesAutocomplete
        value={this.state.address}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
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
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'k-LocationInput__autocompleteItem--active'
                  : 'k-LocationInput__autocompleteItem'

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span className="k-LocationInput__autocompleteItem__mainText">
                      {suggestion.formattedSuggestion.mainText}
                    </span>{' '}
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
}

LocationInput.defaultProps = {
  onChange: () => {},
  onSelect: () => {},
  defaultValue: '',
}
