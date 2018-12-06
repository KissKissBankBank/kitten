import React from 'react'

export default ({ title, children }) => {
  return (
    <div
      className={`k-Grid__col k-Grid__col--12 k-Grid__col--2@l k-Grid__col--3@m`}
    >
      <div className="karl-Icons karl-Icons--tiny">
        <div className="karl-Icons__card">
          <div className="karl-Example">
            {title && <p className="karl-Example__title">{title}</p>}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
