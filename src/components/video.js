import React from 'react';
const YOUTUBE_URL = 'http://www.youtube.com/embed/'

const Video = ({videoId}) => {
    return (
            <div className="embed-responsive embed-responsive-16by9">
            <iframe title="movie trailer" className="embed-responsive-item" src={`${YOUTUBE_URL}${videoId}`}/>
            </div>
    )
}

export default Video;



