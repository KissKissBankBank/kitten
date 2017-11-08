import React from 'react'

export const defaultProps = (WrappedComponent, props) => {
  return class defaultProps extends React.Component {
    render() {
      return(
        <WrappedComponent {...props} {...this.props}>
        </WrappedComponent>
      )
    }
  }
}

// DEPRECATED: do not use default export.
export default defaultProps
