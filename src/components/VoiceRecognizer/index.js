import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpeechRecognition from 'react-speech-recognition'

import actionCreators from '../../redux/Translation/actions';

import './styles.css';

class VoiceRecognizer extends Component {
  state = {};

  static getDerivedStateFromProps(props, prevState){
    if(props.transcript && (prevState.transcript !== props.transcript)){
      props.getTranslation(props.transcript, "es", "en");
    }
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, translation} = this.props
    return (browserSupportsSpeechRecognition && (
      <div className="voice-recognizer-container">
        <div className="voice-recognizer-text-container">{transcript}</div>
        <div className="voice-recognizer-text-container">{translation}</div>
        <button className="voice-recognizer-reset-button" onClick={resetTranscript}>Reset</button>
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  translation: state.translation,
  translationLoading: state.translationLoading
});

const mapDispatchToProps = dispatch => ({
  getTranslation: (text, textLanguage, translationLanguate) => dispatch(actionCreators.getTranslation(text, textLanguage, translationLanguate))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(VoiceRecognizer));