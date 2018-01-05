import React from 'react'
import {
  getJoinedQueries,
  createMatchMedia,
  createMatchMediaMin,
  createMatchMediaMax,
  createMatchMediaWithin,
} from 'kitten/helpers/utils/media-queries'

import { SCREEN_SIZE_S, SCREEN_SIZE_M } from 'kitten/constants/screen-config'

const createMockMediaMatcher = matches => () => ({
  matches,
  addListener: () => {},
  removeListener: () => {}
})

describe('utils MediaQueries', () => {
  let originalMatchMedia

  beforeEach(() => {
    originalMatchMedia = window.matchMedia
  })

  afterEach(() => {
    window.matchMedia = originalMatchMedia
  })


  describe('getJoinedQueries', () => {
    describe('return the only query string', () => {
      const query = getJoinedQueries(['(min-width: 800px)'])

      test('by passing one query', () => {
        expect(query).toBe('(min-width: 800px)')
      })
    })

    describe('return joined queries strings', () => {
      const query = getJoinedQueries(
        ['(min-width: 800px)', '(max-width: 1280px)']
      )

      test('by passing two queries', () => {
        expect(query).toBe('(min-width: 800px) and (max-width: 1280px)')
      })
    })

    describe('return empty string', () => {
      const query = getJoinedQueries([])

      test('by passing empty array', () => {
        expect(query).toBe('')
      })
    })

    describe('return the only good query', () => {
      const query = getJoinedQueries(['(min-width: 800px)', null])

      test('by passing one good query and a null', () => {
        expect(query).toBe('(min-width: 800px)')
      })
    })
  })


  describe('createMatchMedia', () => {
    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia('(max-width: 800px)')

      test('by passing a mediaQueryString', () => {
        expect(mq).toBeDefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia()

      test('by ommiting mediaQueryString', () => {
        expect(mq).toBeUndefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia('')

      test('by passing empty mediaQueryString', () => {
        expect(mq).toBeUndefined()
      })
    })
  })


  describe('createMatchMediaMin', () => {
    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin(SCREEN_SIZE_S)

      test('by passing a valid config name', () => {
        expect(mq).toBeDefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin('TOTO')

      test('by passing an invalid config name', () => {
        expect(mq).toBeUndefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin()

      test('by ommiting a config name', () => {
        expect(mq).toBeUndefined()
      })
    })
  })


  describe('createMatchMediaMax', () => {
    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax(SCREEN_SIZE_M)

      test('by passing a valid config name', () => {
        expect(mq).toBeDefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax('TOTO')

      test('by passing an invalid config name', () => {
        expect(mq).toBeUndefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax()

      test('by ommiting a config name', () => {
        expect(mq).toBeUndefined()
      })
    })
  })


  describe('createMatchMediaWithin', () => {
    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin(SCREEN_SIZE_S, SCREEN_SIZE_M)

      test('by passing a valid config name', () => {
        expect(mq).toBeDefined()
      })
    })

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin(SCREEN_SIZE_S, 'TOTO')

      test('by passing at least one good config name', () => {
        expect(mq).toBeDefined()
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin()

      test('by ommiting a config name', () => {
        expect(mq).toBeUndefined()
      })
    })
  })
})
