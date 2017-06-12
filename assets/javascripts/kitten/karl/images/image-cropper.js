import React from 'react'
import { ImageCropper } from 'kitten/components/images/image-cropper'

export const KarlImageCropper = () => {
  const defaultProps = {
    name: 'picture',
    imageSrc: 'https://placekitten.com/480/270',
    fileName: 'kitten.png',
    uploaderErrorLabel: 'You have an error on upload.',
    sliderMin: 0,
    sliderMax: 500,
    label: 'Image de présentation',
    cropperInfo: 'Déplacez l’image dans le cadre pour obtenir le plan voulu.',
    sliderTitle: 'Zoom de l’image',
    buttonLabel: 'Choisissez un fichier',
    description: 'Taille max : 5 Mo au format JPEG, PNG ou GIF. \
      Les dimensions recommandées sont 620x376 px.',
  }

  return (
    <ImageCropper { ...defaultProps } />
  )
}
