import React, { forwardRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { TextInputWithIcon } from '../../../../components/form/text-input-with-icon'
import { SearchIcon } from '../../../../components/graphics/icons/search-icon'

export const SearchInput = forwardRef(({ children, className, buttonProps, inputProps, expanded, formProps, openSearchMenu, ...props }, ref) => {
  const [isMobileInvisible, setMobileInvibility] = useState(true)

  const handleClick = () => {
    setMobileInvibility(current => { return !current })
  }

  useEffect(() => {
    openSearchMenu(!isMobileInvisible)
  }, [isMobileInvisible])

  return (
    <form
      className={classNames(
        'k-HeaderNav__searchInput',
        className,
        {
          'k-HeaderNav__searchInput--expanded': expanded,
          'k-HeaderNav__searchInput--mobileInvisible': isMobileInvisible,
        }
      )}
      ref={ref}
      {...props}
    >
      <TextInputWithIcon
        size="tiny"
        rounded
        icon={<SearchIcon />}
        iconPosition="right"
        buttonProps={buttonProps}
        autoComplete="off"
        {...inputProps}
        className={classNames('k-HeaderNav__searchInput__input', inputProps.className)}
      />
      <button
        className="k-u-reset-button k-HeaderNav__searchInput__mobileFold"
        type="button"
        onClick={handleClick}
      >
        {isMobileInvisible ? (<SearchIcon/>) : 'x'}
      </button>
      {children}
    </form>
  )
})

SearchInput.propTypes = {
}

SearchInput.defaultProps = {
}
