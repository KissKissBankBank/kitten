import React from 'react'
import PropTypes from 'prop-types'
import { ListTableStyles } from './styles'
import classNames from 'classnames'

const Context = React.createContext({ id: null })

export const ListTable = ({ id, children, className, ...props }) => {
  return (
    <Context.Provider value={{ id }}>
      <ListTableStyles />
      <section
        {...props}
        id={id}
        className={classNames('k-ListTable', className)}
      >
        {children}
      </section>
    </Context.Provider>
  )
}

ListTable.Header = ({
  className = '',
  children,
  listProps = {},
  ...others
}) => {
  return (
    <header
      {...others}
      className={classNames('k-ListTable__Header', className)}
    >
      <ul
        {...listProps}
        className={classNames('k-ListTable__HeaderList', listProps.className)}
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

ListTable.Body = ({ className, ...props }) => {
  return (
    <ul {...props} className={classNames('k-ListTable__Body', className)} />
  )
}

ListTable.Row = ({
  className = '',
  children,
  listProps = {},
  isHighlighted = false,
  ...others
}) => {
  return (
    <li
      {...others}
      className={classNames('k-ListTable__Row', className, {
        'k-ListTable__Row--is_highlighted': isHighlighted,
      })}
    >
      <ul
        {...listProps}
        className={classNames('k-ListTable__RowList', listProps.className)}
      >
        <Context.Consumer>
          {({ id }) => (
            <>
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                  'aria-describedby': `${id}-col-${index}`,
                })
              })}
            </>
          )}
        </Context.Consumer>
      </ul>
    </li>
  )
}

ListTable.Col = ({ className, ...props }) => {
  return <li {...props} className={classNames('k-ListTable__Col', className)} />
}

ListTable.propTypes = {
  id: PropTypes.string.isRequired,
}
