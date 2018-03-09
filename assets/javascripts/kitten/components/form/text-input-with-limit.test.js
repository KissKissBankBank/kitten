import React from 'react';
import sinon from 'sinon';
import { TextInput } from 'kitten/components/form/text-input';
import { TextInputWithLimit } from 'kitten/components/form/text-input-with-limit';

describe('<TextInputWithLimit />', () => {
  const sandbox = sinon.sandbox.create();

  afterEach(() => {
    sandbox.restore();
  });

  describe('by default', () => {
    const defaultComponent = shallow(<TextInputWithLimit />);

    it('renders a .k-TextInputLimit', () => {
      expect(defaultComponent.find('.k-TextInputLimit')).toHaveLength(1);
    });

    it('renders a .k-TextInputLimit__input', () => {
      expect(defaultComponent.find('.k-TextInputLimit__input')).toHaveLength(1);
    });
  });

  describe('defaultValue prop', () => {
    it('sets the counter to the limit when empty', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="" limit={15} />
      );
      const counter = component.find('.k-TextInputLimit__counter');
      expect(counter.text()).toBe('15');
    });

    it('changes the counter when set', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={15} />
      );
      const counter = component.find('.k-TextInputLimit__counter');
      expect(counter.text()).toBe('11');
    });

    it('adds an error when over the limit', () => {
      const component = shallow(
        <TextInputWithLimit defaultValue="Test" limit={3} />
      );
      const counter = component.find('.k-TextInputLimit__counter');
      expect(counter.text()).toBe('-1');
      expect(counter.hasClass('is-error')).toBe(true);
    });
  });

  describe('disabled prop', () => {
    const component = shallow(<TextInputWithLimit disabled />);

    it('is disabled', () => {
      expect(component.hasClass('is-disabled')).toBe(true);
      expect(component.find('TextInput').props().disabled).toBeTruthy();
    });
  });

  describe('on onChange event', () => {
    it('updates the TextInput value', () => {
      const component = mount(<TextInputWithLimit limit={15} />);

      const input = component.find('input');
      component.setState({ value: 'Test' });
      input.simulate('change');

      const counter = component.find('.k-TextInputLimit__counter');
      expect(counter.text()).toBe('11');
    });
  });

  describe('with onChange prop', () => {
    const handleChange = () => {};
    const onChangeSpy = sandbox.spy(handleChange);
    const component = mount(<TextInputWithLimit onChange={onChangeSpy} />);

    beforeAll(() => {
      const input = component.find('input');
      input.simulate('change');
    });

    it('calls the onChange prop callback', () => {
      expect(onChangeSpy.calledOnce).toBe(true);
    });
  });
});
