import React from 'react'

const PropsProxy = (WrappedComponent, defaultProps) => {
  return class PropsProxy extends React.Component {
    render() {
      return(
        <WrappedComponent {...defaultProps} {...this.props}>
        </WrappedComponent>
      )
    }
  }
}

export default PropsProxy;
