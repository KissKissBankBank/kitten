import React from 'react'
import { expect } from 'chai'
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

      it('by passing one query', () => {
        expect(query).to.equal('(min-width: 800px)')
      })
    })

    describe('return joined queries strings', () => {
      const query = getJoinedQueries(['(min-width: 800px)', '(max-width: 1280px)'])

      it('by passing two queries', () => {
        expect(query).to.equal('(min-width: 800px) and (max-width: 1280px)')
      })
    })

    describe('return empty string', () => {
      const query = getJoinedQueries([])

      it('by passing empty array', () => {
        expect(query).to.equal('')
      })
    })

    describe('return the only good query', () => {
      const query = getJoinedQueries(['(min-width: 800px)', null])

      it('by passing one good query and a null', () => {
        expect(query).to.equal('(min-width: 800px)')
      })
    })
  })


  describe('createMatchMedia', () => {

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia('(max-width: 800px)')

      it('by passing a mediaQueryString', () => {
        expect(mq).to.not.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia()

      it('by ommiting mediaQueryString', () => {
        expect(mq).to.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMedia('')

      it('by passing empty mediaQueryString', () => {
        expect(mq).to.be.undefined
      })
    })
  })


  describe('createMatchMediaMin', () => {

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin(SCREEN_SIZE_S)

      it('by passing a valid config name', () => {
        expect(mq).to.not.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin('TOTO')

      it('by passing an invalid config name', () => {
        expect(mq).to.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMin()

      it('by ommiting a config name', () => {
        expect(mq).to.be.undefined
      })
    })
  })


  describe('createMatchMediaMax', () => {

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax(SCREEN_SIZE_M)

      it('by passing a valid config name', () => {
        expect(mq).to.not.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax('TOTO')

      it('by passing an invalid config name', () => {
        expect(mq).to.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaMax()

      it('by ommiting a config name', () => {
        expect(mq).to.be.undefined
      })
    })
  })


  describe('createMatchMediaWithin', () => {

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin(SCREEN_SIZE_S, SCREEN_SIZE_M)

      it('by passing a valid config name', () => {
        expect(mq).to.not.be.undefined
      })
    })

    describe('return an object', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin(SCREEN_SIZE_S, 'TOTO')

      it('by passing at least one good config name', () => {
        expect(mq).to.not.be.undefined
      })
    })

    describe('return undefined', () => {
      window.matchMedia = createMockMediaMatcher(true)
      const mq = createMatchMediaWithin()

      it('by ommiting a config name', () => {
        expect(mq).to.be.undefined
      })
    })
  })


})
