import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// KarlImageExternalRichLink
const KarlImageExternalRichLink = defaultProps(ExternalRichLink, {
  children: <img src="https://placekitten.com/g/150/51" alt="Kawaiii kitten!" />
})

// KarlSvgExternalRichLink
const KarlSvgExternalRichLink = defaultProps(ExternalRichLink, {
  children: (<svg width="100px"
                  height="50px"
                  viewBox="0 0 100 50"
                  xmlns="http://www.w3.org/2000/svg">
    <polyline points="5 20, 20 20, 25 10, 35 30, 45 10, 55 30, 65 10, 75 30"
              stroke="black"
              strokeWidth="3"
              fill="none" />
  </svg>)
})

export { KarlImageExternalRichLink, KarlSvgExternalRichLink }
