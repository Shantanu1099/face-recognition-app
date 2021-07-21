import React from 'react';
import { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
// import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd5e1a9b1a0614bc6bf63da1df513a0f2'
});

const ParticleOverlay = {
    background: {
      color: {
        value: "#background: LINEAR-GRADIENT(TO RIGHT, RGB(189, 77, 209), RGB(142, 225, 225));",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
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
          duration: 2,
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
        speed: 3,
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
  
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = (event) => {
    this.setState({imageUrl : this.state.input})
    app.models.predict(Clarifai.COLOR_MODEL,"https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response)
      }, 
      function(err){
        console.log(err)
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particle-character"
          id="tsparticles"
          // init={this.particlesInit}
          // loaded={this.particlesLoaded}
          options={ParticleOverlay}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange = {this.onInputChange}
          onButtonSubmit = {this.onButtonSubmit}
        />
        <FaceRecognition imageUrl="{this.state.imageUrl}"/>
      </div>
    );
  }
}
export default App;
