import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import { ProjectCard } from 'kitten/components/cards/project-card'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { IconBadge } from 'kitten/components/notifications/icon-badge'
import { Title } from 'kitten/components/typography/title'
import { Progress } from 'kitten/components/meters/progress'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { TagList } from 'kitten/components/lists/tag-list'

describe('<ProjectCard />', () => {
  describe('by default', () => {
    const projectCard = shallow(<ProjectCard />)

    it('is a <div />', () => {
      expect(projectCard).to.have.tagName('div')
    })

    it('has default class', () => {
      expect(projectCard.dive()).to.have.className('k-ProjectCard')
    })
  })

  describe('with linkHref prop', () => {
    const projectCard = shallow(<ProjectCard linkHref="#" />)

    it('is a <a />', () => {
      expect(projectCard).to.have.tagName('a')
    })

    it('has a href attribute', () => {
      expect(projectCard).to.have.attr('href', '#')
    })
  })

  describe('with linkTitle prop', () => {
    const projectCard = shallow(<ProjectCard linkTitle="Custom link title" />)

    it('has a title attribute', () => {
      expect(projectCard).to.have.attr('title', 'Custom link title')
    })
  })

  describe('with disabled prop', () => {
    const projectCard = shallow(<ProjectCard href="#" disabled />)

    it('has a disabled class', () => {
      expect(projectCard.dive()).to.have.className('is-disabled')
    })

    it('removes href attribute and <a> tag', () => {
      expect(projectCard).to.have.tagName('div')
      expect(projectCard).not.to.have.attr('href')
    })
  })

  describe('with className prop', () => {
    const projectCard = shallow(<ProjectCard className="custom__class" />)

    it('has a custom class', () => {
      expect(projectCard.dive()).to.have.className('custom__class')
    })
  })

  describe('with ownerAvatarSrc prop', () => {
    const projectCard = mount(
      <ProjectCard ownerAvatarSrc="#avatar" />
    )
    const buttonImage = projectCard.find(ButtonImage)
    const buttonImageImgProps = { src: '#avatar' }

    it('has a <ButtonImage /> with img prop', () => {
      expect(buttonImage).to.have.length(1)
      expect(buttonImage.first())
        .to.have.prop('img').deep.equal(buttonImageImgProps)
    })
  })

  describe('with ownerName and ownerLocation props', () => {
    const projectCard = mount(
      <ProjectCard ownerName="Custom name"
                   ownerLocation="Custom location" />
    )
    const paragraph = projectCard.find(Paragraph).first()

    it('renders a name value', () => {
      expect(paragraph).to.contain.text('Custom name')
    })

    it('renders a location value', () => {
      expect(paragraph).to.contain.text('Custom location')
    })
  })

  describe('with tags props', () => {
    const tags = [ { items: [ { key: 'custom-tag', item: 'Custom tag' } ] } ]
    const tagLists = [
      { items: [ { key: 'custom-tag', item: 'Custom tag' } ] },
      { items: [ { key: 'custom-tag-1', item: 'Custom tag 1' } ] },
    ]

    const projectCard = mount(
      <ProjectCard tags={ tags } />
    )

    const projectCardWithTwoLists = mount(
      <ProjectCard tagLists={ tagLists } />
    )

    it('renders a <TagList />', () => {
      expect(projectCard).to.have.descendants(TagList)
    })

    it('renders two <TagList />', () => {
      expect(projectCardWithTwoLists).to.have.exactly(2).descendants(TagList)
    })
  })

  describe('with score prop', () => {
    const projectCard = mount(
      <ProjectCard scoreValue="A" scoreBackgroundColor="#FF0000" />
    )
    const icon = projectCard.find(IconBadge)

    it('renders a <IconBadge />', () => {
      expect(icon).to.have.length(1)
    })

    it('has good props', () => {
      expect(icon).to.have.props([ 'children', 'style' ])
                  .deep.equal([ 'A', { backgroundColor: '#FF0000' } ])
    })
  })

  describe('with title prop', () => {
    const projectCard = mount(
      <ProjectCard title="Custom title" />
    )
    const title = projectCard.find(Title)

    it('renders a <Title />', () => {
      expect(title).to.have.length(1)
    })

    it('renders a good text', () => {
      expect(title).to.have.text('Custom title')
    })
  })

  describe('with image prop', () => {
    const projectCard = mount(<ProjectCard imageSrc="test" />)
    const image = projectCard.find('.k-ProjectCard__img')

    it('renders an image with good href', () => {
      expect(image).to.have.length(1)
      expect(image).to.have.attr('src', 'test')
    })
  })

  describe('with progress prop', () => {
    const projectCard = mount(<ProjectCard progress="42" />)
    const progress = projectCard.find(Progress)

    it('renders a <Progress value="42" />', () => {
      expect(progress).to.have.length(1)
      expect(progress).to.have.prop('value', '42')
    })
  })

  describe('with infos props', () => {
    const projectCard = mount(
      <ProjectCard
        info1={ { value: 'Custom value 1', text: 'Custom text 1' } }
        info2={ { value: 'Custom value 2', text: 'Custom text 2', locked: true } }
        info3={ { value: 'Custom value 3', text: 'Custom text 3', reverse: true } } />
    )
    const infos = projectCard.find('.k-ProjectCard__info')

    it('renders 3 blocks', () => {
      expect(infos).to.have.length(3)
    })

    it('has a first block with text then displayed value', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo.props().children[0]).to.be.equal('Custom text 1')
      expect(firstInfo.props().children[2].props.children).to.be.equal('Custom value 1')
    })

    it('has second block with text then locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo.props().children[0]).to.be.equal('Custom text 2')
      expect(secondInfo).to.have.descendants(LockIcon)
    })

    it('has a third block with reversed displayed items', () => {
      const firstInfo = infos.at(2)

      expect(firstInfo.props().children[0].props.children).to.be.equal('Custom value 3')
      expect(firstInfo.props().children[2]).to.be.equal('Custom text 3')
    })
  })

  describe('with coloredInfosValues prop', () => {
    const projectCard = mount(
      <ProjectCard
        coloredInfosValues
        info1={ { value: 'Custom value 1', text: 'Custom text 1' } } />
    )
    const info = projectCard.find('.k-ProjectCard__info').first()
    const value = info.find('.k-ProjectCard__info__value')

    it('renders an info value with color modifier', () => {
      expect(value).to.have.className('k-u-color-primary1')
    })
  })

  describe('with status props', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusWithoutTopBorder />
    )
    const status = projectCard.find('.k-ProjectCard__status')

    it('renders a status block', () => {
      expect(status).to.have.length(1)
      expect(status).to.have.descendants('.k-ProjectCard__status__content')
      expect(status).to.contain.text('Custom status')
    })
  })

  describe('with statusPrimaryBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusPrimaryBackground />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--primaryBackground')
    })
  })

  describe('with statusTertiaryBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusTertiaryBackground />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--tertiaryBackground')
    })
  })

  describe('with statusGreyBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusGreyBackground />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--greyBackground')
    })
  })

  describe('with statusErrorBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusErrorBackground />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--errorBackground')
    })
  })

  describe('with statusErrorReverseBackground prop', () => {
    const projectCard = mount(
      <ProjectCard statusContent="Custom status"
                   statusErrorReverseBackground />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    it('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--errorReverseBackground')
    })
  })

  describe('with tooltipText prop', () => {
    const projectCard = mount(
      <ProjectCard tooltipText="Custom text" />
    )

    it('has good classes', () => {
      expect(projectCard).to.have.descendants('.k-ProjectCard__tooltip')
      expect(projectCard)
        .to.have.descendants('.k-ProjectCard__tooltip__content')
    })

    it('has a good text', () => {
      const content =
        projectCard.find('.k-ProjectCard__tooltip__content').first()

      expect(content).to.have.text('Custom text')
    })
  })
})
