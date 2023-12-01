import React from 'react'
import ReactDOM from 'react-dom'
import { Player } from '../src/'

// Select all elements that match the pattern "webvtt-player-*"
const elements = document.querySelectorAll('[id^="webvtt-player-"]');

// const root = document.getElementById('webvtt-player')

// Iterate over each element and attach your new component
elements.forEach(element => {
    ReactDOM.render(
        <Player
            audio={element.dataset.audio}
            transcript={element.dataset.transcript}
            metadata={element.dataset.metadata}
            kloeke={element.dataset.kloeke}
            instancenum={element.dataset.instancenum}
            preload={true} />,
        element
    )
});