import React from 'react';

const VideoCard=(props)=>{
    console.log(props)
    return(
        <div className="video-Card">
                  <img className="imgwrapper" src={props.videoThumb}></img>
                  <h3>{props.videoTitle}</h3>
                </div>
    )
               
}

export default VideoCard;