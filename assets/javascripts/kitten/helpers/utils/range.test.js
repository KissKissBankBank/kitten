import React from 'react'
import { createRangeFromZeroTo } from 'kitten/helpers/utils/range'

describe('utils range', () => {
  describe('createRangeFromZeroTo range 2', () => {
    const range = createRangeFromZeroTo(2)

    test('return the array 0 to 1', () => {
      expect(range).toEqual([0, 1])
    })
  })

  describe('createRangeFromZeroTo range 7', () => {
    const range = createRangeFromZeroTo(7)

    test('return the array 0 to 6', () => {
      expect(range).toEqual([0, 1, 2, 3, 4, 5, 6])
    })
  })

  describe('createRangeFromZeroTo range 1', () => {
    const range = createRangeFromZeroTo(1)

    test('return the array 0', () => {
      expect(range).toEqual([0])
    })
  })

  describe('createRangeFromZeroTo range 0', () => {
    const range = createRangeFromZeroTo(0)

    test('return the array empty', () => {
      expect(range).toEqual([])
    })
  })

  describe('createRangeFromZeroTo range undefined', () => {
    const range = createRangeFromZeroTo()

    test('return the array empty', () => {
      expect(range).toEqual([])
    })
  })

  describe('createRangeFromZeroTo range string', () => {
    const range = createRangeFromZeroTo('toto')

    test('return the array empty', () => {
      expect(range).toEqual([])
    })
  })
})
