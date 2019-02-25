import React, { Fragment } from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import PropTypes from 'prop-types'
import { Title } from '../../../typography/title'
import { HorizontalStroke } from '../../../layout/horizontal-stroke'
import { Marger } from '../../../layout/marger'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { withMediaQueries } from '../../../../hoc/media-queries'

const MarkdownHeadingBase = ({ viewportIsXSOrLess, ...props }) => {
  let modifier
  let tag

  switch (props.level) {
    case 1:
      modifier = 'secondary'
      tag = 'h1'
      break
    case 2:
      modifier = 'quaternary'
      tag = 'h2'
      break
    case 3:
      modifier = 'quinary'
      tag = 'h3'
      break
    default:
      modifier = 'senary'
      tag = 'h4'
      break
  }

  const renderHorizontalStroke = () => {
    if (props.level > 1) return

    return (
      <Marger top="2" bottom="4">
        <HorizontalStroke size="big" />
      </Marger>
    )
  }

  const id = slugify(props.children[0], {
    lower: true,
    remove: /'/g,
  })

  return (
    <Fragment>
      <Marger top={viewportIsXSOrLess ? 8 : 10} bottom={2}>
        <Title modifier={modifier} tag={tag} id={id}>
          {props.children}
        </Title>
      </Marger>
      {renderHorizontalStroke()}
    </Fragment>
  )
}

MarkdownHeadingBase.defaultProps = {
  level: null,
  viewportIsXSOrLess: '',
}

MarkdownHeadingBase.propTypes = {
  level: PropTypes.number,
  viewportIsXSOrLess: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export const MarkdownHeading = withMediaQueries({
  viewportIsMobile: true,
})(MarkdownHeadingBase)
