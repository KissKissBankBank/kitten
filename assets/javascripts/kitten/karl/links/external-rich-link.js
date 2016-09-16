import PropsProxy from 'kitten/hoc/props-proxy'
import React from 'react'
import ExternalRichLink from 'kitten/components/links/external-rich-link'

// ImageExternalRichLink composed component
const ImageExternalRichLinkProps = {
  children: <img src="https://placekitten.com/g/150/51" alt="Kawaiii kitten!" />
}

const ImageExternalRichLink = PropsProxy(ExternalRichLink, ImageExternalRichLinkProps)

// SvgExternalRichLink composed component
const SvgExternalRichLinkProps = {
  children: (<svg width="100px" height="50px" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
    <polyline points="5 20, 20 20, 25 10, 35 30, 45 10, 55 30, 65 10, 75 30, 80 20, 95 20"
              stroke="black"
              strokeWidth="3"
              fill="none" />
  </svg>)
}

const SvgExternalRichLink = PropsProxy(ExternalRichLink, SvgExternalRichLinkProps)

export { ImageExternalRichLink, SvgExternalRichLink }
