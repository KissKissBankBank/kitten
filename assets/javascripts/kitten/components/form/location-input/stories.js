import React, { useState, useEffect } from 'react'
import { LocationInput } from './index'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Form/LocationInput',
  component: LocationInput,
  decorators: [
    Story => (
      <div className="story-Container">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onChange: {
      name: 'onChange',
    },
    onSelect: {
      name: 'onSelect',
    },
    defaultValue: {
      name: 'defaultValue',
      control: { type: 'text' },
    },
    inputProps: {
      name: 'inputProps',
      control: { type: 'object' },
    },
    name: {
      name: 'name',
      control: { type: 'text' },
    },
    loadingText: {
      name: 'loadingText',
      control: { type: 'text' },
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    onChange: e => console.warn(e),
    onSelect: e => console.warn(e),
    defaultValue: '',
    inputProps: {},
    name: 'location-input',
    loadingText: 'Loading',
    variant: 'andromeda',
  },
}

export const Default = args => {
  const [googleMapsReady, setGoogleMapsReadiness] = useState(false)

  useEffect(() => {
    loadGoogleMaps(() => setGoogleMapsReadiness(true))

    return () => unloadGoogleMaps()
  }, [])

  const loadGoogleMaps = callback => {
    const existingScript = document.getElementById('googlePlacesScript')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${text(
        'GOOGLE_PLACES_API_KEY',
        'YOUR_KEY',
      )}&libraries=places`
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
    <>
      <LocationInput {...args} />
      😺😸😹😻😼😽🙀😿😾
    </>
  )
}
