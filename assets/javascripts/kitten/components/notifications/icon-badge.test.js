import React from 'react';
import { IconBadge } from 'kitten/components/notifications/icon-badge';

describe('<IconBadge />', () => {
  describe('by default', () => {
    const iconBadge = shallow(<IconBadge />);

    it('is a <span />', () => {
      expect(iconBadge.type()).toBe('span');
    });

    it('has default classes', () => {
      expect(iconBadge.hasClass('k-IconBadge')).toBe(true);
      expect(iconBadge.find('.k-IconBadge__content').exists()).toBe(true);
    });
  });

  describe('with custom class', () => {
    const iconBadge = shallow(<IconBadge className="custom__class" />);

    it('has a custom class', () => {
      expect(iconBadge.hasClass('custom__class')).toBe(true);
    });
  });

  describe('with other prop', () => {
    const iconBadge = shallow(<IconBadge aria-hidden="true" />);

    it('has an aria-hidden attribute', () => {
      expect(iconBadge.props()['aria-hidden']).toBe('true');
    });
  });

  describe('with children', () => {
    const iconBadge = shallow(<IconBadge>A+</IconBadge>);

    it('has text', () => {
      expect(iconBadge.text()).toBe('A+');
    });
  });
});
