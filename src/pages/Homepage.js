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

      const ratrodImage = document.querySelector('.js-ratrod-image');
      let ratrodImageTop = vH + 4250;

      console.log(window.scrollY);

      if (window.scrollY >= surfImageTop) {
        surfImage.style.backgroundAttachment = 'scroll';
      } else if (window.scrollY < surfImageTop) {
        surfImage.style.backgroundAttachment = 'fixed';
      }

      if (window.scrollY >= ratrodImageTop) {
        ratrodImage.style.backgroundAttachment = 'scroll';
      } else if (window.scrollY < ratrodImageTop) {
        ratrodImage.style.backgroundAttachment = 'fixed';
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
      <div>
        <section className='homepage-content'>
          <Header />
          <Navigation />
          <p className='title'>A little PROJECT by PAUL HESS</p>
          <Clock />
        </section>
        <section className='surf'>
          <div className='section-top'>
            <div className='surf-title'>
              <h2 className='the'>the</h2>
              <h1 className='history'>History</h1>
              <h2 className='of'>of</h2>
              <h1 className='surfing'>Surfing</h1>
              <h2 className='in'>in</h2>
              <h1 className='sydney'>Sydney</h1>
            </div>
            <div className='tracks-parent'>
              <img className='tracks' src='/homepage/tracks.jpg' />
            </div>
          </div>
          <div className='section-bottom'>
            <p>Lorem ipsum dolor is renowned as one of the world's premier surfing destinations.</p>
            <p>Australian surfboard-makers have driven innovation in surfboard design and production since the mid-1960s.</p>
          </div>
        </section>
        <section className='surf-image js-surf-image'>
        </section>
        <section className='ratrods'>
          <h1>Rat Rods</h1>
          <p>The modern definition of a rat rod is a custom car with a deliberately worn-down, unfinished appearance, typically lacking paint, showing rust, and made from </p>
          <img />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
        </section>
        <section className='ratrod-image js-ratrod-image'>
        </section>
        <section className='trees'>
          <h1>Ancient Yew Trees</h1>
          <p>The modern definition of a rat rod is a custom car with a deliberately worn-down, unfinished appearance, typically lacking paint, showing rust, and made from </p>
          <img />
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit </p>
        </section>
        <section>
          <img src='/homepage/yew-tree.jpg' alt='yew tree' />
        </section>
      </div>
    )
  }
}

export default HomePage
