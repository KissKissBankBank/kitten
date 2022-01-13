import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import range from 'lodash/fp/range'
import debounce from 'lodash/fp/debounce'
import colorConvert from 'color-convert'
import { HsvColorPicker } from 'react-colorful'
import { ratio } from 'wcag-color'

const SVG_COLS_COUNT = 10

const StyledColorSelect = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 164px;
    pointer-events: none;

    path {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`

const hexToHsv = color => {
  const hsvArray = colorConvert.hex.hsv(color)
  return {
    h: Math.round(hsvArray[0]),
    s: hsvArray[1],
    v: hsvArray[2],
  }
}
const hsvToHex = color => colorConvert.hsv.hex([color.h, color.s, color.v])

export const ColorSelect = ({
  onChange,
  value,
  contrastColor,
  contrastRatio,
  ...props
}) => {
  // Input is hex, output is Hex, internal color is HSV
  const [color, setColor] = useState(hexToHsv(value))
  useEffect(() => {
    onChange(hsvToHex(color))
  }, [color])
  useEffect(() => {
    handleChange(hexToHsv(value))
  }, [value])

  const handleChange = color => {
    const isContrastValid =
      ratio(hsvToHex(color), contrastColor) > contrastRatio

    if (!isContrastValid) {
      const newColor = getClosestContrast({
        color,
        contrastColor,
        contrastRatio,
      })

      setColor(newColor)
    } else {
      setColor(color)
    }
  }

  const getClosestContrast = ({ color }) => {
    const { h, s, v } = color

    let vRange = range(0)(Math.round(v))

    const newV = findClosestValidColor({ h, s, vRange })

    return { h, s, v: newV }
  }

  const getCoordinatesList = color => {
    const { h } = color
    const coords = []

    for (let i = 0; i <= SVG_COLS_COUNT; i++) {
      let vRange = range(0)(100)

      const s = i * (100 / SVG_COLS_COUNT)

      const v = findClosestValidColor({ h, s, vRange })

      coords.push(`L ${i} ${100 - v}`)
    }

    return coords.join(' ')
  }

  const findClosestValidColor = ({ h, s, vRange }) => {
    let whileCount = 0

    // Binary search
    while (vRange.length > 1 && whileCount < 100) {
      whileCount += 1

      const midPoint = Math.floor(vRange.length / 2)
      const midPointColor = hsvToHex({ h, s, v: vRange[midPoint] })
      const isMidPointColorValid =
        ratio(midPointColor, contrastColor) > contrastRatio

      if (!isMidPointColorValid) {
        vRange.splice(midPoint, vRange.length)
      }

      if (isMidPointColorValid) {
        vRange.splice(0, midPoint)
      }
    }

    return vRange[0] + 1
  }

  return (
    <StyledColorSelect>
      <HsvColorPicker color={color} onChange={debounce(100)(handleChange)} />
      <svg
        viewBox={`0 0 ${SVG_COLS_COUNT} 100`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d={`
                  M0 0
                  ${getCoordinatesList(color)}
                  L${SVG_COLS_COUNT} 0
                  z
                `}
        />
      </svg>
    </StyledColorSelect>
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
