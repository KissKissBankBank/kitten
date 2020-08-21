import React from 'react'
import LinkBox from './../link-box'
import { LinkBoxIllustration } from './../../../components/illustrations/link-box-illustration'
import { Text } from './../../../components/typography/text'

export const DocLinkBox = ({ isExternal, href, title, text, ...props }) => {
  return (
    <LinkBox href={href} isExternal={isExternal} {...props}>
      <LinkBox.Icon>
        <LinkBoxIllustration className="k-LinkBox__icon--svg" />
      </LinkBox.Icon>
      <LinkBox.Text>
        <Text tag="span" weight="regular" size="tiny" lineHeight="normal">
          {title}
        </Text>
        <Text tag="span" weight="light" size="micro" lineHeight="normal">
          {text}
        </Text>
      </LinkBox.Text>
    </LinkBox>
  )
}

// DEPRECATED: do not use default export.
export default DocLinkBox
