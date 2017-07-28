import React, { Component } from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectSimilarCard } from 'kitten/components/cards/project-similar-card'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { TagList } from 'kitten/components/lists/tag-list'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { Loader } from 'kitten/components/loaders/loader'

describe('<ProjectSimilarCard />', () => {
  const project1 = {
    imageSrc: 'image-1',
    title: 'Title 1',
    description: 'This is the description of project 1.',
    tags: [],
    infos: []
  }

  const project2 = {
    imageSrc: 'image-2',
    title: 'Title 2',
    description: 'This is the description of project 2.',
    tags: [{ key: 'tag-1', item: 'Tag 1' }, { key: 'tag-2', item: 'Tag 2' }],
    infos: []
  }

  const project3 = {
    imageSrc: 'image-3',
    title: 'Title 3',
    description: 'This is the description of project 3.',
    tags: [],
    infos: [
      {
        key: 'info-1',
        text: 'Custom text 1',
        value: 'Custom value 1'
      },
      {
        key: 'info-2',
        text: 'Custom text 2',
        value: 'Custom value 2',
        locked: true
      },
      {
        key: 'info-3',
        text: 'Custom text 3',
        value: 'Custom value 3'
      }
    ]
  }

  describe('by default', () => {
    const projectSimilarCard = shallow(<ProjectSimilarCard />)

    it('is a <div />', () => {
      expect(projectSimilarCard).to.have.tagName('div')
    })

    it('has a default class', () => {
      expect(projectSimilarCard.dive()).to.have.className('k-ProjectSimilarCard')
    })
  })

  describe('with projects props', () => {
    describe('on ComponentDidMount', () => {
      describe('with one basic project', () => {
        const projectSimilarCard = mount(
          <ProjectSimilarCard projects={ [project1] }/>
        )
        const image = projectSimilarCard.find('.k-ProjectSimilarCard__img')
        const title = projectSimilarCard.find('.k-Title')
        const paragraph = projectSimilarCard.find('.k-Paragraph')

        it('renders an image with good href', () => {
          expect(image).to.have.length(1)
          expect(image).to.have.attr('src', 'image-1')
        })

        it('renders a <Title />', () => {
          expect(projectSimilarCard).to.have.descendants(Title)
          expect(title.text()).to.equal('Title 1')
        })

        it('renders a <Paragraph />', () => {
          expect(projectSimilarCard).to.have.descendants(Paragraph)
          expect(paragraph.text())
            .to.equal('This is the description of project 1.')
        })
      })

      describe('with one project with tags', () => {
        const projectSimilarCard = mount(
          <ProjectSimilarCard projects={ [project2] }/>
        )
        const tags = projectSimilarCard.find('.k-TagList')

        it('renders a <TagList />', () => {
          expect(projectSimilarCard).to.have.descendants(TagList)
        })

        it('has a first block with good item', () => {
          const firstTag = tags.find('.k-TagList__item--first')

          expect(firstTag).to.contain.text('Tag 1')
        })
      })

      describe('with one project with infos', () => {
        const projectSimilarCard = mount(
          <ProjectSimilarCard projects={ [project3] }/>
        )
        const infos = projectSimilarCard.find('.k-ProjectSimilarCard__info')

        it('renders 3 blocks', () => {
          expect(infos).to.have.length(3)
        })

        it('has a first block with good values', () => {
          const firstInfo = infos.at(0)

          expect(firstInfo).to.contain.text('Custom value 1')
          expect(firstInfo).to.contain.text('Custom text 1')
        })

        it('has second block with locked value', () => {
          const secondInfo = infos.at(1)

          expect(secondInfo).to.have.descendants(LockIcon)
          expect(secondInfo).to.contain.text('Custom text 2')
        })
      })

    })
  })

  describe('with coloredInfosValues prop', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard
        coloredInfosValues
        projects={ [project3] }
      />
    )
    const info = projectSimilarCard.find('.k-ProjectSimilarCard__info').first()
    const value = info.find('.k-ProjectSimilarCard__info__value')

    it('renders an info value with color modifier', () => {
      expect(value).to.have.className('k-u-color-primary1')
    })
  })

  describe('with refresh props', () => {
    const projectSimilarCard = mount(
      <ProjectSimilarCard refresh="Custom refresh" />
    )
    const refreshLink = projectSimilarCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    it('renders a refresh link with the right text', () => {
      expect(refreshLink).to.contain.text('Custom refresh')
    })
  })

  describe('with onRefreshClick prop', () => {
    const handleRefreshClick = () => {}
    const projectSimilarCard = mount(
      <ProjectSimilarCard onRefreshClick={ handleRefreshClick } />
    )
    const refreshLink = projectSimilarCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    it('attaches the right handler to the onClick prop', () => {
      expect(refreshLink.props().onClick).to.equal(handleRefreshClick)
    })
  })

  describe('with loading prop', () => {
    const projectSimilarCard = mount(<ProjectSimilarCard loading />)
    const loader = projectSimilarCard.find('.k-ProjectSimilarCard__loading')

    it('render <Loader />', () => {
      expect(projectSimilarCard).to.have.descendants(Loader)
      expect(loader).to.have.length(1)
    })
  })
})
