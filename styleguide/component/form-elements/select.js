import React from 'react'
import { SelectWithState } from 'kitten/components/form/select-with-state'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example title="Tiny" className="k-Grid__col--4@m k-Grid__col--12@l">
            <SelectWithState
              id="select-with-label"
              tiny
              options={[
                { value: 'de', label: 'Deutsch' },
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
              ]}
            />
          </Example>
          <Example
            title="Normal"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <SelectWithState
              value="fr"
              tiny
              options={[
                { value: 'de', label: 'Deutsch' },
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
                { value: 'it', label: 'Italiano' },
                { value: 'nl', label: 'Nederlands' },
                { value: 'sv', label: 'Svenska', disabled: true },
                { value: 'no', label: 'Norsk', disabled: true },
                { value: 'is', label: 'Íslenska', disabled: true },
                { value: 'ca', label: 'Català' },
                { value: 'ki', label: 'Gĩkũyũ' },
                { value: 'se', label: 'Davvisámegiella' },
                { value: 'av', label: 'авар мацӀ' },
              ]}
            />
          </Example>
          <Example title="Error" className="k-Grid__col--4@m k-Grid__col--12@l">
            <SelectWithState
              id="error-select"
              error
              options={[
                { value: 'de', label: 'Deutsch' },
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
              ]}
            />
          </Example>
        </div>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--6@l">
        <div className="k-Grid">
          <Example
            title="With sub-levels"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <SelectWithState
              placeholder="Select…"
              options={[
                {
                  label: 'Genus Catopuma',
                  children: [
                    { label: 'Catopuma Temminckii' },
                    { label: 'Catopuma badia' },
                  ],
                },
                {
                  label: 'Genus Otocolobus',
                  children: [{ label: 'Manul' }],
                },
                { label: 'Genus Profelis', children: [] },
                {
                  label: 'Genus Felis',
                  children: [
                    { label: 'Feles silvestris' },
                    { label: 'Margarita' },
                    { label: 'Chaus' },
                    { label: 'Feles nigripes', disabled: true },
                    { label: 'Feles Bieti' },
                  ],
                },
                { label: 'Genus Disablus', children: [], disabled: true },
              ]}
            />
          </Example>
          <Example
            title="With label"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <SelectWithState
              id="select-with-label"
              labelText="Please select a language"
              options={[
                { value: 'de', label: 'Deutsch' },
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
              ]}
            />
          </Example>
          <Example
            title="With searchable"
            className="k-Grid__col--4@m k-Grid__col--12@l"
          >
            <SelectWithState
              id="select-with-searchable"
              searchable
              options={[
                { value: 'de', label: 'Deutsch' },
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
              ]}
            />
          </Example>
        </div>
      </div>
    </div>
  )
}
