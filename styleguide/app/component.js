import React from 'react'
import { KarlSeparator } from 'kitten/karl/layout/separator'

export default ({ title, id, component: Comp }) => {
  return (
    <div id={id}>
      {title && <h3 className="k-Row karl-Section__title">{title}</h3>}
      <Comp />
      <KarlSeparator />
    </div>
  )
}
