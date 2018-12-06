import React from 'react'
import { InfoLines } from '../../../assets/javascripts/kitten/components/lines/info-lines'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Info lines" className="k-Grid__col--6@l">
        <InfoLines
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
      <Example
        title="Info lines without top and bottom border"
        className="k-Grid__col--6@l"
      >
        <InfoLines
          withoutTopBottomBorder
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
      <Example
        title="Info lines with custom border color"
        className="k-Grid__col--6@l"
      >
        <InfoLines
          borderColor="#cadbfd"
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
      <Example
        title="Info lines without responsive version"
        className="k-Grid__col--6@l"
      >
        <InfoLines
          withoutResponsive
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
      <Example
        title="Info lines with left and right border"
        className="k-Grid__col--6@l"
      >
        <InfoLines
          withLeftRightBorder
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
      <Example
        title="Info lines with border radius"
        className="k-Grid__col--6@l"
      >
        <InfoLines
          withBorderRadius
          withLeftRightBorder
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />
      </Example>
    </div>
  )
}
