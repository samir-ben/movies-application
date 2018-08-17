import React from 'react';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';

// Tableau vide où l'on insérera les données récupérées de la requête getCredit (les noms des acteurs)
var nameList = [];

const VideoDetail = (props) => {
    const { poster, title, description, releaseDate, popularity, credits } = props;
    return (
        <div className="pt-3">
                <div className="row mt-2">
                        <div className="col-md-4">
                            <div className="card" style={{ width: '14rem' }}>
                                <img className="card-img-top" src={`${IMAGE_URL}${poster.poster_path}`} alt="poster" width="200px" height="300px" />
                                <div className="card-body">
                                    {returnName() /* on remplit le tableau 'nameList' des noms des acteurs du film en cours */}
                                    <p className="text-justify card-text">Acteurs principaux:
                                        {
                                            // On parcours le tableau 'nameList' remplit pour afficher les données
                                            nameList.map(name => {
                                        return <li key={name} className="text-justify credits"> {name} </li>
                                            })
                                        }
                                    </p>
                                    <hr />
                                    <li className="text-justify credits">Date sortie: {releaseDate}</li>
                                    <li className="text-justify credits">Moyenne vote : {popularity}</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                    <h1 className="text-center pb-3">{title}</h1>
                            <h4>Synopsis</h4>
                            <p className="text-justify">{description}</p>
                        </div>
                </div>
                   
        </div>
    )
    
    // Insertion des données récupérées de la requête (via la props 'credits') dans le tableau 'nameList"
    function returnName() {
        if (credits) {
            // On efface le tableau a chaque requête pour garder seulement les noms des acteurs du film en cours
            nameList = []; 
            // on récupère le champs 'name' des 5 premiers objects, puis on map et on push
            credits.slice(0, 5).map(cast => {  
                return nameList.push(cast.name)
             })        
        }
    }
}
export default VideoDetail;