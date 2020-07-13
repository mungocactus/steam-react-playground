import React from 'react';

class LoaderSpinner extends React.Component {
  render() {
    return (
      <div className="loader-container">
        <div className="spinner center">
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
          <div className="spinner-blade"></div>
        </div>
      </div>
    )
  }
}

export default LoaderSpinner;
