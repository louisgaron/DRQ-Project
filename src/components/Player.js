import React, {useState, useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls'

function Player(props) {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] =useState(false)

    //function that's for pause and play of the song
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else{
            audioEl.current.pause();
        }
    })

    const SkipSong = (forwards = true) => {
        if (forwards){
            //Skips the song and plays the next song listed
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if(temp> props.songs.length - 1){
                    temp = 0;
                }

                return temp;
            })
        }
        else{
            //sends back to the last song on the list 
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0){
                    temp = props.song.length -1;
                }

                return temp;
            })

        }
    }
    return (
        <div className= "music-player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]}/>
            <PlayerControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
            <p><strong>Next Up:</strong> {props.songs[props.nextSongIndex].title} by: {props.songs[props.nextSongIndex].artist} </p>
            
        </div>
    )
}

export default Player;
