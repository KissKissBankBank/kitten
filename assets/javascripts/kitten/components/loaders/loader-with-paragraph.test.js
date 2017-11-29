import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { LoaderWithParagraph }
  from 'kitten/components/loaders/loader-with-paragraph'
import { Loader } from 'kitten/components/loaders/loader'
import { Paragraph } from 'kitten/components/typography/paragraph'

describe('<LoaderWithParagraph />', () => {
  describe('by default', () => {
    const loader = mount(<LoaderWithParagraph />)

    it('is a <div />', () => {
      expect(loader).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(loader).to.have.className('k-LoaderWithParagraph')
    })

    it('has a default text', () => {
      expect(loader).to.have.text('Loading')
    })

    it('has a paragraph component', () => {
      expect(loader).to.have.descendants(Paragraph)
    })

    it('has a loader component', () => {
      expect(loader).to.have.descendants(Loader)
    })

    it('has a loader to right of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Loader)
      expect(last).to.have.descendants(Paragraph)
    })
  })

  describe('with a children', () => {
    const loader = mount(
      <LoaderWithParagraph>Lorem ipsum…</LoaderWithParagraph>
    )

    it('has a good text', () => {
      expect(loader).to.have.text('Lorem ipsum…')
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<LoaderWithParagraph className="custom__class" />)

    it('is a good class', () => {
      expect(loader).to.have.className('custom__class')
    })
  })

  describe('with a loaderPosition prop to left', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="left" />)

    it('has a loader to left of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Loader)
      expect(last).to.have.descendants(Paragraph)
    })
  })

  describe('with a loaderPosition prop to top', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="top" />)

    it('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Loader)
      expect(last).to.have.descendants(Paragraph)
    })

    it('has a class to manage columns version', () => {
      expect(loader).to.have.className('k-LoaderWithParagraph--column')
    })
  })

  describe('with a loaderPosition prop to bottom', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="bottom" />)

    it('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Paragraph)
      expect(last).to.have.descendants(Loader)
    })

    it('has a class to manage columns version', () => {
      expect(loader).to.have.className('k-LoaderWithParagraph--column')
    })
  })

  describe('with loaderProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph loaderProps={ { className: 'custom__class' } } />
    )

    it('has a custom class on Loader component', () => {
      expect(loader).to.have.descendants('.custom__class')
    })
  })

  describe('with paragraphProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph paragraphProps={ { className: 'custom__class' } } />
    )

    it('has a custom class on Paragraph component', () => {
      expect(loader).to.have.descendants('.custom__class')
    })
  })
})
