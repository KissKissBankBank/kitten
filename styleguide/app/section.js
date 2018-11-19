import React from 'react'

export default ({ title, id, children }) => {
  return (
    <div id={id}>
      <h2 className="k-Row karl-Title">{title}</h2>
      {children}
    </div>
  )
}
