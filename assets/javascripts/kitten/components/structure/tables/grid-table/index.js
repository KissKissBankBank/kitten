import React from 'react'
import PropTypes from 'prop-types'
import { StyledGridTable } from './styles'
import classNames from 'classnames'

const Context = React.createContext({ id: null })

export const GridTable = ({
  scrollable,
  id,
  children,
  className,
  ...props
}) => {
  return (
    <Context.Provider value={{ id }}>
      <StyledGridTable
        {...props}
        id={id}
        className={classNames('k-GridTable__wrapper', className, {
          'k-GridTable--scrollable': scrollable,
        })}
      >
        <div className="k-GridTable">{children}</div>
      </StyledGridTable>
    </Context.Provider>
  )
}

GridTable.Header = ({
  className = '',
  children,
  listProps = {},
  ...others
}) => {
  return (
    <header
      {...others}
      className={classNames('k-GridTable__Header', className)}
    >
      <ul
        {...listProps}
        className={classNames('k-GridTable__HeaderList', listProps.className)}
      >
        <Context.Consumer>
          {({ id }) => (
            <>
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { id: `${id}-col-${index}` })
              })}
            </>
          )}
        </Context.Consumer>
      </ul>
    </header>
  )
}

GridTable.Body = ({ className, ...props }) => {
  return (
    <ul {...props} className={classNames('k-GridTable__Body', className)} />
  )
}

GridTable.Row = ({
  className = '',
  children,
  listProps = {},
  isHighlighted = false,
  ...others
}) => {
  return (
    <li
      {...others}
      className={classNames('k-GridTable__Row', className, {
        'k-GridTable__Row--is_highlighted': isHighlighted,
      })}
    >
      <ul
        {...listProps}
        className={classNames('k-GridTable__RowList', listProps.className)}
      >
        <Context.Consumer>
          {({ id }) => (
            <>
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                  'aria-labelledby': `${id}-col-${index}`,
                })
              })}
            </>
          )}
        </Context.Consumer>
      </ul>
    </li>
  )
}

GridTable.Col = ({ className, ...props }) => {
  return <li {...props} className={classNames('k-GridTable__Col', className)} />
}

GridTable.propTypes = {
  id: PropTypes.string.isRequired,
}
