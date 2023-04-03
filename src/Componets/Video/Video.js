import React from 'react'
import ReactPlayer from 'react-player'
import TickerTape from "../TickerTape/TickerTape";

const Video = () => {
    return (
        <div>
            <ReactPlayer
                url={"/Travis Barker - Soulja Boy - Crank That (EPIC DRUM COVER).mp4"}
                playing={true}
                controls={true}
            />
            <TickerTape/>
        </div>
    )
}

export default Video;