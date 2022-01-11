import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { HexColorPicker } from 'react-colorful'
import { ratio } from 'wcag-color'
import range from 'lodash/fp/range'
import debounce from 'lodash/fp/debounce'

import { hexToHSL, HSLToHex } from './helpers/color-transforms'

const getClosestContrast = ({color, contrastColor, contrastRatio}) => {
  const { h, s, l } = hexToHSL(color)

  let lRange = range(0)(Math.round(l))
  let whileCount = 0

  while (lRange.length > 1 && whileCount < 100) {
    whileCount += 1

    const midPoint = Math.floor(lRange.length / 2)
    const midPointColor = HSLToHex({h, s, l: lRange[midPoint]})
    const isMidPointColorValid = ratio(midPointColor, contrastColor) > contrastRatio
    if (isMidPointColorValid) {
      lRange.splice(0, midPoint)
    } else {
      lRange.reverse()
      lRange.splice(0, midPoint)
      lRange.reverse()
    }
  }

  return HSLToHex({h, s, l: lRange[0]})
}

export const ColorSelect = ({
  onChange,
  value,
  contrastColor,
  contrastRatio,
  ...props
}) => {
  const [color, setColor] = useState(value);

  const handleChange = color => {
    const isContrastValid = ratio(color, contrastColor) > contrastRatio

    if (!isContrastValid) {
      const newColor = getClosestContrast({
        color, contrastColor, contrastRatio
      })

      setColor(newColor)
    } else {
      setColor(color)
    }
  }

  useEffect(() => {
    onChange(color)
  }, [color])

  useEffect(() => {
    handleChange(value)
  }, [value])

  return (
    <HexColorPicker color={color} onChange={debounce(100)(handleChange)} />
  )
}

ColorSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  contrastColor: PropTypes.string,
  contrastRatio: PropTypes.number,
}

ColorSelect.defaultProps = {
  onChange: () => {},
  value: '#006cff',
  contrastColor: '#fff',
  contrastRatio: 4.5,
}
