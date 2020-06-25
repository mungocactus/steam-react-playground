import React from 'react';

class LoaderSpinner extends React.Component {
  render() {
    return (
      <div class="loader-container">
        <div class="spinner center">
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
        </div>
      </div>
    )
  }
}

export default LoaderSpinner;
