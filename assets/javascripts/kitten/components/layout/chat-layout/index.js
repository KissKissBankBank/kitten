import React, { createContext, useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { StyledChatLayout } from './styles'
import { Text } from '../../../components/typography/text'
import { useWindowWidth } from '../../../helpers/utils/use-window-width-hook'
import { ScreenConfig } from '../../../constants/screen-config'

const ChatLayoutContext = createContext({})

export const ChatLayout = ({ className, children, style, ...props }) => {
  const [activeCol, setActiveColumn] = useState(null)
  const [activeColOffset, setActiveColOffset] = useState(0)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    if (!activeCol) return
    handlePagePosition()
  }, [activeCol])

  useEffect(() => {
    if (!activeCol) return
    if (windowWidth >= ScreenConfig.L.min) return
    handlePagePosition()
  }, [windowWidth])

  const handlePagePosition = () => {
    const activeColEl = document.getElementById(activeCol)
    setActiveColOffset(activeColEl.offsetLeft)
  }

  return (
    <ChatLayoutContext.Provider value={{ setActiveColumn }}>
      <StyledChatLayout
        as="main"
        id="main"
        className={classNames('k-ChatLayout', className)}
        style={{ ...style, '--chatLayoutOffset': activeColOffset }}
        {...props}
      >
        <div className="k-ChatLayout__grid">{children}</div>
      </StyledChatLayout>
    </ChatLayoutContext.Provider>
  )
}

ChatLayout.Column = ({
  name,
  title,
  className = null,
  isPrimaryColumn = false,
  hasMobileHeader = false,
  children,
  backAction,
  backActionText,
  nextAction,
  nextActionText,
  centeredHeader,
  fullWidthContent = false,
  ...props
}) => {
  const { setActiveColumn } = useContext(ChatLayoutContext)

  return (
    <section
      id={name}
      className={classNames(
        'k-ChatLayout__column',
        `k-ChatLayout__col-${name}`,
        className,
        {
          'k-ChatLayout__column--isPrimaryColumn': isPrimaryColumn,
          'k-ChatLayout__column--hasMobileHeader': hasMobileHeader,
        },
      )}
      {...props}
    >
      {isPrimaryColumn && (
        <Text
          tag="h1"
          size="giant"
          weight="bold"
          className="k-ChatLayout__column__title"
        >
          {title}
        </Text>
      )}

      {hasMobileHeader && (
        <div
          className={classNames('k-ChatLayout__columnHeader', {
            'k-ChatLayout__columnHeader--centeredHeader': centeredHeader,
          })}
        >
          <button
            className="k-ChatLayout__columnHeader__back k-u-reset-button"
            type="button"
            onClick={() => backAction({ setActiveColumn })}
          >
            {backActionText}
          </button>
          <div className="k-ChatLayout__columnHeader__title">{title}</div>
          {nextAction && nextActionText && (
            <button
              className="k-ChatLayout__columnHeader__next k-u-reset-button"
              type="button"
              onClick={() => nextAction({ setActiveColumn })}
            >
              {nextActionText}
            </button>
          )}
        </div>
      )}

      <div
        className={classNames('k-ChatLayout__column__content', {
          'k-ChatLayout__column__content--fullWidth': fullWidthContent,
        })}
      >
        {typeof children === 'function'
          ? children({ setActiveColumn })
          : children}
      </div>
    </section>
  )
}
