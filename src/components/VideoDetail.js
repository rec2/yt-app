import React from "react";

const VideoDetail = ( {video} ) => {
    if (!video) {
        return (
            <div> Loading ...</div>
        );
    };

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe alt={video.snippet.title} src={videoSrc} title={video.snippet.title} />
            </div>
            <div className="ui segment">
                <h2 className="ui header">{video.snippet.title} </h2>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;