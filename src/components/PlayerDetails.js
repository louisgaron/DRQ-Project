import React from 'react'


function PlayerDetails() {
    return (
        //desing for playerDetails Image
        <div className="music-playerDetails">
            <div className="details-img">
                <img src={props.song.img_src} alt=""/>
            </div>
            <h3 className= "title-details">{props.song.title}</h3>
            <h4 className= "artist-details">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetails;
