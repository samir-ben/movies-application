import React from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = (props) => {
    const { movieList } = props;
    return(
        <div className="row">
            <ul className="col-md-9">
                {movieList.map(movie => {
                    return <VideoListItem key={movie.id} movie={movie} callback={receiveCallBack} />
                })}
            </ul>
        </div>
        
    );
    // Envoi des données (informations sur le film) dans le composants parent (App.js)  
    function receiveCallBack(movie) {
        props.callback(movie);
    }
}

export default VideoList;