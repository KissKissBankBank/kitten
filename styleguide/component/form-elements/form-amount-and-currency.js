import React from 'react'
import { FormAmountAndCurrency } from '../../../assets/javascripts/kitten/components/form/form-amount-and-currency'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--6@m k-Grid__col--12@l">
            <FormAmountAndCurrency
              currencyOptions={[
                { value: 'usd', label: 'USD' },
                { value: 'cad', label: 'CAD' },
                { value: 'gbp', label: 'GBP' },
                { value: 'eur', label: 'EUR' },
              ]}
              currencyName="currency"
              currencyValue="usd"
              placeholder="500"
              tiny
              digits={12}
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <FormAmountAndCurrency
              currencyOptions={[
                { value: 'usd', label: 'USD' },
                { value: 'cad', label: 'CAD' },
                { value: 'gbp', label: 'GBP' },
                { value: 'eur', label: 'EUR' },
              ]}
              currencyName="currency"
              currencyValue="usd"
              placeholder="500"
              digits={12}
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Valid" className="k-Grid__col--6@m k-Grid__col--12@l">
            <FormAmountAndCurrency
              currencyOptions={[
                { value: 'usd', label: 'USD' },
                { value: 'cad', label: 'CAD' },
                { value: 'gbp', label: 'GBP' },
                { value: 'eur', label: 'EUR' },
              ]}
              currencyName="currency"
              currencyValue="usd"
              placeholder="500"
              valid
              validOnSelect
              digits={12}
            />
          </Example>
          <Example title="Error" className="k-Grid__col--6@m k-Grid__col--12@l">
            <FormAmountAndCurrency
              currencyOptions={[
                { value: 'usd', label: 'USD' },
                { value: 'cad', label: 'CAD' },
                { value: 'gbp', label: 'GBP' },
                { value: 'eur', label: 'EUR' },
              ]}
              currencyName="currency"
              currencyValue="usd"
              placeholder="500"
              error
              errorOnSelect
              digits={12}
            />
          </Example>
          <Example
            title="Disabled"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <FormAmountAndCurrency
              currencyOptions={[
                { value: 'usd', label: 'USD' },
                { value: 'cad', label: 'CAD' },
                { value: 'gbp', label: 'GBP' },
                { value: 'eur', label: 'EUR' },
              ]}
              currencyName="currency"
              currencyValue="usd"
              placeholder="500"
              disabled
              digits={12}
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
