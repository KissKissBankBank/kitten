import React from 'react'
import { Badge } from 'kitten/components/notifications/badge'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With one number" className="k-Grid__col--4@l">
        <Badge>4</Badge>
      </Example>
      <Example title="With two numbers" className="k-Grid__col--4@l">
        <Badge>42</Badge>
      </Example>
      <Example title="With more numbers" className="k-Grid__col--4@l">
        <Badge>4242</Badge>
      </Example>
    </div>
  )
}
