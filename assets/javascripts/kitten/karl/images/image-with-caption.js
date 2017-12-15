import React from 'react'
import { ImageWithCaption } from 'kitten/components/images/image-with-caption'
import { Text } from 'kitten/components/typography/text'

export const KarlImageWithCaption = () => {
  return (
    <ImageWithCaption>
      <Text>
        <span className="k-u-weight-bold">Lorem ipsum dolor</span> sit amet, consectetur adipiscing elit, sed do eiusmod
      </Text>
    </ImageWithCaption>
  )
}
