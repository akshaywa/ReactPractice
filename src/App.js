import React from 'react';
import './App.css';
import Navigation from './component/Navigation.js'
import BottomAppBar from './component/BottomNavigation.js';
import Movies from './component/Movies.js'
import Music from './component/Music.js'
import News from './component/News.js'
import Sports from './component/Sports.js'
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './component/LanguageContext.js';
import { ThemeProvider } from './component/ThemeContext.js';
import PageContent from './component/PageContent.js';

export default function App() {
  const navigationList = ["Music", "Movies", "Sports"]
  const musicList = ["Classic", "Disco", "Bollywood", "Electronic", "Rap"]
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
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Navigation
                navigationList={navigationList}
                musicList={musicList}
                sportsList={sportsList}
                newsList={newsList}
                moviesList={moviesList} />
            </Grid>
            <Grid item xs={12} className='mainContainer'>
              <Switch>
                <Route exact path="/" render={() => <Music genre2={"Classic"} />} />
                <Route exact path="/music/:genre" render={getMusic} />
                <Route exact path="/sports/:genre" render={getSports} />
                <Route exact path="/news/:genre" render={getNews} />
                <Route exact path="/movies/:genre" render={getMovies} />
              </Switch>
            </Grid>
          </Grid>
          <BottomAppBar />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}
