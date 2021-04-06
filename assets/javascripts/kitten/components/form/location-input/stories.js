import React, { useState, useEffect } from 'react'
import { LocationInput } from './index'
import { text, select } from '@storybook/addon-knobs'
import { Container } from '../../grid/container'

export default {
  title: 'Form/LocationInput',
  component: LocationInput,
}

const variantOptions = {
  Andromeda: 'andromeda',
  Orion: 'orion',
}

export const Default = () => {
  const [googleMapsReady, setGoogleMapsReadiness] = useState(false)

  useEffect(() => {
    loadGoogleMaps(() => setGoogleMapsReadiness(true))

    return () => unloadGoogleMaps()
  }, [])

  const loadGoogleMaps = callback => {
    const existingScript = document.getElementById('googlePlacesScript')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=${text('GOOGLE_PLACES_API_KEY', 'YOUR_KEY')}&libraries=places`
      script.id = 'googleMaps'
      document.body.appendChild(script)

      script.onload = () => {
        if (callback) callback()
      }
    }
    if (existingScript && callback) callback()
  }

  const unloadGoogleMaps = () => {
    let googlePlacesScript = document.getElementById('googlePlacesScript')
    if (googlePlacesScript) {
      googlePlacesScript.remove()
    }
  }

  if (!googleMapsReady) return <p>Loading</p>

  return (
    <Container>
      <LocationInput
        onChange={e => console.warn(e)}
        onSelect={e => console.warn(e)}
        variant={select('Variant', variantOptions, 'andromeda')}
      />
      😺😸😹😻😼😽🙀😿😾
    </Container>
  )
}
