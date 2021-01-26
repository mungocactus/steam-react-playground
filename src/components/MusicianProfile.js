import React from 'react';

class MusicianProfile extends React.Component {

  render() {
    const musicianProfile = this.props.musicianProfile;
    console.log(musicianProfile.artist.name);

    // artists name
    // artists image
    // link to artists deezer site
    // album image
    // album name


    return (
      <li>
        <h3>{musicianProfile.artist.name}</h3>
        <img src={musicianProfile.artist.picture} alt='stuff' />
        <p>{musicianProfile.album.title}</p>
        <img src={musicianProfile.album.cover} alt='stuff' />
      </li>
    )
  }
}

export default MusicianProfile
