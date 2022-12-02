import React from 'react'

function WithLoading(Component) {
    return function WihLoadingComponent({ loading, ...props }) {
      if (!loading) return (<Component {...props} />);
      return (<p>Be Hold, fetching data may take some time :)</p>);
    }
  }
  export default WithLoading;