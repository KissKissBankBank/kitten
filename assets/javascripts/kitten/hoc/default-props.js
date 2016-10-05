import React from 'react'

const defaultProps = (WrappedComponent, props) => {
  return class defaultProps extends React.Component {
    render() {
      return(
        <WrappedComponent {...props} {...this.props}>
        </WrappedComponent>
      )
    }
  }
}

export default defaultProps;
