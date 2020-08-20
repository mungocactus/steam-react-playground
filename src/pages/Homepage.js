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
      // let vH = document.documentElement.clientHeight;
      // console.log(vH);
      console.log('sarah is lovely');
      const surfImage = document.querySelector('.js-surf-image');
      let surfImageTop = vH + 109;
      let history = document.querySelector('.history');
      console.log(history.scrollTop);
      console.log(surfImageTop, 'surf image top');
      console.log(window.scrollY);

      if (window.scrollY >= surfImageTop) {
        console.log(surfImageTop, 'surf image top');
        surfImage.style.backgroundAttachment = 'fixed';
        console.log('super');
      } else if (window.scrollY < surfImageTop) {
        surfImage.style.backgroundAttachment = 'scroll';
        console.log('super duper');
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
          <p>A little PROJECT by PAUL HESS</p>
          <Clock />
        </section>
        <section className='surf'>
          <h1 className='history'>History of</h1>
          <h1>Surfing in</h1>
          <h1>Sydney</h1>
          <img />
          <p>Lorem ipsum dolor is renowned as one of the world's premier surfing destinations.</p>
          <p>Australian surfboard-makers have driven innovation in surfboard design and production since the mid-1960s.</p>
        </section>
        <section className='surf-image js-surf-image'>
        </section>
        <section className='rats'>
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
        <section>
          <img src='/homepage/rat-rod.jpg' alt='rat rod' />
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
