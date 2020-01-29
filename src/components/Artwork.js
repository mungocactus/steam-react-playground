import React from 'react';

class Artwork extends React.Component {
  render() {
    return (
      <li class='artwork'>
        <div class='artinfo'>
          <p>{this.props.artinfo.title}</p>
          <p>{this.props.artinfo.price}</p>
          <p>{this.props.artinfo.size}</p>
          <p>{this.props.artinfo.description}</p>
          <p>{this.props.artinfo.status}</p>
        </div>
        <img src={this.props.artinfo.image} alt={this.props.artinfo.title} />
      </li>
    )
  }
}

export default Artwork;
