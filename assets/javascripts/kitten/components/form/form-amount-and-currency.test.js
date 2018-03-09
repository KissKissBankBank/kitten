import React from 'react';
import { SelectWithState } from 'kitten/components/form/select-with-state';
import { TextInput } from 'kitten/components/form/text-input';
import { FormAmountAndCurrency } from 'kitten/components/form/form-amount-and-currency';

describe('<FormAmountAndCurrency />', () => {
  describe('valid prop', () => {
    const component = shallow(<FormAmountAndCurrency valid={true} />);

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toMatchObject({ valid: true });
    });
  });

  describe('error prop', () => {
    const component = shallow(<FormAmountAndCurrency error={true} />);

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toMatchObject({ error: true });
    });
  });

  describe('tiny prop', () => {
    const component = shallow(<FormAmountAndCurrency tiny={true} />);

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toMatchObject({ tiny: true });
    });
  });

  describe('disabled prop', () => {
    const component = shallow(<FormAmountAndCurrency disabled />);

    it('passes the right props to the `FormAmountAndCurrency` component', () => {
      expect(component.props()).toMatchObject({ disabled: true });
    });
  });
});
