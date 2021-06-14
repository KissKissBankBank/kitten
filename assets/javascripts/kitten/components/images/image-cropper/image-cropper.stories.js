import React from 'react'
import { ImageCropper } from './index'
import { select, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Images/Cropper',
  component: ImageCropper,
}

export const Default = args => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper
        {...args}
        disabled={boolean('Disabled', false)}
        buttonProps={{
          variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
        }}
      />
      <p className="k-u-weight-light">Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
    </div>
  )
}

export const WithImage = () => {
  return (
    <div className="k-u-margin-vertical-quadruple k-u-margin-horizontal-quadruple">
      <ImageCropper
        imageSrc="/kitten.jpg"
        fileName="Steven Kitten"
        disabled={boolean('Disabled', false)}
        buttonProps={{
          variant: select('Variant', ['andromeda', 'orion'], 'andromeda'),
        }}
      />
      <p className="k-u-weight-light">Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
    </div>
  )
}
