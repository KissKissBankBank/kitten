import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import { LocationIcon } from 'kitten/components/icons/location-icon'

export class LocationInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: 'Localisation',
      address: '',
    }
    this.onChange = (address) => this.setState({ address })
  }

  render() {
    const { label,
            ...other } = this.props

    const classNames = {
      root: 'k-LocationInput__group',
      input: 'k-LocationInput__input',
      autocompleteContainer: 'k-LocationInput__autocomplete'
    }

    const autocompleteItem = ({ formattedSuggestion }) => (
      <div className="k-LocationInput__suggestionItem">
        <LocationIcon />
        <strong>{ formattedSuggestion.mainText }</strong>
        {' '}
        <small>{ formattedSuggestion.secondaryText }</small>
      </div>
    )

    return (
      <div className="k-LocationInput">
        <div className="k-LocationInput__label">
          { label }
        </div>
        <div className="k-LocationInput__icon">
          <LocationIcon />
        </div>
        <PlacesAutocomplete classNames={ classNames }
                            value={ this.state.address }
                            onChange={ this.onChange }
                            placeholder={ this.state.placeholder }
                            autocompleteItem={ autocompleteItem }
                            hideLabel={ true }
                            { ...other } />
      </div>
    )
  }
}

LocationInput.defaultProps = {
  label: 'Localisation',
}
