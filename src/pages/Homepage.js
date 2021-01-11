import React from 'react';
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Clock from '../components/Clock';

class HomePage extends React.Component {
  constructor() {
    super();

    this.parallax = this.parallax.bind(this);
  }

  parallax() {
    let vH = document.documentElement.clientHeight;
    console.log(vH);

    window.addEventListener('scroll', () => {
      // fix sections
      const surfImage = document.querySelector('.js-surf-image');
      let surfImageTop = vH + 1400;

      console.log(window.scrollY);

      // if (window.scrollY >= surfImageTop) {
      //   surfImage.style.backgroundAttachment = 'scroll';
      // } else if (window.scrollY < surfImageTop) {
      //   surfImage.style.backgroundAttachment = 'fixed';
      // }

      if (window.scrollY < surfImageTop) {
        surfImage.style.backgroundAttachment = 'fixed';
      }
      
      // move tracks image
      const tracksImage = document.querySelector('.tracks');
      let tracksImageStart = Math.floor(vH / 9);

      let tracksTopProperty = getComputedStyle(tracksImage);
      const tracksTopNumber = tracksTopProperty.top;
      let tracksTop = parseInt(tracksTopNumber.replace('px', ''));

      console.log(tracksTop);

      console.log(tracksImageStart, 'start');

      if (window.scrollY > tracksImageStart) {
        if (tracksTop >= 0) {
          tracksImage.style.display = 'block';
          tracksImage.style.top = 0;
        } else if (tracksTop < 0) {
          tracksImage.style.display = 'block';
          tracksImage.style.top = -1900 + (window.scrollY * 1.8) + 'px';
        }
      }
    })
  }

  componentDidMount() {
    this.parallax();
  }

  render() {
    return (
      <div className='homepage'>
        <section className='homepage-content'>
          <Header />
          <Navigation />
          <p className='title'>A little PROJECT by PAUL HESS</p>
          <Clock />
        </section>
        <section className='surf'>
          <div className='section-top'>
            <div className='surf-title'>
              <h2 className='the-a'>a</h2>
              <h1 className='history'>History</h1>
              <h2 className='of'>of</h2>
              <h1 className='surfing'>Surfing</h1>
              <h2 className='in'>in</h2>
              <h1 className='sydney'>Sydney</h1>
              <div className='typo-rule'></div>
            </div>
            <div className='tracks-parent'>
              <div className='tracks-cover'>
                <img className='tracks' src='/homepage/tracks.jpg' alt='cover of tracks magazine' />
              </div>
              <p><span>TRACKS</span> magazine, the Surfers Bible. Founded in Sydney in 1970</p>
            </div>
          </div>
          <div className='section-bottom'>
            <div className='surf-info'>
              <div className='surf-column'>
                <p>Surfing was brought to Australia in 1915 by Hawaiian Duke Kahanamoku. He demonstrated this ancient Hawaiian board riding technique at Freshwater Beach in Sydney. Kahanamoku's board is now on display in the northeast end of the Freshwater Surf Lifesaving Club.</p>
                <p>In 1956, a team of lifeguards from the US introduced Malibu boards to Australia.</p>
                <p>In the 1960s, Australian surfboard designer Bob McTavish invented the V-bottom surfboard, which is considered instrumental to the development of shortboard surfing.</p>
              </div>
              <div className='surf-column'>
                <p>Australia is a leading country in surfing and surf board design. Shaping is an important part of the innovation and progression of surfing. Australian shapers include Darren Handley who is shaper to world champions Mick Fanning and Stephanie Gilmore. Mark Richards (four times World Champion) is an Australian surfing and surfboard shaping legend who shaped his own boards during his time on the world tour.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='surf-image js-surf-image'>
        </section>
      </div>
    )
  }
}

export default HomePage
