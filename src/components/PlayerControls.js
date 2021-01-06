import React from 'react'
import {fontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause, faForward, faBackward} from '@fortawesome/react-fontawesome'

function PlayerControls(props) {
    return (
        <div className= "music-PlayerControls">
            <button className="skip-btn" onClick= {() => props.SkipSong(false)}>fontAwesomeIcon icon = {faBackward}</button>
            <button className="play-btn" onClick={() =>props.setIsPlaying(!props.isPlaying)}> fontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}</button>
            <button className="skip-btn"> fontAwesomeIcon icon={faForward}</button>
            
        </div>
    )
}

export default PlayerControls
