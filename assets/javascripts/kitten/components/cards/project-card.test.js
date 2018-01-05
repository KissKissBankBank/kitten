import React from 'react'
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

    test('is a <div />', () => {
      expect(projectCard).to.have.tagName('div')
    })

    test('has default class', () => {
      expect(projectCard.dive().hasClass('k-ProjectCard')).to.equal(true)
    })
  })

  describe('with linkHref prop', () => {
    const projectCard = shallow(<ProjectCard linkHref="#" />)

    test('is a <a />', () => {
      expect(projectCard).to.have.tagName('a')
    })

    test('has a href attribute', () => {
      expect(projectCard).to.have.attr('href', '#')
    })
  })

  describe('with linkTitle prop', () => {
    const projectCard = shallow(<ProjectCard linkTitle="Custom link title" />)

    test('has a title attribute', () => {
      expect(projectCard).to.have.attr('title', 'Custom link title')
    })
  })

  describe('with disabled prop', () => {
    const projectCard = shallow(<ProjectCard href="#" disabled />)

    test('has a disabled class', () => {
      expect(projectCard.dive().hasClass('is-disabled')).to.equal(true)
    })

    test('removes href attribute and <a> tag', () => {
      expect(projectCard).to.have.tagName('div')
      expect(projectCard).not.to.have.attr('href')
    })
  })

  describe('with className prop', () => {
    const projectCard = shallow(<ProjectCard className="custom__class" />)

    test('has a custom class', () => {
      expect(projectCard.dive().hasClass('custom__class')).to.equal(true)
    })
  })

  describe('with ownerAvatarSrc prop', () => {
    const projectCard = mount(
      <ProjectCard ownerAvatarSrc="#avatar" />
    )
    const buttonImage = projectCard.find(ButtonImage)
    const buttonImageImgProps = { src: '#avatar' }

    test('has a <ButtonImage /> with img prop', () => {
      expect(buttonImage).toHaveLength(1)
      expect(buttonImage.first())
        .to.have.prop('img').toEqual(buttonImageImgProps)
    })
  })

  describe('with ownerName and ownerLocation props', () => {
    const projectCard = mount(
      <ProjectCard
        ownerName="Custom name"
        ownerLocation="Custom location"
      />
    )
    const paragraph = projectCard.find(Paragraph).first()

    test('renders a name value', () => {
      expect(paragraph).to.contain.text('Custom name')
    })

    test('renders a location value', () => {
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

    test('renders a <TagList />', () => {
      expect(projectCard).to.have.descendants(TagList)
    })

    test('renders two <TagList />', () => {
      expect(projectCardWithTwoLists).to.have.exactly(2).descendants(TagList)
    })
  })

  describe('with score prop', () => {
    const projectCard = mount(
      <ProjectCard scoreValue="A" scoreBackgroundColor="#FF0000" />
    )
    const icon = projectCard.find(IconBadge)

    test('renders a <IconBadge />', () => {
      expect(icon).toHaveLength(1)
    })

    test('has good props', () => {
      expect(icon).to.have.props([ 'children', 'style' ]).toEqual([ 'A', { backgroundColor: '#FF0000' } ])
    })
  })

  describe('with title prop', () => {
    const projectCard = mount(
      <ProjectCard title="Custom title" />
    )
    const title = projectCard.find(Title)

    test('renders a <Title />', () => {
      expect(title).toHaveLength(1)
    })

    test('renders a good text', () => {
      expect(title).to.have.text('Custom title')
    })
  })

  describe('with image prop', () => {
    const projectCard = mount(<ProjectCard imageSrc="test" />)
    const image = projectCard.find('.k-ProjectCard__img')

    test('renders an image with good href', () => {
      expect(image).toHaveLength(1)
      expect(image).to.have.attr('src', 'test')
    })
  })

  describe('with progress prop', () => {
    const projectCard = mount(<ProjectCard progress="42" />)
    const progress = projectCard.find(Progress)

    test('renders a <Progress value="42" />', () => {
      expect(progress).toHaveLength(1)
      expect(progress).to.have.prop('value', '42')
    })
  })

  describe('with infos props', () => {
    const projectCard = mount(
      <ProjectCard
        info1={ { value: 'Custom value 1', text: 'Custom text 1' } }
        info2={ { value: 'Custom value 2', text: 'Custom text 2', locked: true } }
        info3={ { value: 'Custom value 3', text: 'Custom text 3', reverse: true } }
      />
    )
    const infos = projectCard.find('.k-ProjectCard__info')

    test('renders 3 blocks', () => {
      expect(infos).toHaveLength(3)
    })

    test('has a first block with text then displayed value', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo.props().children[0]).toBe('Custom text 1')
      expect(firstInfo.props().children[2].props.children).toBe('Custom value 1')
    })

    test('has second block with text then locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo.props().children[0]).toBe('Custom text 2')
      expect(secondInfo).to.have.descendants(LockIcon)
    })

    test('has a third block with reversed displayed items', () => {
      const firstInfo = infos.at(2)

      expect(firstInfo.props().children[0].props.children).toBe('Custom value 3')
      expect(firstInfo.props().children[2]).toBe('Custom text 3')
    })
  })

  describe('with coloredInfosValues prop', () => {
    const projectCard = mount(
      <ProjectCard
        coloredInfosValues
        info1={ { value: 'Custom value 1', text: 'Custom text 1' } }
      />
    )
    const info = projectCard.find('.k-ProjectCard__info').first()
    const value = info.find('.k-ProjectCard__info__value')

    test('renders an info value with color modifier', () => {
      expect(value.hasClass('k-u-color-primary1')).to.equal(true)
    })
  })

  describe('with status props', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusWithoutTopBorder
      />
    )
    const status = projectCard.find('.k-ProjectCard__status')

    test('renders a status block', () => {
      expect(status).toHaveLength(1)
      expect(status).to.have.descendants('.k-ProjectCard__status__content')
      expect(status).to.contain.text('Custom status')
    })
  })

  describe('with statusPrimaryBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusPrimaryBackground
      />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    test('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--primaryBackground')
    })
  })

  describe('with statusValidBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusValidBackground
      />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    test('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--validBackground')
    })
  })

  describe('with statusGreyBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusGreyBackground
      />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    test('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--greyBackground')
    })
  })

  describe('with statusErrorBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusErrorBackground
      />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    test('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--errorBackground')
    })
  })

  describe('with statusErrorReverseBackground prop', () => {
    const projectCard = mount(
      <ProjectCard
        statusContent="Custom status"
        statusErrorReverseBackground
      />
    )
    const status = projectCard.find('.k-ProjectCard__status').first()

    test('has a good class', () => {
      expect(status)
        .to.have.className('k-ProjectCard__status--errorReverseBackground')
    })
  })

  describe('with tooltipText prop', () => {
    const projectCard = mount(
      <ProjectCard tooltipText="Custom text" />
    )

    test('has good classes', () => {
      expect(projectCard).to.have.descendants('.k-ProjectCard__tooltip')
      expect(projectCard)
        .to.have.descendants('.k-ProjectCard__tooltip__content')
    })

    test('has a good text', () => {
      const content =
        projectCard.find('.k-ProjectCard__tooltip__content').first()

      expect(content).to.have.text('Custom text')
    })
  })
})
