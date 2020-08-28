import React from 'react'
import { LoaderWithParagraph } from './index'
import { Loader } from '../../../components/loaders/loader'
import { Paragraph } from '../../../components/typography/paragraph'

describe('<LoaderWithParagraph />', () => {
  describe('by default', () => {
    const loader = mount(<LoaderWithParagraph />)

    it('is a <div />', () => {
      expect(loader.render().is('div')).toBe(true)
    })

    it('has a default class', () => {
      expect(loader.render().hasClass('k-LoaderWithParagraph')).toBe(true)
    })

    it('has a default text', () => {
      expect(loader.text()).toBe('Loading')
    })

    it('has a paragraph component', () => {
      expect(loader.find(Paragraph).exists()).toBe(true)
    })

    it('has a loader component', () => {
      expect(loader.find(Loader).exists()).toBe(true)
    })

    it('has a loader to right of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first.find(Loader).exists()).toBe(true)
      expect(last.find(Paragraph).exists()).toBe(true)
    })
  })

  describe('with a children', () => {
    const loader = mount(
      <LoaderWithParagraph>Lorem ipsum…</LoaderWithParagraph>,
    )

    it('has a good text', () => {
      expect(loader.text()).toBe('Lorem ipsum…')
    })
  })

  describe('with a custom class', () => {
    const loader = mount(<LoaderWithParagraph className="custom__class" />)

    it('is a good class', () => {
      expect(loader.hasClass('custom__class')).toBe(true)
    })
  })

  describe('with a loaderPosition prop to left', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="left" />)

    it('has a loader to left of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first.find(Loader).exists()).toBe(true)
      expect(last.find(Paragraph).exists()).toBe(true)
    })
  })

  describe('with a loaderPosition prop to top', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="top" />)

    it('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first.find(Loader).exists()).toBe(true)
      expect(last.find(Paragraph).exists()).toBe(true)
    })

    it('has a class to manage columns version', () => {
      expect(loader.render().hasClass('k-LoaderWithParagraph--column')).toBe(
        true,
      )
    })
  })

  describe('with a loaderPosition prop to bottom', () => {
    const loader = mount(<LoaderWithParagraph loaderPosition="bottom" />)

    it('has a loader to top of paragraph', () => {
      const first = loader.children().first()
      const last = loader.children().last()

      expect(first.find(Paragraph).exists()).toBe(true)
      expect(last.find(Loader).exists()).toBe(true)
    })

    it('has a class to manage columns version', () => {
      expect(loader.render().hasClass('k-LoaderWithParagraph--column')).toBe(
        true,
      )
    })
  })

  describe('with loaderProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph loaderProps={{ className: 'custom__class' }} />,
    )

    it('has a custom class on Loader component', () => {
      expect(loader.find('.custom__class').exists()).toBe(true)
    })
  })

  describe('with paragraphProps prop', () => {
    const loader = mount(
      <LoaderWithParagraph paragraphProps={{ className: 'custom__class' }} />,
    )

    it('has a custom class on Paragraph component', () => {
      expect(loader.find('.custom__class').exists()).toBe(true)
    })
  })
})
