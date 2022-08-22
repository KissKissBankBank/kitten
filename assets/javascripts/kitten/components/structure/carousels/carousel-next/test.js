import React from 'react'
import renderer from 'react-test-renderer'
import {
  CarouselNext,
  getItemsPerPageCountForWidth,
  getNumberOfPagesForColumnsAndDataLength,
  checkPage,
  checkPageLoop,
} from './index'
import { ProjectCard } from '../../cards/project-card'

const projectCardMinWidth = 280
const gap = 40

describe('<CarouselNext />', () => {
  const data = [
    {
      status: 'normal',
      imageProps: {
        src: 'kitten.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office, la série culte décortiquée par S!CK
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
    {
      status: 'success',
      imageProps: {
        src: 'kitten-1.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title className="custom className">
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
    {
      status: 'normal',
      imageProps: {
        src: 'kitten.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office, la série culte décortiquée par S!CK
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
    {
      status: 'success',
      imageProps: {
        src: 'kitten-1.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title className="custom className">
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
    {
      status: 'normal',
      imageProps: {
        src: 'kitten.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title>
            The Office, la série culte décortiquée par S!CK
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
    {
      status: 'success',
      imageProps: {
        src: 'kitten-1.jpg',
        alt: 'image alt',
      },
      children: (
        <>
          <ProjectCard.Sticker className="k-u-hidden@xs-down">
            Prolongation
          </ProjectCard.Sticker>
          <ProjectCard.Title className="custom className">
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </ProjectCard.Title>
          <ProjectCard.Line>
            <span>
              par <strong>Bidules</strong>
            </span>
          </ProjectCard.Line>
          <ProjectCard.Item>
            <span>134</span>
            <span>contributeurs</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>7 jours</span>
            <span>restants</span>
          </ProjectCard.Item>
          <ProjectCard.Item>
            <span>9 930 €</span>
            <span>sur 12 000 €</span>
          </ProjectCard.Item>
          <ProjectCard.Progress
            aria-label="Progrès de la campagne"
            value={55}
          />
        </>
      ),
    },
  ]

  describe('by default on desktop', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          smallButtons={false}
          shadowSize={20}
          viewportIsXSOrLess={false}
          viewportIsMOrLess={false}
        >
          {data.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </CarouselNext>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with navigation on desktop', () => {
    const carousel = renderer
      .create(
        <>
          <CarouselNext.Navigation />
          <CarouselNext
            itemMinWidth={projectCardMinWidth}
            baseGap={gap}
            smallButtons={false}
            shadowSize={20}
            viewportIsXSOrLess={false}
            viewportIsMOrLess={false}
          >
            {data.map((item, index) => (
              <ProjectCard {...item} key={index} />
            ))}
          </CarouselNext>
        </>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with loop prop on desktop', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          loop={true}
          viewportIsXSOrLess={false}
          viewportIsMOrLess={false}
        >
          {data.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </CarouselNext>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with exportVisibilityProps prop', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          exportVisibilityProps
          viewportIsXSOrLess={false}
          viewportIsMOrLess={false}
        >
          {data.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </CarouselNext>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('with itemsPerPage prop', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          itemsPerPage={5}
          viewportIsXSOrLess={false}
          viewportIsMOrLess={false}
        >
          {data.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </CarouselNext>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('by default on mobile', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          pagesClassName="custom-class"
          viewportIsXSOrLess={true}
          viewportIsMOrLess={true}
        >
          {data.map((item, index) => (
            <ProjectCard {...item} key={index} />
          ))}
        </CarouselNext>,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('empty carousel', () => {
    const carousel = renderer
      .create(
        <CarouselNext
          itemMinWidth={projectCardMinWidth}
          baseGap={gap}
          viewportIsXSOrLess={true}
          viewportIsMOrLess={true}
        />,
      )
      .toJSON()

    it('matches with snapshot', () => {
      expect(carousel).toMatchSnapshot()
    })
  })

  describe('getItemsPerPageCountForWidth', () => {
    it('5 columns', () => {
      expect(getItemsPerPageCountForWidth(1000, 150, 50)).toBe(5)
    })

    it('1 column', () => {
      expect(getItemsPerPageCountForWidth(300, 150, 20)).toBe(1)
    })

    it('0 column if no width', () => {
      expect(getItemsPerPageCountForWidth(0, 100, 10)).toBe(0)
    })

    it('0 column if no itemWidth', () => {
      expect(getItemsPerPageCountForWidth(800, 0, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getItemsPerPageCountForWidth('0', '0', '0')).toBeNaN()
    })

    it('2 columns if no itemWidth but 2 itemsPerPage', () => {
      expect(getItemsPerPageCountForWidth(800, 0, 0, 2)).toBe(2)
    })
  })

  describe('getNumberOfPagesForColumnsAndDataLength', () => {
    it('3 pages', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(7, 3)).toBe(3)
    })

    it('1 page', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(2, 2)).toBe(1)
    })

    it('0 page if no dataLength', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(0, 3)).toBe(0)
    })

    it('0 page if no numberOfItemsPerPage', () => {
      expect(getNumberOfPagesForColumnsAndDataLength(5, 0)).toBe(0)
    })

    it('NaN if not number', () => {
      expect(getNumberOfPagesForColumnsAndDataLength('0', '0')).toBeNaN()
    })
  })

  describe('checkPage', () => {
    it('to page number 2', () => {
      expect(checkPage(4, 2)).toBe(2)
    })

    it('to page number 3', () => {
      expect(checkPage(4, 3)).toBe(3)
    })

    it('stay page number 3', () => {
      expect(checkPage(4, 4)).toBe(3)
    })

    it('to page number 1', () => {
      expect(checkPage(4, 1)).toBe(1)
    })

    it('to page number 0', () => {
      expect(checkPage(4, 0)).toBe(0)
    })

    it('stay page number 0 if newPage negative', () => {
      expect(checkPage(4, -1)).toBe(0)
    })

    it('stay page number 0 if no numPages', () => {
      expect(checkPage(0, 3)).toBe(0)
    })

    it('stay page 0 if not number', () => {
      expect(checkPage('0', '0')).toBe(0)
    })
  })

  describe('checkPageLoop', () => {
    it('to page number 2', () => {
      expect(checkPageLoop(4, 2)).toBe(2)
    })

    it('to page number 3', () => {
      expect(checkPageLoop(4, 3)).toBe(3)
    })

    it('go to first page', () => {
      expect(checkPageLoop(4, 4)).toBe(0)
    })

    it('to page number 1', () => {
      expect(checkPageLoop(4, 1)).toBe(1)
    })

    it('to page number 0', () => {
      expect(checkPageLoop(4, 0)).toBe(0)
    })

    it('go to last if newPage negative', () => {
      expect(checkPageLoop(4, -1)).toBe(3)
    })

    it('stay page number 0 if no numPages', () => {
      expect(checkPageLoop(0, 3)).toBe(0)
    })

    it('stay page 0 if not number', () => {
      expect(checkPageLoop('0', '0')).toBe(0)
    })
  })
})
