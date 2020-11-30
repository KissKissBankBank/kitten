import margin from './index'

describe('margin()', () => {
  it('returns nothing when options are empty', () => {
    const options = {}

    expect(margin(options)).toBe('')
  })

  it('returns default value', () => {
    const options = {
      top: {
        default: 5,
      },
    }

    expect(margin(options)).toBe('k-u-margin-top-quintuple')
  })

  it('returns default when fromXxs is used', () => {
    const options = {
      top: {
        fromXxs: 5,
      },
    }

    expect(margin(options)).toBe('k-u-margin-top-quintuple')
  })

  it('returns Half values', () => {
    const options = {
      top: {
        default: 8.5,
      },
    }

    expect(margin(options)).toBe('k-u-margin-top-octupleHalf')
  })

  it('returns classes with media limits', () => {
    const options = {
      top: {
        fromL: 8.5,
      },
    }

    expect(margin(options)).toBe('k-u-margin-top-octupleHalf@l-up')
  })

  it('returns class from string option', () => {
    const options = {
      horizontal: {
        fromM: 'quadrupleHalf',
      },
    }

    expect(margin(options)).toBe('k-u-margin-horizontal-quadrupleHalf@m-up')
  })

  it('returns multiple classes', () => {
    const options = {
      top: {
        fromXxs: 5,
        fromL: 8.5,
      },
    }

    expect(margin(options)).toBe(
      'k-u-margin-top-quintuple k-u-margin-top-octupleHalf@l-up',
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

    expect(margin(options)).toBe(
      'k-u-margin-top-quintuple k-u-margin-top-octupleHalf@l-up k-u-margin-bottom-none k-u-margin-bottom-decuple@xl-up k-u-margin-vertical-nonuple@s-up k-u-margin-horizontal-auto@xs-up',
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

    expect(margin(options, true)).toStrictEqual([
      'k-u-margin-top-quintuple',
      'k-u-margin-top-octupleHalf@l-up',
      'k-u-margin-bottom-none',
      'k-u-margin-bottom-decuple@xl-up',
      'k-u-margin-vertical-nonuple@s-up',
      'k-u-margin-horizontal-auto@xs-up',
    ])
  })
})
