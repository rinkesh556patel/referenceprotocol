import logos from './images/logo11.png';
import Vector1 from './images/Vector-1.png';
import laptopVideo from './laptopVideo.mp4'
import laptop from './images/laptop.png'
// import uslogo from './images/united-states.png'
import './App.css';
import Particles from "react-tsparticles";
import { Component } from 'react'

class App extends Component {

  render() {
    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <>


        <div className="App">

          <div className="banner" >
            <div className="navbar">
              <div className="navlogo">
                <img src={logos} className="logoimg" alt="" />
                {/* <img src={Vector1} className="logoimg1" alt="" /> */}
              </div>
              {/*  <div className="navoptions">
              <p>HOW IT WORKS</p>
          <p>ABOUT US</p>
          <p>FEATURES</p>
          <p>TESTIMONIAL</p>
          <p>CONTACT</p> 
            </div>
            <div className="navdropdown">
               <select className="country-select">
            <option style={{backgroundImage:"url('./images/united-states.png')"}} value="US">USA</option>
            <option style={{backgroundImage:"url('./images/united-states.png')"}} value="IN">India</option>
            <option style={{backgroundImage:"url('./images/united-states.png')"}} value="UK">England</option>
          </select> 
            </div>*/}
            </div>
            <div className="banner-content">
              <div className="hero">
                <h2 className="hero-text">Reference Protocol</h2>
                <h3 className="incubated">Incubated By Kalamint</h3>
                <div className="comming-soon" >Coming Soon</div>
              </div>
              {/* <div className="laptopdiv">
              <div className="vids">
                <img src={laptop} alt="" className="laptop" />
                <video className="laptop-layer" loop autoPlay muted>
                  <source src={laptopVideo} type="video/mp4" />
                Your browser does not support HTML video.
            </video>
              </div>
            </div> */}
            </div>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                background: {
                  color: {
                    value: "#000",
                  },
                },
                fpsLimit: 60,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    bubble: {
                      distance: 400,
                      duration: 1,
                      opacity: 0.8,
                      size: 40,
                    },
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outMode: "bounce",
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      value_area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    random: true,
                    value: 5,
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
