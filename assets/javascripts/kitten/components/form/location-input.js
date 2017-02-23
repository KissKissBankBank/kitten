import React from 'react'
import classNames from 'classnames'
import PlacesAutocomplete from 'react-places-autocomplete'
import { LocationIcon } from 'kitten/components/icons/location-icon'

// Make sure you include a script to the Google Maps places API.
// For example:
//   <script src="https://maps.googleapis.com/maps/api/js?key=…&libraries=places"></script>
// We use this librairy "https://github.com/kenny-hibino/react-places-autocomplete"

export class LocationInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(address) {
    this.setState({ address })
  }

  render() {
    const { label,
            error,
            ...others } = this.props

    const locationInputClassNames = classNames(
      'k-LocationInput',
      { 'is-error': error }
    )

    const placesClassNames = {
      root: 'k-LocationInput__group',
      input: 'k-LocationInput__input',
      autocompleteContainer: 'k-LocationInput__autocomplete'
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

    return (
      <div className={ locationInputClassNames }>
        <div className="k-LocationInput__label">
          { label }
        </div>
        <div className="k-LocationInput__icon">
          <LocationIcon />
        </div>
        <PlacesAutocomplete classNames={ placesClassNames }
                            value={ this.state.address }
                            onChange={ this.handleChange }
                            autocompleteItem={ autocompleteItem }
                            hideLabel={ true }
                            { ...others } />
      </div>
    )
  }
}

LocationInput.defaultProps = {
  label: 'Localisation',
  error: false,
}
