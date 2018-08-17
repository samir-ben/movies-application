import React from 'react';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

const VideoListItem = (props) => {
    const { movie } = props;
    return(
            <li className="list-group-item" onClick={sendItem}>
                <div className="media">
                    <div className="media-left">
                    <img className="align-self-center rounded" src={`${IMAGE_URL}${movie.poster_path}`} alt="poster" width="100px" height="100px" />
                    </div>
                    <div className="media-body">
                        <h6 className="title-list-item">{movie.title}</h6>
                    </div>
                </div>
            </li>
    )
    // Envoi des données (les information sur le film) dans le composants parent (containers/video-list.js)  
    function sendItem() {
        props.callback(movie);
    }

}




export default VideoListItem;