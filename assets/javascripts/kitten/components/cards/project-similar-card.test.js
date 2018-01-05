import React, { Component } from 'react'
import { shallow, mount } from 'enzyme'
import { SimilarProjectCard }
  from 'kitten/components/cards/project-similar-card'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import { TagList } from 'kitten/components/lists/tag-list'
import { LockIcon } from 'kitten/components/icons/lock-icon'
import { Loader } from 'kitten/components/loaders/loader'

describe('<SimilarProjectCard />', () => {
  describe('by default', () => {
    const similarProjectCard = mount(<SimilarProjectCard />)
    const arrowButtons = similarProjectCard.find('.k-ButtonIcon')
    const leftArrowButton = arrowButtons.first()
    const rightArrowButton = arrowButtons.last()

    test('is a <div />', () => {
      expect(similarProjectCard).to.have.tagName('div')
    })

    test('has a default class', () => {
      expect(similarProjectCard.hasClass('k-ProjectSimilarCard')).toBe(true)
    })

    test('adds the right class to the content tag', () => {
      const similarProjectCard = mount(
        <SimilarProjectCard linkHref="custom-link" />
      )

      const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

      expect(content).toHaveLength(1)
    })

    describe('left arrow', () => {
      test('is disabled', () => {
        expect(leftArrowButton).to.have.attr('disabled')
      })

      test('has a button type', () => {
        expect(leftArrowButton).to.have.attr('type', 'button')
      })
    })

    describe('right arrow', () => {
      test('is disabled', () => {
        expect(rightArrowButton).to.have.attr('disabled')
      })

      test('has a button type', () => {
        expect(rightArrowButton).to.have.attr('type', 'button')
      })
    })
  })

  describe('with imageSrc prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard imageSrc="test" />)
    const image = similarProjectCard.find('.k-ProjectSimilarCard__img')

    test('renders an image with good href', () => {
      expect(image).toHaveLength(1)
      expect(image).to.have.attr('src', 'test')
    })
  })

  describe('with title prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard title="Custom title" />)
    const title = similarProjectCard.find('.k-Title')

    test('renders a <Title />', () => {
      expect(similarProjectCard).to.have.descendants(Title)
      expect(title.text()).toBe("Custom title")
    })
  })

  describe('with paragraph prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard paragraph="Custom paragraph" />)
    const paragraph = similarProjectCard.find('.k-Paragraph')

    test('renders a <Paragraph />', () => {
      expect(similarProjectCard).to.have.descendants(Paragraph)
      expect(paragraph.text()).toBe("Custom paragraph")
    })
  })

  describe('with tags props', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        tagLists={ [
          {
            items: [
              { key: 'custom-tag', item: 'Custom tag' }
            ]
          }
        ] }
      />
    )

    const tags = similarProjectCard.find('.k-TagList')

    test('renders a <TagList />', () => {
      expect(similarProjectCard).to.have.descendants(TagList)
    })

    test('has a first block with good item', () => {
      const firstTag = tags.at(0)

      expect(firstTag).to.contain.text('Custom tag')
    })
  })

  describe('with infos props', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        infos={ [ { key: 'info-1',
                    text: 'Custom text 1',
                    value: 'Custom value 1' },
                  { key: 'info-2',
                    text: 'Custom text 2',
                    value: 'Custom value 2',
                    locked: true },
                  { key: 'info-3',
                    text: 'Custom text 3',
                    value: 'Custom value 3' } ] }
      />
    )
    const infos = similarProjectCard.find('.k-ProjectSimilarCard__info')

    test('renders 3 blocks', () => {
      expect(infos).toHaveLength(3)
    })

    test('has a first block with good values', () => {
      const firstInfo = infos.at(0)

      expect(firstInfo).to.contain.text('Custom value 1')
      expect(firstInfo).to.contain.text('Custom text 1')
    })

    test('has second block with locked value', () => {
      const secondInfo = infos.at(1)

      expect(secondInfo).to.have.descendants(LockIcon)
      expect(secondInfo).to.contain.text('Custom text 2')
    })
  })

  describe('with coloredInfosValues prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard
        coloredInfosValues
        infos={ [ { key: 'info-1',
                    text: 'Custom text 1',
                    value: 'Custom value 1' } ] }
      />
    )
    const info = similarProjectCard.find('.k-ProjectSimilarCard__info').first()
    const value = info.find('.k-ProjectSimilarCard__info__value')

    test('renders an info value with color modifier', () => {
      expect(value.hasClass('k-u-color-primary1')).toBe(true)
    })
  })

  describe('with loading prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard loading />)
    const loader = similarProjectCard.find('.k-ProjectSimilarCard__loading')

    test('render <Loader />', () => {
      expect(similarProjectCard).to.have.descendants(Loader)
      expect(loader).toHaveLength(1)
    })
  })

  describe('with loading prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard loading />)
    const loader = similarProjectCard.find('.k-ProjectSimilarCard__loading')

    test('render <Loader />', () => {
      expect(similarProjectCard).to.have.descendants(Loader)
      expect(loader).toHaveLength(1)
    })
  })

  describe('with refresh prop', () => {
    const similarProjectCard = mount(
      <SimilarProjectCard refresh="Custom refresh" />
    )
    const refreshLink = similarProjectCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    test('renders a refresh link with the right text', () => {
      expect(refreshLink).to.contain.text('Custom refresh')
    })
  })

  describe('with onRefreshClick prop', () => {
    const handleRefreshClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onRefreshClick={ handleRefreshClick } />
    )
    const refreshLink = similarProjectCard.find(
      '.k-ProjectSimilarCard__refresh__link'
    )

    test('attaches the right handler to refresh link onClick prop', () => {
      expect(refreshLink.props().onClick).toBe(handleRefreshClick)
    })
  })

  describe('with leftArrowDisabled prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard leftArrowDisabled />)
    const leftArrowButton = similarProjectCard.find('.k-ButtonIcon').first()

    test('disables the left arrow button', () => {
      expect(leftArrowButton).to.have.attr('disabled')
    })
  })

  describe('with rightArrowDisabled prop', () => {
    const similarProjectCard = mount(<SimilarProjectCard rightArrowDisabled />)
    const rightArrowButton = similarProjectCard.find('.k-ButtonIcon').last()

    test('disables the right arrow button', () => {
      expect(rightArrowButton).to.have.attr('disabled')
    })
  })

  describe('with onLeftArrowClick prop', () => {
    const handleOnLeftArrowClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onLeftArrowClick={ handleOnLeftArrowClick } />
    )
    const leftArrowButton = similarProjectCard.find('.k-ButtonIcon').first()

    test('attaches the right handler to left arrow button onClick prop', () => {
      expect(leftArrowButton.props().onClick).toBe(handleOnLeftArrowClick)
    })
  })

  describe('with onRightArrowClick prop', () => {
    const handleOnRightArrowClick = () => {}
    const similarProjectCard = mount(
      <SimilarProjectCard onRightArrowClick={ handleOnRightArrowClick } />
    )
    const rightArrowButton = similarProjectCard.find('.k-ButtonIcon').last()

    test('attaches the right handler to right arrow button onClick prop', () => {
      expect(rightArrowButton.props().onClick).toBe(handleOnRightArrowClick)
    })
  })

  describe('with link prop', () => {
    const linkProps = {
      href: 'custom-link',
    }

    describe('with loading prop', () => {
      describe('by default', () => {
        const similarProjectCard = mount(
          <SimilarProjectCard link={ linkProps } loading />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('renders a <div> tag for the content', () => {
          expect(content).to.have.tagName('div')
        })

        test('passes the right props to the <div> tag', () => {
          expect(content.props()).not.to.any.keys('href', 'target')
        })
      })

      describe('with link custom target', () => {
        const withTargetLinkProps = {
          href: 'custom-link',
          target: '_self',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withTargetLinkProps } loading />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <div> tag', () => {
          expect(content.props()).not.to.any.keys('href', 'target')
        })
      })

      describe('with link className', () => {
        const withClassNameLinkProps = {
          href: 'custom-link',
          className: 'custom-classname',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withClassNameLinkProps } loading />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <div> tag', () => {
          expect(content.props()).not.to.any.keys('href', 'target')
        })

        test('does not pass custom className to tag content', () => {
          expect(content).not.to.have.className('custom-classname')
        })
      })

      describe('with link custom prop', () => {
        const withTitleLinkProps = {
          href: 'custom-link',
          title: 'custom-title',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withTitleLinkProps } loading />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <div> tag', () => {
          expect(content.props()).not.to.any.keys('href', 'title')
        })
      })
    })

    describe('without loading prop', () => {
      describe('by default', () => {
        const similarProjectCard = mount(
          <SimilarProjectCard link={ linkProps } />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('renders a <a> tag for the content', () => {
          expect(content).to.have.tagName('a')
        })

        test('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            target: '_blank',
          }

          expect(content.props()).to.contains(expectedProps)
        })
      })

      describe('with link custom target', () => {
        const withTargetLinkProps = {
          href: 'custom-link',
          target: '_self',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withTargetLinkProps } />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            target: '_self',
          }

          expect(content.props()).to.contains(expectedProps)
        })
      })

      describe('with link className', () => {
        const withClassNameLinkProps = {
          href: 'custom-link',
          className: 'custom-classname',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withClassNameLinkProps } />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            className: 'k-ProjectSimilarCard__content custom-classname',
          }

          expect(content.props()).to.contains(expectedProps)
        })
      })

      describe('with link custom prop', () => {
        const withTitleLinkProps = {
          href: 'custom-link',
          title: 'custom-title',
        }
        const similarProjectCard = mount(
          <SimilarProjectCard link={ withTitleLinkProps } />
        )
        const content = similarProjectCard.find('.k-ProjectSimilarCard__content')

        test('passes the right props to the <a> tag', () => {
          const expectedProps = {
            href: 'custom-link',
            title: 'custom-title',
          }

          expect(content.props()).to.contains(expectedProps)
        })
      })
    })
  })
})
