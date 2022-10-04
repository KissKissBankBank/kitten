import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Status } from './status'

const StyledItem = styled.li`
  margin: ${pxToRem(10)} 0 ${pxToRem(10)} 0;
  display: flex;
  flex-direction: column;
  padding-right: ${pxToRem(10)};

  &:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  & li:not(:last-of-type) {
    margin: 0 !important;

    &::after {
      display: none;
    }
  }

  .k-VerticalProgress__step--content {
    padding-left: ${pxToRem(50)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding-left: ${pxToRem(82)};
    }
  }
`

export const Step = ({
  statusType,
  statusProps,
  progressTitle,
  children,
  ...other
}) => {
  return (
    <StyledItem className="k-VerticalProgress__item" {...other}>
      <Status
        statusType={statusType}
        progressTitle={progressTitle}
        {...statusProps}
      />
      <div className="k-VerticalProgress__step--content">{children}</div>
    </StyledItem>
  )
}
