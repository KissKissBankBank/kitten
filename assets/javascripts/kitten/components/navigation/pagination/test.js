import React from 'react'
import sinon from 'sinon'
import { StyleRoot } from 'radium'
import { pages, Pagination } from './index'
import renderer from 'react-test-renderer'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {},
})

describe('<Pagination />', () => {
  const originalMatchMedia = window.matchMedia

  beforeEach(() => {
    window.matchMedia = createMockMediaMatcher(false)
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })

  describe('by default', () => {
    it('should match its empty snapshot', () => {
      const tree = renderer
        .create(
          <StyleRoot>
            <Pagination currentPage={10} totalPages={42} />
          </StyleRoot>,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('onPageClick', () => {
    it('calls the given function when clicking on links', () => {
      const sandbox = sinon.createSandbox()
      const onClickSpy = sandbox.spy()
      const pagination = mount(
        <StyleRoot>
          <Pagination onPageClick={onClickSpy} totalPages={5} />
        </StyleRoot>,
      )
      const event = {
        foo: 'bar',
      }

      pagination
        .find('a')
        .last()
        .simulate('click', event)

      expect(onClickSpy.called).toBe(true)
      expect(onClickSpy.calledWithMatch(2, event)).toBe(true)
    })
  })
})

describe('pages', () => {
  describe('matches our list of expected results', () => {
    const expectedPages = [
      // min
      // | max
      // | |  currentPage
      // | |  |  available slots
      // | |  |  |   expected result
      [[1, 2, 1, 7], [1, 2]],
      [[1, 2, 2, 7], [1, 2]],
      [[1, 7, 1, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 2, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 3, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 4, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 5, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 6, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 7, 7, 7], [1, 2, 3, 4, 5, 6, 7]],
      [[1, 42, 1, 7], [1, 2, 3, 4, 5, null, 42]],
      [[1, 42, 2, 7], [1, 2, 3, 4, 5, null, 42]],
      [[1, 42, 4, 7], [1, 2, 3, 4, 5, null, 42]],
      [[1, 42, 5, 7], [1, null, 4, 5, 6, null, 42]],
      [[1, 42, 6, 7], [1, null, 5, 6, 7, null, 42]],
      [[1, 42, 36, 7], [1, null, 35, 36, 37, null, 42]],
      [[1, 42, 37, 7], [1, null, 36, 37, 38, null, 42]],
      // TODO: prefer 1, …, 37, 38, 38, …, 42
      [[1, 42, 38, 7], [1, null, 38, 39, 40, 41, 42]],
      [[1, 42, 39, 7], [1, null, 38, 39, 40, 41, 42]],
      [[1, 42, 40, 7], [1, null, 38, 39, 40, 41, 42]],
      [[1, 42, 41, 7], [1, null, 38, 39, 40, 41, 42]],
      [[1, 42, 42, 7], [1, null, 38, 39, 40, 41, 42]],
      [[1, 2, 1, 5], [1, 2]],
      [[1, 2, 2, 5], [1, 2]],
      [[1, 5, 1, 5], [1, 2, 3, 4, 5]],
      [[1, 5, 2, 5], [1, 2, 3, 4, 5]],
      [[1, 5, 3, 5], [1, 2, 3, 4, 5]],
      [[1, 5, 4, 5], [1, 2, 3, 4, 5]],
      [[1, 5, 5, 5], [1, 2, 3, 4, 5]],
      [[1, 6, 1, 5], [1, 2, 3, null, 6]],
      [[1, 6, 2, 5], [1, 2, 3, null, 6]],
      // TODO: prefer 1, 2, 3, null, 42
      [[1, 6, 3, 5], [1, null, 3, null, 6]],
      [[1, 6, 4, 5], [1, null, 4, 5, 6]],
      [[1, 6, 5, 5], [1, null, 4, 5, 6]],
      [[1, 6, 6, 5], [1, null, 4, 5, 6]],
      [[1, 42, 1, 5], [1, 2, 3, null, 42]],
      [[1, 42, 2, 5], [1, 2, 3, null, 42]],
      [[1, 42, 4, 5], [1, null, 4, null, 42]],
      [[1, 42, 5, 5], [1, null, 5, null, 42]],
      [[1, 42, 6, 5], [1, null, 6, null, 42]],
      [[1, 42, 36, 5], [1, null, 36, null, 42]],
      [[1, 42, 37, 5], [1, null, 37, null, 42]],
      [[1, 42, 38, 5], [1, null, 38, null, 42]],
      [[1, 42, 39, 5], [1, null, 39, null, 42]],
      [[1, 42, 40, 5], [1, null, 40, 41, 42]],
      [[1, 42, 41, 5], [1, null, 40, 41, 42]],
      [[1, 42, 42, 5], [1, null, 40, 41, 42]],
    ]

    expectedPages.forEach(line => {
      const [args, expectedResult] = line
      it(`expects ${args} to match ${expectedResult}`, () => {
        expect(pages(...args)).toEqual(expectedResult)
      })
    })
  })
})
