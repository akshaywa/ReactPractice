import React from 'react';
import './App.css';
import Navigation from './component/Navigation.js'
import Movies from './component/Movies.js'
import Music from './component/Music.js'
import News from './component/News.js'
import Sports from './component/Sports.js'
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';


export default function App() {
  const navigationList = ["Music", "Sports", "News", "Movies"]
  const musicList = ["Classic", "Disco", "Bollywood", "Indipop", "Rap"]
  const sportsList = ["Cricket", "Football-Worldcup", "Wimbledon", "Olympics", "IPL"]
  const newsList = ["Regional", "National", "International", "Sports", "Covid19"]
  const moviesList = ["Drama", "Romance", "Action", "Adventure", "Biopic"]

  const getMusic = props => {
    var genre = props.match.params.genre;
    return <Music genre2={genre} />
  }

  const getSports = props => {
    var genre = props.match.params.genre;
    return <Sports genre2={genre} />
  }

  const getNews = props => {
    var genre = props.match.params.genre;
    return <News genre2={genre} />
  }

  const getMovies = props => {
    var genre = props.match.params.genre;
    return <Movies genre2={genre} />
  }


  return (
    <Grid container spacing={1}>
      <Grid container item xs={12}>
        <Navigation
          navigationList={navigationList}
          musicList={musicList}
          sportsList={sportsList}
          newsList={newsList}
          moviesList={moviesList} />
      </Grid>
      <Grid container item xs={12} className='mainContainer'>
        <Switch>
          <Route exact path="/" render={() => <Music music={'Mixed'} />} />
          <Route exact path="/music/:genre" render={getMusic} />
          <Route exact path="/sports/:genre" render={getSports} />
          <Route exact path="/news/:genre" render={getNews} />
          <Route exact path="/movies/:genre" render={getMovies} />
        </Switch>
      </Grid>
    </Grid>
  );
}
