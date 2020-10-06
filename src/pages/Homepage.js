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
              <p><span className='bold'>TRACKS</span> magazine, the Surfers Bible. Founded in Sydney in 1970</p>
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
        <section className='ratrods'>
          <div className='section-top'>
            <div class='homepage-section-title'>
              <h1>Rat Rods</h1>
              <h2>The modern definition of a rat rod is a custom car with a deliberately worn-down, unfinished appearance, typically lacking paint, showing rust</h2>
            </div>
            <div class='homepage-section-img'>
              <img src='homepage/rat-rod-bw.jpg' alt='ratrod'/>
            </div>
          </div>
          <div className='section-bottom'>
            <div className='surf-info'>
              <div class='surf-column'>
                <p>The origin of the term "rat rod" is the subject of dispute, but was definitely coined by one specific person in the Shifters So. Cal. car club. In the early 1990s, Anthony Casteneda thought of the word when they were interviewed in a Rod & Custom magazine article. Anthony stated that to him and his car club, their traditional hot rods were lacking certain elements like paint and/or upholstery, and were similar to rat bikes of their time period, thus the name Rat Rods.</p>
                <p>The origin of the movement itself is a little easier to pin down. In 1987, after many decades of building hot rods and customs, Jim "Jake" Jacobs gathered spare parts from his amassed personal stash and put together a '28 Ford Phaeton in 28 days. It sported no fenders, wide-white bias-ply tires, a rusty Model A body on '32 Ford frame rails, a chopped windshield and a shortened deuce grille shell with a small-block Chevy 350 and a '39 Ford 3-speed. Jake drove it to Pleasanton, CA and entered the Goodguys' annual West Coast Nationals with no bodywork, paint or interior (other than what was needed to be functional and legal). He parked in full view of many high-end, top-dollar customs and proceeded to pull out a bucket of paint and some brushes. Many spectators stopped to watch, and a few even joined Jake as he painted the car.</p>
                <p>The typical rat rod is a late-1920s through to late-1950s coupe or roadster, but sometimes a truck or sedan. Many early (pre-World War II) vehicles were not built with fenders, hoods, running boards, and bumpers. The bodies are frequently channeled over the frame and sectioned, or the roofs are chopped, for a lower profile. Later-era post-war vehicles were rarely constructed without fenders and were often customized in the fashion of kustoms, leadsleds, and lowriders; Maltese crosses, skulls, and other accessories were often added. The owner of the vehicle was typically responsible for most, or all, of the work present in the vehicle.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='ratrod-image js-ratrod-image'>
        </section>
        <section className='trees'>
        <div className='section-top'>
          <div class='homepage-section-title'>
            <h1>Ancient</h1>
            <h1>Yew</h1>
            <h1>Trees</h1>
            <h2>With lifespans of up to 3,000 years, the oldest living tree in the UK is easily a yew</h2>
          </div>
          <div class='homepage-section-img'>
            <img src='homepage/churchyard.jpg' alt='churchyard'/>
          </div>
        </div>
        <div className='section-bottom'>
          <div className='surf-info'>
            <div class='column'>
              <p>Yews have witnessed some monumental moments in our history. A yew was said to have sheltered Robert the Bruce, it was under a yew that the Magna Carta was sealed and the same yew was also believed to be a meeting place for Henry VIII and Anne Boleyn.</p>
              <p>Britain is home to far more ancient yews than any other country in Europe. The Ancient Yew Group has identified 978 ancient or veteran yews, more than 500 years old in England and 407 in Wales.</p>
              <p>Many are found in churchyards, where their sacred status has protected them well for centuries. Many old yews were planted by Norman church-builders; others by Celtic Christians; and some predate Christianity, showing how the new religion supplanted older sacred sites.</p>
              <p>The yew has a remarkable trait that even today is quite astonishing. A hollow yew is able to regenerate itself by producing new roots from its centre. These roots grow down into the ground to feed and strengthen the ageing tree, stabilising it and prolonging its survival, enabling the tree to continue life long after many other trees would have perished. With this exceptional quality, it is understandable that the yew was revered as a symbol of long life, rebirth and regeneration – and a fitting subject on which to focus in January, when our thoughts turn to new beginnings.</p>
              <p>The yew was a sacred tree, and sites with ancient yews became places of Druidic or Celtic worship. Druids, the priests of the Celtic tribes, believed wands of yew would banish evil spirits. When the pagan population was converted to Christianity from Roman times onward, the same sites continued to be considered sacred places. The Anglo-Saxons built churches near the old yews; later, the old churches were built over with new.</p>
            </div>
          </div>
        </div>
        </section>
        <section>
          <img src='/homepage/yew-tree.jpg' alt='yew tree' />
        </section>
      </div>
    )
  }
}

export default HomePage
