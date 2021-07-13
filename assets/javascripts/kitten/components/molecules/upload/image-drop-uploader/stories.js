import React, { useState } from 'react'
import { ImageDropUploader } from './index'
import { boolean, text } from '@storybook/addon-knobs'
import { BackingCard, Grid, GridCol, Tag, Container } from '../../../..'

export default {
  component: ImageDropUploader,
  title: 'Molecules/Upload/ImageDropUploader',
}

export const StatusReady = () => (
  <ImageDropUploader
    id="ImageDropUploader"
    buttonTitle="Upload an image"
    buttonText={
      <>
        Ratio: 16/10 (800x500px)
        <br />
        Max size: 5MB
        <br />
        Format: JPG, PNG, GIF
      </>
    }
    managerTitle="Frame your image"
    managerText="You can move your image around the frame"
    onChange={e => console.warn('onChange', e)}
    onCancel={e => console.warn('onCancel', e)}
    onUpload={e => console.warn('onUpload', e)}
    disabled={boolean('Disabled?', false)}
    error={boolean('Error?', false)}
    errorMessage={text('ErrorMessage', null)}
    typeErrorText="Wrong file type"
    sizeErrorText="File too larg"
    quantityErrorText="Too many files"
    canCrop={boolean('canCrop', true)}
  />
)

export const StatusManage = () => (
  <ImageDropUploader
    id="ImageDropUploader"
    buttonTitle="Upload an image"
    buttonText={
      <>
        Ratio: 16/10 (800x500px)
        <br />
        Max size: 5MB
        <br />
        Format: JPG, PNG, GIF
      </>
    }
    managerTitle="Frame your image"
    managerText="You can move your image around the frame"
    initialValue="/kitten.jpg"
    initialCrop={{ height: 592, width: 948, x: 0, y: 265 }}
    onChange={e => console.warn('onChange', e)}
    onCancel={e => console.warn('onCancel', e)}
    onUpload={e => console.warn('onUpload', e)}
    disabled={boolean('Disabled?', false)}
    error={boolean('Error?', false)}
    errorMessageMessage={text('ErrorMessage', null)}
    typeErrorText="Wrong file type"
    sizeErrorText="File too larg"
    quantityErrorText="Too many files"
    canCrop={boolean('canCrop', true)}
  />
)

export const WithDistantImage = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [imagePosition, setImagePosition] = useState(null)

  const handleChange = data => {
    setImageUrl(data.value)
    setImagePosition(
      `${data?.cropperData?.cropPercent?.x}% ${data?.cropperData?.cropPercent?.y}%`,
    )
  }

  return (
    <Container>
      <Grid>
        <GridCol col-l="6">
          <ImageDropUploader
            id="ImageDropUploader"
            buttonTitle="Upload an image"
            buttonText={
              <>
                Ratio: 16/10 (800x500px)
                <br />
                Max size: 5MB
                <br />
                Format: JPG, PNG, GIF
              </>
            }
            managerTitle="Frame your image"
            managerText="You can move your image around the frame"
            initialValue="/kitten.jpg"
            initialCrop={{ height: 592, width: 948, x: 0, y: 0 }}
            onChange={handleChange}
            disabled={boolean('Disabled?', false)}
            error={boolean('Error?', false)}
            errorMessageMessage={text('ErrorMessage', null)}
            typeErrorText="Wrong file type"
            sizeErrorText="File too larg"
            quantityErrorText="Too many files"
            canCrop={boolean('canCrop', true)}
          />
        </GridCol>
        <GridCol col-l="3" offset-l="2">
          <BackingCard>
            {imageUrl && (
              <BackingCard.Image>
                <img
                  src={imageUrl}
                  alt=""
                  style={{ objectPosition: imagePosition }}
                />
              </BackingCard.Image>
            )}
            <BackingCard.HeadingTag icon="star" text="Star reward" />
            <BackingCard.Title>
              Lorem ipsum dolor sit amet, consectetuer adipiscing eget dolor.
            </BackingCard.Title>
            <BackingCard.Amount>65&nbsp;€</BackingCard.Amount>
            <BackingCard.Info
              legend="Prix de livraison&nbsp;:"
              value="5&nbsp;€ (en France)"
            />
            <BackingCard.Info
              legend="Livraison estimée&nbsp;:"
              value="Janvier 2022"
            />
            <BackingCard.Description moreButtonText="See more…" truncateText>
              <p className="k-u-margin-none">
                <strong className="k-u-weight-regular">Maecenas tempus</strong>,
                tellus eget condimentum rhoncus, sem quam semper libero,{' '}
                <em className="k-u-style-italic">sit amet adipiscing</em> sem
                neque sed ipsum.
              </p>
              <p className="k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
              <p className="k-u-margin-none">
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tell
              </p>
            </BackingCard.Description>
            <BackingCard.TagList>
              <Tag as="li">
                <strong className="k-u-weight-regular">5</strong> contributeurs
              </Tag>
              <Tag as="li">
                <strong className="k-u-weight-regular">2/6</strong> disponibles
              </Tag>
            </BackingCard.TagList>
          </BackingCard>
        </GridCol>
      </Grid>
    </Container>
  )
}
