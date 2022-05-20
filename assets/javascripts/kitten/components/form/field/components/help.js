import React from 'react'
import { Text } from '../../../typography/text'
import classNames from 'classnames'
import { createGlobalStyle } from 'styled-components'

const FieldHelpGlobalStyles = createGlobalStyle`
  .k-Field__control + .k-Field__help--hiddenOnBlur,
  .k-Field__control + .k-Field__error + .k-Field__help--hiddenOnBlur {
    opacity: 0;
    transition: opacity var(--transition);
  }
  .k-Field__control:focus-within + .k-Field__help--hiddenOnBlur,
  .k-Field__control:focus-within + .k-Field__error + .k-Field__help--hiddenOnBlur {
    opacity: 1;
  }
`

export const FieldHelp = ({
  children,
  className,
  hiddenOnBlur = false,
  ...others
}) => {
  return (
    <>
      <FieldHelpGlobalStyles />
      <Text
        tag="p"
        cssColor="var(--color-grey-700)"
        size="micro"
        weight="light"
        lineHeight="normal"
        className={classNames(
          'k-Field__help',
          className,
          'k-u-margin-none',
          'k-u-margin-top-single',
          { 'k-Field__help--hiddenOnBlur': hiddenOnBlur },
        )}
        {...others}
      >
        {children}
      </Text>
    </>
  )
}
