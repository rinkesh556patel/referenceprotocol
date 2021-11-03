import logos from './images/logo11.png';
import Vector1 from './images/Vector-1.png';
import laptopVideo from './laptopVideo.mp4'
import laptop from './images/laptop.png'
// import uslogo from './images/united-states.png'
import './App.css';
import Particle from "react-particles-js";
import particlesConfig from "./particlesConfig.json";
import './styles.css'
function App() {
  return (
    <>
     

      <div className="App">
        <div className="banner">
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
            <Particle params={particlesConfig} className="App-particles__container" />

        </div>
      </div>
    </>
  );
}

export default App;
