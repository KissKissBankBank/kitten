import React from 'react'
import classNames from 'classnames'
import { RewardCardCheckedIconLine } from './checked-icon-line'

export const RewardCardCheckedSection = ({ children, className, ...props }) => (
  <>
    <RewardCardCheckedIconLine />
    <div
      className={classNames('k-RewardCard__checkedSection', className)}
      {...props}
    >
      {children}
    </div>
  </>
)
