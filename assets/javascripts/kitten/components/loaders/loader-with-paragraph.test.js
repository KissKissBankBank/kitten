import React from 'react'
import { mount } from 'enzyme'
import { LoaderWithParagraph }
  from 'kitten/components/loaders/loader-with-paragraph'
import { Loader } from 'kitten/components/loaders/loader'
import { Paragraph } from 'kitten/components/typography/paragraph'

describe('<LoaderWithParagraph />', () => {
  describe('by default', () => {
    const loader = mount(<LoaderWithParagraph />)

    test('is a <div />', () => {
      expect(loader).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(loader.hasClass('k-LoaderWithParagraph')).to.equal(true)
    })

    test('has a default text', () => {
      expect(loader).to.have.text('Loading')
    })

    test('has a paragraph component', () => {
      expect(loader).to.have.descendants(Paragraph)
    })

    test('has a loader component', () => {
      expect(loader).to.have.descendants(Loader)
    })

    test('has a loader to right of paragraph', () => {
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

    test('has a good text', () => {
      expect(loader).to.have.text('Lorem ipsum…')
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<LoaderWithParagraph className="custom__class" />)

    test('is a good class', () => {
      expect(loader.hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with a loaderPosition prop to left', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="left" />)

    test('has a loader to left of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Loader)
      expect(last).to.have.descendants(Paragraph)
    })
  })

  describe('with a loaderPosition prop to top', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="top" />)

    test('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Loader)
      expect(last).to.have.descendants(Paragraph)
    })

    test('has a class to manage columns version', () => {
      expect(loader.hasClass('k-LoaderWithParagraph--column')).to.equal(true)
    })
  })

  describe('with a loaderPosition prop to bottom', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="bottom" />)

    test('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first).to.have.descendants(Paragraph)
      expect(last).to.have.descendants(Loader)
    })

    test('has a class to manage columns version', () => {
      expect(loader.hasClass('k-LoaderWithParagraph--column')).to.equal(true)
    })
  })

  describe('with loaderProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph loaderProps={ { className: 'custom__class' } } />
    )

    test('has a custom class on Loader component', () => {
      expect(loader).to.have.descendants('.custom__class')
    })
  })

  describe('with paragraphProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph paragraphProps={ { className: 'custom__class' } } />
    )

    test('has a custom class on Paragraph component', () => {
      expect(loader).to.have.descendants('.custom__class')
    })
  })
})
