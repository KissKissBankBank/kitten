import React from 'react'
import renderer from 'react-test-renderer'
import { ColorSelect } from './index'
import { Text, Button } from 'kitten'

describe('<ColorSelect />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <ColorSelect
          name="test-color-select"
          onChange={() => {}}
          value="#556954"
          contrastColor="#555"
          contrastRatio={3}
          inputProps={{
            id: 'test-color-select',
            'aria-label': 'Code hexadécimal de la couleur',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should match its snapshot with props and children', () => {
    const tree = renderer
      .create(
        <ColorSelect
          name="test-color-select"
          onChange={() => {}}
          value="#556954"
          contrastColor="#555"
          contrastRatio={3}
          inputProps={{
            id: 'test-color-select',
            'aria-label': 'Code hexadécimal de la couleur',
          }}
        >
          <div
            className="k-u-flex k-u-flex-alignItems-center k-u-flex-justifyContent-end k-u-flex-gap-single"
            style={{
              '--color-primary-100': '#7ab3ff',
              '--color-primary-300': '#3d8fff',
              '--color-primary-500': '#006cff',
              '--color-primary-700': '#0052c2',
              '--color-primary-900': '#003885',
            }}
          >
            <Text size="small">Rendu&nbsp;:</Text>
            <Button
              modifier="helium"
              rounded
              size="small"
              fit="content"
              type="button"
            >
              S’abonner
            </Button>
          </div>
        </ColorSelect>,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
