import React from 'react'
import SelectWithState from 'kitten/components/form/select-with-state'

class FormAmountAndCurrency extends React.Component {
  render() {
    return (
      <div className="k-FormComposer">
        <div className="k-FormComposer__element">
          <input className="k-TextInput k-TextInput--tiny"
                 type="text"
                 placeholder="Lorem ipsum dolor sit amet" />
        </div>

        <div className="k-FormComposer__element k-FormComposer__element--main">
          <SelectWithState name="currency"
                           options={ this.props.currencyOptions }
                           value={ this.props.value } />
        </div>
      </div>
    )
  }
}

export default FormAmountAndCurrency
