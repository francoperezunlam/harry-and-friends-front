import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpeechRecognition from 'react-speech-recognition'

import actionCreators from '../../redux/Translation/actions';

import './styles.css';

class VoiceRecognizer extends Component {
  getTranslation(transcript) {
    this.props.getTranslation(transcript, "es", "en");
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, translation} = this.props
    return (browserSupportsSpeechRecognition && (
      <div className="voice-recognizer-container">
        <div className="voice-recognizer-text-container">{transcript}</div>
        <div className="voice-recognizer-text-container">{translation}</div>
        <button className="voice-recognizer-reset-button" onClick={() => this.getTranslation(transcript)}>Translate</button>
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