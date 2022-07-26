import React from 'react';
import { FieldLabel } from './components/label';
import { FieldInput } from './components/input';
import { FieldError } from './components/error';
import { FieldHelp } from './components/help';
import { FieldRadioSet } from './components/radio-set';
import { FieldRadioButtonSet } from './components/radio-button-set';
import { FieldCheckbox } from './components/checkbox';
import { FieldPassword } from './components/password';
import { FieldAutocomplete } from './components/autocomplete';
export class Field extends React.Component {
  constructor() {
    super(...arguments);

    this.render = () => {
      const {
        tag,
        children
      } = this.props;
      const Component = tag;

      if (!!tag) {
        return /*#__PURE__*/React.createElement(Component, null, children);
      }

      return children;
    };
  }

}
Field.Label = FieldLabel;
Field.Input = FieldInput;
Field.RadioSet = FieldRadioSet;
Field.RadioButtonSet = FieldRadioButtonSet;
Field.Checkbox = FieldCheckbox;
Field.ErrorMessage = FieldError;
Field.Help = FieldHelp;
Field.Password = FieldPassword;
Field.Autocomplete = FieldAutocomplete;