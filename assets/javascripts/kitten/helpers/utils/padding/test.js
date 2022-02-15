import padding from './index'

describe('padding()', () => {
  it('returns nothing when options are empty', () => {
    const options = {}

    expect(padding(options)).toBe('')
  })

  it('returns default value', () => {
    const options = {
      top: {
        default: 5,
      },
    }

    expect(padding(options)).toBe('k-u-padding-top-quintuple')
  })

  it('returns default when fromXxs is used', () => {
    const options = {
      top: {
        fromXxs: 5,
      },
    }

    expect(padding(options)).toBe('k-u-padding-top-quintuple')
  })

  it('returns Half values', () => {
    const options = {
      top: {
        default: 8.5,
      },
    }

    expect(padding(options)).toBe('k-u-padding-top-octupleHalf')
  })

  it('returns classes with media limits', () => {
    const options = {
      top: {
        fromL: 8.5,
      },
    }

    expect(padding(options)).toBe('k-u-padding-top-octupleHalf@l-up')
  })

  it('returns class from string option', () => {
    const options = {
      horizontal: {
        fromM: 'quadrupleHalf',
      },
    }

    expect(padding(options)).toBe('k-u-padding-horizontal-quadrupleHalf@m-up')
  })

  it('returns multiple classes', () => {
    const options = {
      top: {
        fromXxs: 5,
        fromL: 8.5,
      },
    }

    expect(padding(options)).toBe(
      'k-u-padding-top-quintuple k-u-padding-top-octupleHalf@l-up',
    )
  })

  it('returns a lot of classes', () => {
    const options = {
      top: {
        fromXxs: 5,
        fromL: 8.5,
      },
      bottom: {
        default: 0,
        fromXl: 'decuple',
      },
      vertical: {
        fromS: 9,
      },
      horizontal: {
        fromXs: 'auto',
      },
    }

    expect(padding(options)).toBe(
      'k-u-padding-top-quintuple k-u-padding-top-octupleHalf@l-up k-u-padding-bottom-none k-u-padding-bottom-decuple@xl-up k-u-padding-vertical-nonuple@s-up k-u-padding-horizontal-auto@xs-up',
    )
  })

  it('returns an array of classes', () => {
    const options = {
      top: {
        fromXxs: 5,
        fromL: 8.5,
      },
      bottom: {
        default: 0,
        fromXl: 'decuple',
      },
      vertical: {
        fromS: 9,
      },
      horizontal: {
        fromXs: 'auto',
      },
    }

    expect(padding(options, true)).toStrictEqual([
      'k-u-padding-top-quintuple',
      'k-u-padding-top-octupleHalf@l-up',
      'k-u-padding-bottom-none',
      'k-u-padding-bottom-decuple@xl-up',
      'k-u-padding-vertical-nonuple@s-up',
      'k-u-padding-horizontal-auto@xs-up',
    ])
  })
})
