import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { Text } from '../../../../components/typography/text'
import { ClockCircleIcon } from '../../../../components/visuals/icons/clock-circle-icon'
import { CheckedCircleIcon } from '../../../../components/visuals/icons/checked-circle-icon'
import { CrossCircleIcon } from '../../../../components/visuals/icons/cross-circle-icon'

const StyledDocumentsStatusBox = styled.div`
  border-radius: var(--border-radius-m);
  padding: ${pxToRem(20)} ${pxToRem(30)};
  width: 100%;
  position: relative;
  box-sizing: border-box;
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${pxToRem(30)};

  .k-DocumentsStatusBox__fileList {
    margin: 0;
    padding: 0;
    list-style: none;
    display: block;
    line-height: 1.4;
  }

  &.k-DocumentsStatusBox--wait {
    background-color: ${COLORS.line1};
  }

  &.k-DocumentsStatusBox--accepted {
    background-color: ${COLORS.valid1};
  }

  &.k-DocumentsStatusBox--denied {
    background-color: ${COLORS.error2};
  }
`

export const DocumentsStatusBox = ({
  className,
  fileList = [],
  title = '',
  status = 'wait',
  message,
  retryActionMessage = '',
  retryAction = () => {},
}) => {
  return (
    <StyledDocumentsStatusBox
      className={classNames(
        'k-DocumentsStatusBox',
        className,
        `k-DocumentsStatusBox--${status}`,
      )}
    >
      <div className="k-DrocumentDropUploader__icon">
        {status === 'wait' && (
          <ClockCircleIcon
            color={COLORS.background1}
            bgColor={COLORS.font1}
            width={22}
            height={22}
          />
        )}
        {status === 'accepted' && (
          <CheckedCircleIcon
            color={COLORS.background1}
            bgColor={COLORS.valid}
            width={22}
            height={22}
          />
        )}
        {status === 'denied' && (
          <CrossCircleIcon
            color={COLORS.background1}
            bgColor={COLORS.error}
            width={22}
            height={22}
          />
        )}
      </div>

      <div className="k-DocumentsStatusBox__content">
        <Text
          as="p"
          className="k-DocumentsStatusBox__title k-u-margin-top-none k-u-margin-bottom-noneHalf"
          weight="regular"
          size="tiny"
          lineHeight="1"
        >
          {title}
        </Text>

        {fileList.length > 0 && (
          <ul className="k-DocumentsStatusBox__fileList">
            {fileList.map((file, index) => (
              <Text
                key={file + index}
                as="li"
                className="k-DocumentsStatusBox__fileName"
                size="micro"
                weight="light"
              >
                {file}
              </Text>
            ))}
          </ul>
        )}

        {!!message && (
          <Text
            as="p"
            weight="regular"
            size="micro"
            className="k-DocumentsStatusBox__message k-u-margin-bottom-none k-u-margin-top-noneHalf"
            lineHeight="1"
          >
            {message}
          </Text>
        )}

        {status === 'denied' && (
          <Text
            as="button"
            className="k-DocumentsStatusBox__button k-u-reset-button k-u-align-left k-u-margin-top-single"
            weight="regular"
            color="error"
            type="button"
            size="micro"
            onClick={retryAction}
          >
            {retryActionMessage}
          </Text>
        )}
      </div>
    </StyledDocumentsStatusBox>
  )
}

DocumentsStatusBox.propTypes = {
  title: PropTypes.node,
  message: PropTypes.node,
  status: PropTypes.oneOf(['wait', 'accepted', 'denied']),
  retryAction: PropTypes.func,
  fileList: PropTypes.array,
}
