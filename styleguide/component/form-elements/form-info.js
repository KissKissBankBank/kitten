import React from 'react'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'
import { CheckboxSet } from 'kitten/components/form/checkbox-set'
import Example from '../../app/example'
import { TextInput } from 'kitten/components/form/text-input'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example
            title="Normal"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <div className="k-FormInfo">
              <label htmlFor="input-form-info" className="k-FormInfo__label">
                Label name
              </label>

              <TextInput
                id="input-form-info"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </div>
          </Example>
          <Example
            title="Text input error"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <div className="k-FormInfo">
              <label
                htmlFor="input-form-info-error"
                className="k-FormInfo__label"
              >
                Label name
              </label>

              <TextInput
                id="input-form-info-error"
                error
                placeholder="Lorem ipsum dolor sit amet"
              />

              <p className="k-FormInfo__error">
                Cum sociis natoque penatibus et{' '}
                <a href="#" className="k-FormInfo__error__link">
                  magnis
                </a>
              </p>
            </div>
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example
            title="Radio button error"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <div className="k-FormInfo">
              <label className="k-FormInfo__label">Label name</label>

              <RadioButtonSet
                error
                name="formInfoRadioButtonSetError"
                items={[
                  {
                    text: 'Error default',
                    id: 'radioButtonSet1',
                  },
                  {
                    text: 'Error default checked',
                    children: 'lorem ipsum dolor',
                    defaultChecked: true,
                    id: 'radioButtonSet2',
                  },
                ]}
              />

              <p className="k-FormInfo__error">
                Cum sociis natoque penatibus et magnis
              </p>
            </div>
          </Example>
          <Example
            title="Checkbox error"
            className="k-Grid__col--6@m k-Grid__col--12@l"
          >
            <div className="k-FormInfo">
              <label className="k-FormInfo__label">Label name</label>

              <CheckboxSet
                error
                name="checkboxSet[]"
                items={[
                  {
                    children: 'Error default',
                    id: 'checkboxSet1',
                  },
                  {
                    children: 'Error default checked',
                    defaultChecked: true,
                    id: 'checkboxSet2',
                  },
                ]}
              />

              <p className="k-FormInfo__error">
                Cum sociis natoque penatibus et magnis
              </p>
            </div>
          </Example>
        </div>
      </div>
    </div>
  )
}
