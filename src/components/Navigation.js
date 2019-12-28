import React from 'react';

// stateless function using implicit return
const Navigation = () => (
  <div className='navigation'>
    <a href='/'>Home</a>
    <a href='/randomuser'>Random User</a>
    <a href='/artwork'>Artwork</a>
    <a href='/artwork-slider'>Artwork Slider</a>
    <a href='/inventory'>Inventory</a>
  </div>
)

export default Navigation
