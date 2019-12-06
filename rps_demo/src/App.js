import React, { Component } from 'react'
import Webcam from 'react-webcam'
import './App.css'

import {
  doSinglePrediction
} from './tfjs/evaluationHelpers.js'
import AdvancedModel from './AdvancedModel.js'
import * as tf from '@tensorflow/tfjs'

const DETECTION_PERIOD = 2000;

class App extends Component {
  state = {
    currentModel: null,
    webcamActive: false,
    camMessage: '',
    advancedDemo: false,
    loadDataMessage: 'Load and Show Examples'
  };

  _renderAdvancedModel = () => {
    if (this.state.advancedDemo) {

      return (
        <div>
          <AdvancedModel key="advancedDemo" />
        </div>
      )
    }
  };

  componentDidMount() {
    window.tf = tf
  }

  _renderWebcam = () => {

    if (this.state.webcamActive) {
      return (
        <div className="results">
          <div>64x64 Input</div>
          <canvas id="compVision" />
          <div>{this.state.camMessage}</div>
          <Webcam ref={this._refWeb} className="captureCam" />
        </div>

      )

    }
  };

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  detectWebcam = async () => {
    await this.sleep(100);
    const video = document.querySelectorAll('.captureCam');
    const feedbackCanvas = document.getElementById('compVision');
    // assure video is still shown
    if (video[0]) {
      const options = { feedbackCanvas };
      const predictions = await doSinglePrediction(
        this.model,
        video[0],
        options
      );
      const camMessage = predictions
        .map(p => ` ${p.className}: %${(p.probability * 100).toFixed(2)}`)
        .toString();
      this.setState({ camMessage });
      setTimeout(this.detectWebcam, DETECTION_PERIOD);

    }
  };

  _refWeb = webcam => {
    this.webcam = webcam
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Rock Paper Scissors</h2>
          <h3>Machine Learning in the browser with TFJS</h3>

        </header>
        <div className="Main">



          <button
            className="myButton"
            onClick={() => {
              this.setState(prevState => ({
                webcamActive: false,
                advancedDemo: !prevState.advancedDemo
              }))
            }}
          >
            {this.state.advancedDemo
              ? 'Turn Off Advanced Demo'
              : 'Show Advanced Demo'}
          </button>
          {this._renderAdvancedModel()}




        </div>

      </div>
    )
  }
}

export default App
