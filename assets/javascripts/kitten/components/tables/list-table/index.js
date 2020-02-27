import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListTableStyles } from './styles'

const Context = React.createContext({ id: null })

export const ListTable = ({ id, children, className, ...props }) => {
  return (
    <Context.Provider value={{ id }}>
      <ListTableStyles />
      <section
        id={id}
        className={`ListTable ${className ? className : ''}`}
        {...props}
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
      className={`ListTable__Header ${className ? className : ''}`}
    >
      <ul
        {...listProps}
        className={`ListTable__HeaderList ${
          listProps.className ? listProps.className : ''
        }`}
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
    <ul
      className={`ListTable__Body ${className ? className : ''}`}
      {...props}
    />
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
      className={`ListTable__Row ${
        className ? className : ''
      } ${isHighlighted && 'ListTable__Row--is_highlighted'}`}
      {...others}
    >
      <ul
        {...listProps}
        className={`ListTable__RowList ${
          listProps.className ? listProps.className : ''
        }`}
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
  return (
    <li className={`ListTable__Col ${className ? className : ''}`} {...props} />
  )
}

ListTable.propTypes = {
  id: PropTypes.string.isRequired,
}
