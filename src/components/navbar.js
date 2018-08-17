import React from 'react';

const NavBar = (props) => {
       return (
           <nav className="navbar navbar-expand-lg navbar-light">
               <a className="navbar-brand" href="http://localhost:3000/">Trouve<span style={{ color: '#6be59c'}}>Ton</span>Film</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item active">
                           <span className="nav-link" onClick={(e) => getGenreId(28)} >Action</span>
                       </li>
                       <li className="nav-item">
                           <span className="nav-link" onClick={(e) => getGenreId(12)}>Aventure</span>
                       </li>
                       <li className="nav-item">
                           <span className="nav-link" onClick={(e) => getGenreId(16)}>Animation</span>
                       </li>
                       <li className="nav-item">
                           <span className="nav-link" onClick={(e) => getGenreId(35)}>Comédie</span>
                       </li>
                       <li className="nav-item">
                           <span className="nav-link" onClick={(e) => getGenreId(18)}>Drame</span>
                       </li>
                       <li className="nav-item">
                           <span className="nav-link" onClick={(e) => getGenreId(14)}>Fantastique</span>
                       </li>               
                       <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               Autres</a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(80)}>Crime</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(99)}>Documentaire</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(10751)}>Familiale</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(36)}>Histoire</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(27)}>Horreur</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(10402)}>Musique</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(9648)}>Mystère</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(10749)}>Romance</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(878)}>Science-Fiction</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(10770)}>Téléfilm</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(53)}>Thriller</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(10752)}>Guerre</span>
                               </div>
                               <div className="nav-item">
                                   <span className="nav-link" onClick={(e) => getGenreId(37)}>Western</span>
                               </div>
                           </div>
                       </li>
                   </ul>
               </div>
           </nav>
       )
    // Envoi des données (les genres) dans le composants parent (App.js)   
    function getGenreId(e) {
        props.callback(e);
    }  
}

export default NavBar;