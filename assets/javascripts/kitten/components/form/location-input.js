import React from 'react'
import classNames from 'classnames'
// Via "https://github.com/kenny-hibino/react-places-autocomplete"
import PlacesAutocomplete from 'react-places-autocomplete'
import { LocationIcon } from 'kitten/components/icons/location-icon'
import { Label } from 'kitten/components/form/label'

// Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>

export class LocationInput extends React.Component {
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
    const input   = $('#PlacesAutocomplete__root input')[0]
    const service = new google.maps.places.PlacesService(input);

    service.getDetails(
      { placeId: placeId },
      (place, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          const number = place.address_components[0].long_name
          const street = place.address_components[1].long_name
          const value = `${number} ${street}`

          this.setState({ address: value })
          this.props.onSelect(address, placeId, place)
        }
      }
    )
  }

  render() {
    const {
      onChange,
      onSelect,
      defaultValue,
      inputProps,
      ...others,
    } = this.props

    const placesClassNames = {
      root: 'k-LocationInput__group',
      input: 'k-LocationInput__input',
      autocompleteContainer: 'k-LocationInput__autocomplete',
    }

    const autocompleteItem = ({ formattedSuggestion }) => (
      <div className="k-LocationInput__suggestionItem">
        <LocationIcon />
        <span className="k-LocationInput__suggestionItem__mainText">
          { formattedSuggestion.mainText }
        </span>
        {' '}
        <span className="k-LocationInput__suggestionItem__secondaryText">
          { formattedSuggestion.secondaryText }
        </span>
      </div>
    )

    const finalInputProps = {
      ...inputProps,
      value: this.state.address,
      onChange: this.handleChange,
    }

    return (
      <div className="k-LocationInput">
        <div className="k-LocationInput__icon">
          <LocationIcon />
        </div>

        <PlacesAutocomplete classNames={ placesClassNames }
                            autocompleteItem={ autocompleteItem }
                            hideLabel={ true }
                            inputProps={ finalInputProps }
                            onSelect={ this.handleSelect }
                            { ...others } />
      </div>
    )
  }
}

LocationInput.defaultProps = {
  onChange: function() {},
  onSelect: function() {},
  defaultValue: '',
}
