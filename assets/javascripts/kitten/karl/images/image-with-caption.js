import React from 'react'
import { ImageWithCaption } from '../../components/images/image-with-caption'
import { Text } from '../../components/typography/text'

export const KarlImageWithCaption = () => {
  return (
    <ImageWithCaption>
      <Text size="default" color="font1">
        <span className="k-u-weight-bold">Lorem ipsum dolor </span>
        sit amet, consectetur adipiscing elit, sed do eiusmod
      </Text>
    </ImageWithCaption>
  )
}
