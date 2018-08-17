import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/navbar';
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from './video-list';
import Video from '../components/video';
import Footer from '../components/footer';

const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=<<YOUR_KEY>>";
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?language=fr&include_adult=false`;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentMovie: {},
      movieList: {},
      credits: {}
    }
  }
  
  componentWillMount() {
    this.initializeMovie();
  }

  // Récupère le film le plus populaire
  initializeMovie(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function (response) {
      this.setState({
        movieList: response.data.results.slice(1, 6), currentMovie: response.data.results[0],}, function(){
          this.applyVideo();
          this.getMovieByGenre();
          this.getCredits();
      });
    }.bind(this));
  }
 
  // Récupère la video du film le plus populaire/du film en cours
  applyVideo(){
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
      // si le film comprend bien une vidéo, on la récupère avec son id et on change le state du film en cours
      if (response.data.videos.results[0] && response.data.videos.results[0].key){
        const youtubeKey = response.data.videos.results[0].key;
        let newCurrentMovieState = this.state.currentMovie;
        newCurrentMovieState.videoId = youtubeKey;
          this.setState({
            currentMovie: newCurrentMovieState
          })
        }
    }.bind(this));
  }

  // Récupère le genre des films
  getMovieByGenre(genre) {
    if(genre){
      axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&with_genres=${genre}&${API_KEY}`).then(function (response) {
        if (response.data && response.data.results[0]) {
            this.setState({
              movieList: response.data.results.slice(1, 6), currentMovie: response.data.results[0],
            }, function () {
              this.applyVideo();
            });
        }
      }.bind(this));
    }
  }

  // Récupère les crédits (noms acteurs principaux)
  getCredits() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/credits?${API_KEY}`).then(function (response) {
      // console.log(response.data.cast)
      if(response.data.cast.length > 5 && response.data.cast){
        this.setState({
          credits: response.data
        })
      }
    }.bind(this));
  }

  // Récupère des recommandations de films en fonction de l'id du film en cours
  setRecommendation() {
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function (response) {
      this.setState({
        movieList: response.data.results.slice(0, 5)
      })
    }.bind(this));
  }
  // Faire une recherche de film
  onClickSearch(searchText){
    if(searchText){
      axios.get(`${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function (response) {
        if(response.data && response.data.results[0]){
          if(response.data.results[0].id !== this.state.currentMovie.id){
            this.setState({
              currentMovie: response.data.results[0],
            }, function () {
    
              this.applyVideo();
              this.setRecommendation();
              this.getCredits();
              
            });
          }
        }
      }.bind(this));
    }
  }

  // Transmet la video de l'item cliqué sur le film en cours (principal) et sa vidéo
  onClickItem(movie){
    this.setState({
      currentMovie: movie
    }, function(){
      this.applyVideo();
      this.setRecommendation();
      this.getCredits();
    })
  }

  render() {
    // S'il y a au moins 5 vidéos dans la liste on transmet les données au composant
    const renderVideoList =() =>{
      if (this.state.movieList.length >=5){
        return <VideoList movieList={this.state.movieList} callback={this.onClickItem.bind(this)} />
      }
    }
    return (
      <div className="container">
        <NavBar callback={this.getMovieByGenre.bind(this)}   />
        <SearchBar callback={this.onClickSearch.bind(this)}/>
        <div className="row">
          <div className="col-lg-8">
            <Video videoId={this.state.currentMovie.videoId}/>
            <VideoDetail poster={this.state.currentMovie} title={this.state.currentMovie.title} description={this.state.currentMovie.overview} releaseDate={this.state.currentMovie.release_date} popularity={this.state.currentMovie.vote_average} credits={this.state.credits.cast} />
          </div>
          <div className="col-lg-4">
            {renderVideoList()}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
