import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { LocationIcon } from 'kitten/components/icons/location-icon'

export class LocationInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'Localisation',
      address: ''
    }
    this.onChange = (address) => this.setState({ address })
  }

  render() {
    const { hideLabel,
            ...other } = this.props

    const cssClasses = {
      root: 'k-LocationInput__group',
      label: 'k-LocationInput__label',
      input: 'k-LocationInput__input',
      autocompleteContainer: 'k-LocationInput__autocomplete'
    }

    const autocompleteItem = ({ formattedSuggestion }) => (
      <div className="k-LocationInput__suggestionItem">
        <LocationIcon />
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small>{formattedSuggestion.secondaryText}</small>
      </div>
    )

    return (
      <div className="k-LocationInput">
        <PlacesAutocomplete
          value={ this.state.address }
          onChange={ this.onChange }
          classNames={ cssClasses }
          placeholder={ this.state.placeholder }
          autocompleteItem={ autocompleteItem }
          { ...this.props }
        />
      </div>
    )
  }
}

LocationInput.defaultProps = {
  address: '',
  label: 'Localisation',
  hideLabel: true,
}
