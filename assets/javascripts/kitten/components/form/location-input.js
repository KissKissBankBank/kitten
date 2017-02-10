import React from 'react'
import classNames from 'classnames'
import PlacesAutocomplete from 'react-places-autocomplete'

export class LocationInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: 'Paris' }
    this.onChange = (address) => this.setState({ address })
  }

  render() {
    const myStyles = {
      root: { position: 'absolute', marginBottom: '20px' },
      label: { color: 'red' },
      input: { width: '100%', borderRadius: '4px', borderColor: 'red' },
      autocompleteContainer: { backgroundColor: 'green' },
      autocompleteItem: { color: 'black' },
      autocompleteItemActive: { color: 'blue' }
    }

    return (
      <div className="k-LocationInput">
        <PlacesAutocomplete
          value={ this.state.address }
          onChange={ this.onChange }
          styles={ myStyles }
        />
      </div>
    )
  }
}

LocationInput.defaultProps = {
  address: '',
}
