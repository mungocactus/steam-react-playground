import React from 'react';
import ReactPlayer from 'react-player';
import LoaderSpinner from '../components/LoaderSpinner';

class NasaImageDaily extends React.Component {

  render() {
    const imageDaily = this.props.imageDaily;
    const imageInfo = this.props.imageInfo;
    const mediaType = imageInfo.media_type;
    let mediaImage = 'media-image';
    let mediaVideo = 'media-video';

    mediaType === 'image' ? mediaImage = 'media-image' : mediaImage = 'media-image hide';
    mediaType === 'video' ? mediaVideo = 'media-video' : mediaVideo = 'media-video hide';


    return (
      <React.Fragment>
        <div>
          <div className={mediaImage}>
            <img src={imageDaily} alt='nasa of the day' />
            <LoaderSpinner />
          </div>
          <div className={mediaVideo}>
            <ReactPlayer className='video' url={imageDaily} width='100%' height='100%' />
            <LoaderSpinner />
          </div>
        </div>
        <div className='nasa-info'>
          <h1>{imageInfo.title}</h1>
          <p>{imageInfo.explanation}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default NasaImageDaily
