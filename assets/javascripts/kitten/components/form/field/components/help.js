import React from 'react'
import { Text } from '../../../typography/text'
import { pxToRem } from '../../../../helpers/utils/typography'
import classNames from 'classnames'
import { createGlobalStyle } from 'styled-components'

const FieldHelpGlobalStyles = createGlobalStyle`
  .k-Field__control + .k-Field__help--hiddenOnBlur,
  .k-Field__control + .k-Field__error + .k-Field__help--hiddenOnBlur {
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    transition: opacity var(--transition), max-height var(--transition), margin-top var(--transition);
  }
  .k-Field__control:focus-within + .k-Field__help--hiddenOnBlur,
  .k-Field__control:focus-within + .k-Field__error + .k-Field__help--hiddenOnBlur {
    opacity: 1;
    max-height: ${pxToRem(50)};
    margin-top: ${pxToRem(10)} !important;
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
        className={classNames('k-Field__help', className, 'k-u-margin-none', {
          'k-u-margin-top-single': !hiddenOnBlur,
          'k-Field__help--hiddenOnBlur': hiddenOnBlur,
        })}
        {...others}
      >
        {children}
      </Text>
    </>
  )
}
