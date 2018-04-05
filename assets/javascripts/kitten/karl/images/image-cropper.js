import React from 'react'
import { ImageCropper } from 'kitten/components/images/image-cropper'

export const KarlImageCropper = () => {
  return (
    <ImageCropper
      name="picture"
      uploaderErrorLabel="Erreur sur l'upload du fichier."
      sliderMin={0}
      sliderMax={300}
      label="Image de présentation"
      cropperInfo="Déplacez l’image dans le cadre pour obtenir le plan voulu."
      sliderTitle="Zoom de l’image"
      buttonLabel="Choisir une image"
      description="Taille max : 5 Mo au format JPEG, PNG ou GIF.
        Les dimensions recommandées sont 620x376 px."
    />
  )
}
