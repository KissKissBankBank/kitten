import React from 'react';
import { TextInputWithUnit } from 'kitten/components/form/text-input-with-unit';

describe('<TextInputWithUnit />', () => {
  describe('by default', () => {
    const component = shallow(<TextInputWithUnit />);

    it('renders a <div />', () => {
      expect(component.is('div')).toBe(true);
    });

    it('has a "k-TextInputWithUnit" class', () => {
      expect(component.hasClass('k-TextInputWithUnit')).toBe(true);
    });

    it('has a "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component.hasClass('k-TextInputWithUnit--fullWidth')).toBe(true);
    });

    it('renders an input.k-TextInputWithUnit__input', () => {
      const textInput = component.find('TextInput');

      expect(textInput.dive().is('input')).toBe(true);
      expect(textInput.dive().hasClass('k-TextInputWithUnit__input')).toBe(
        true
      );
    });

    it('renders a span.k-TextInputWithUnit__unit', () => {
      const span = component.find('span');

      expect(span.is('span')).toBe(true);
      expect(span.hasClass('k-TextInputWithUnit__unit')).toBe(true);
    });
  });

  describe('tiny prop', () => {
    const component = mount(<TextInputWithUnit tiny />);
    const textInput = component.find('input');
    const span = component.find('span');
    const textInputExpectation = textInput.hasClass('k-TextInput--tiny');
    const spanExpectation = span.hasClass('k-TextInputWithUnit__unit--tiny');

    it('has an <input /> with "k-TextInput--tiny" class', () => {
      expect(textInputExpectation).toBe(true);
    });

    it('has a <span /> with "k-TextInputWithUnit__unit--tiny" class', () => {
      expect(spanExpectation).toBe(true);
    });
  });

  describe('valid prop', () => {
    const component = mount(<TextInputWithUnit valid />);
    const textInput = component.find('input');
    const span = component.find('span');
    const textInputExpectation = textInput.hasClass('is-valid');
    const spanExpectation = span.hasClass('is-valid');

    it('has an <input /> with "is-valid" class', () => {
      expect(textInputExpectation).toBe(true);
    });

    it('has a <span /> with "is-valid" class', () => {
      expect(spanExpectation).toBe(true);
    });
  });

  describe('error prop', () => {
    const component = mount(<TextInputWithUnit error />);
    const textInput = component.find('input');
    const span = component.find('span');
    const textInputExpectation = textInput.hasClass('is-error');
    const spanExpectation = span.hasClass('is-error');

    it('has an <input /> with "is-error" class', () => {
      expect(textInputExpectation).toBe(true);
    });

    it('has a <span /> with "is-error" class', () => {
      expect(spanExpectation).toBe(true);
    });
  });

  describe('unitWord prop', () => {
    const component = mount(<TextInputWithUnit unitWord />);
    const span = component.find('span');
    const spanExpectation = span.hasClass('k-TextInputWithUnit__unitWord');

    it('has a <span /> with "k-TextInputWithUnit__unitWord" class', () => {
      expect(spanExpectation).toBe(true);
    });
  });

  describe('digits prop', () => {
    const component = mount(<TextInputWithUnit digits={2} />);

    it('does not have "k-TextInputWithUnit--fullWidth" class', () => {
      expect(component.hasClass('k-TextInputWithUnit--fullWidth')).toBe(false);
    });

    it('has a <TextInput /> with digits prop', () => {
      expect(component.find('TextInput').props().digits).toBe(2);
    });
  });

  describe('disabled prop', () => {
    const component = mount(<TextInputWithUnit disabled />);
    const textInput = component.find('TextInput');
    const span = component.find('span');
    const spanExpectation = span.hasClass('is-inactive');

    it('has a disabled <input />', () => {
      expect(textInput.props().disabled).toBeTruthy();
    });

    it('has a <span /> with "is-inactive" class', () => {
      expect(spanExpectation).toBe(true);
    });
  });
});
