import React, { useState, useEffect } from 'react'
import { LocationInput } from './index'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Form/LocationInput',
  component: LocationInput,
  decorators: [story => <div className="story-Container">{story()}</div>],
  argTypes: {
    onChange: {
      name: 'onChange',
    },
    onSelect: {
      name: 'onSelect',
    },
    defaultValue: {
      name: 'defaultValue',
      control: 'text',
    },
    inputProps: {
      name: 'inputProps',
      control: 'object',
    },
    name: {
      name: 'name',
      control: 'text',
    },
    loadingText: {
      name: 'loadingText',
      control: 'text',
    },
    variant: {
      name: 'variant',
      options: ['andromeda', 'orion'],
      control: 'inline-radio',
    },
    gPlaceApiKey: {
      name: 'gPlaceApiKey (story prop)',
      control: 'text',
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
    gPlaceApiKey: 'YOUR KEY',
  },
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="LocationInput" />
      ),
    },
  },
}

export const Default = ({ gPlaceApiKey, ...args }) => {
  const [googleMapsReady, setGoogleMapsReadiness] = useState(false)

  useEffect(() => {
    loadGoogleMaps(() => setGoogleMapsReadiness(true))

    return () => unloadGoogleMaps()
  }, [])

  const loadGoogleMaps = callback => {
    const existingScript = document.getElementById('googlePlacesScript')
    if (!existingScript) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${gPlaceApiKey}&libraries=places`
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
