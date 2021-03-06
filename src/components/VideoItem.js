import "./VideoItem.css";
import React from "react";


const VideoItem = ( {video, onVideoSelect} ) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <a className="header">{video.snippet.title}</a>
            </div>

            
        </div>
    )
}

export default VideoItem;