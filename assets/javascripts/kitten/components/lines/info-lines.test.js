import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { InfoLines } from 'kitten/components/lines/info-lines'

describe('<InfoLines />', () => {
  const infos = [
    { key: 'Lorem', value: 'Ipsum'},
    { key: 'Dolor', value: 'Sit amet'},
  ]

  describe('by default', () => {
    const infoLines = shallow(<InfoLines infos={ infos } />)

    it('has a default class', () => {
      expect(infoLines).to.have.className('k-InfoLines')
    })

    it('has a good class on info', () => {
      const firstInfo = infoLines.children().first()
      expect(firstInfo).to.have.className('k-InfoLines__line')
    })
  })
})
