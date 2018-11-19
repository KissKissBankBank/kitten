import React from 'react'

export default ({ title, children, col = 12, className }) => {
  return (
    <div className={`k-Grid__col k-Grid__col--${col} ${className}`}>
      <div className="karl-Example">
        {title && <p className="karl-Example__title">{title}</p>}
        {children}
      </div>
    </div>
  )
}
