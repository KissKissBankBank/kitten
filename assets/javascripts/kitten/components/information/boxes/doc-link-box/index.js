import React from 'react'
import { LinkBox } from './../link-box'
import { LinkBoxIllustration } from '../../../graphics/illustrations/link-box-illustration'
import { Text } from '../../../typography/text'

export const DocLinkBox = ({ isExternal, href, title, text, ...props }) => {
  return (
    <LinkBox href={href} isExternal={isExternal} {...props}>
      <LinkBox.Icon>
        <LinkBoxIllustration className="k-LinkBox__icon--svg" />
      </LinkBox.Icon>
      <LinkBox.Text>
        <Text tag="span" weight="regular" size="small" lineHeight="normal">
          {title}
        </Text>
        <Text tag="span" weight="light" size="micro" lineHeight="normal">
          {text}
        </Text>
      </LinkBox.Text>
    </LinkBox>
  )
}
