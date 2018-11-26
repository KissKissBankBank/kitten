import React from 'react'
import { Text } from '../../../assets/javascripts/kitten/components/typography/text'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <Example
          title="Text with normal line-height"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text lineHeight="normal">Lorem ipsum…</Text>
        </Example>
        <Example
          title="Text with underline decoration"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text decoration="underline">Lorem ipsum…</Text>
        </Example>
        <Example
          title="Text with italic style"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text fontStyle="italic">Lorem ipsum…</Text>
        </Example>
        <Example
          title="Text with uppercase transformation"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text transform="uppercase">Lorem ipsum…</Text>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <Example
          title="Text with different weights"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text weight="light">Lorem ipsum…</Text>
          <br />
          <Text weight="regular">Lorem ipsum…</Text>
          <br />
          <Text weight="bold">Lorem ipsum…</Text>
        </Example>
        <Example
          title="Text with color option"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text color="primary1">Lorem ipsum…</Text>
          <br />
          <Text color="error">Lorem ipsum…</Text>
          <br />
          <Text color="valid">Lorem ipsum…</Text>
        </Example>
      </div>
      <div className="k-Grid__col k-Grid__col--12 k-Grid__col--4@l">
        <Example
          title="Text with different sizes"
          className="k-Grid__col--3@s k-Grid__col--12@l"
        >
          <Text size="huge">Lorem ipsum…</Text>
          <br />
          <Text size="big">Lorem ipsum…</Text>
          <br />
          <Text size="default">Lorem ipsum…</Text>
          <br />
          <Text size="tiny">Lorem ipsum…</Text>
          <br />
          <Text size="micro">Lorem ipsum…</Text>
          <br />
          <Text size="nano">Lorem ipsum…</Text>
          <br />
        </Example>
      </div>
    </div>
  )
}
