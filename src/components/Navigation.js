import React from 'react';

class Navigation extends React.Component {

  render() {
    return (
      <div className='navigation'>
        <ul>
          <li><a href='/randomuser'>Random User</a><div class='disc'></div></li>
          <li><a href='/artwork'>Artwork</a><div class='disc'></div></li>
          <li><a href='/artwork-slider'>Artwork Slider</a><div class='disc'></div></li>
          <li><a href='/inventory'>Inventory</a><div class='disc'></div></li>
          <li><a href='/artwork'>NASA</a><div class='disc'></div></li>
          <li><a href='/artwork-slider'>Weather</a><div class='disc'></div></li>
          <li><a href='/inventory'>Financial Markets</a><div class='disc'></div></li>
          <li><a href='/'>Home</a><div class='disc'></div></li>
        </ul>
      </div>
    )
  }
}

export default Navigation
