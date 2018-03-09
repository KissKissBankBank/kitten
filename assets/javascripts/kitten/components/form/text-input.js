import React, { Component } from 'react';
import classNames from 'classnames';

export class TextInput extends Component {
  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  render() {
    const {
      className,
      tag,
      valid,
      error,
      disabled,
      tiny,
      digits,
      ...others
    } = this.props;

    const textInputClassName = classNames('k-TextInput', className, {
      'k-TextInput--tiny': tiny,
      'k-TextAreaWrapper__input': tag == 'textarea',
      'is-valid': valid,
      'is-error': error,
      'is-disabled': disabled,
      'k-TextInput--twoDigits': digits == 2,
      'k-TextInput--twelveDigits': digits == 12
    });

    if (tag == 'textarea') {
      return (
        <div className="k-TextAreaWrapper">
          <textarea
            className={textInputClassName}
            ref={input => (this.input = input)}
            disabled={disabled}
            {...others}
          />
          <div className="k-TextAreaWrapper__gradient" />
        </div>
      );
    } else {
      return (
        <input
          className={textInputClassName}
          ref={input => (this.input = input)}
          disabled={disabled}
          type="text"
          {...others}
        />
      );
    }
  }
}

TextInput.defaultProps = {
  tag: 'input', // or 'textarea'
  valid: false,
  error: false,
  disabled: false,
  tiny: false,
  digits: null
};
