import React, { memo } from 'react';
import './App.css';
import Navigation from './component/Navigation.js';
import BottomAppBar from './component/BottomNavigation.js';
import Movies from './component/Movies.js';
import Music from './component/Music.js';
import Sports from './component/Sports.js';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { LanguageProvider } from './component/LanguageContext.js';
import { ThemeProvider } from './component/ThemeContext.js';
import PageContent from './component/PageContent.js';

function App() {
  const getMusic = props => {
    var genre = props.match.params.genre;
    return <Music genre2={genre} />
  }

  const getSports = props => {
    var genre = props.match.params.genre;
    return <Sports genre2={genre} />
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
              <Navigation />
            </Grid>
            <Grid item xs={12} className='mainContainer'>
              <Switch>
                <Route exact path="/" render={() => <Music genre2={"Classic"} />} />
                <Route exact path="/music/:genre" render={getMusic} />
                <Route exact path="/संगीत/:genre" render={getMusic} />
                <Route exact path="/sports/:genre" render={getSports} />
                <Route exact path="/खेल/:genre" render={getSports} />
                <Route exact path="/खेळ/:genre" render={getSports} />
                <Route exact path="/movies/:genre" render={getMovies} />
                <Route exact path="/चलचित्र/:genre" render={getMovies} />
                <Route exact path="/चित्रपट/:genre" render={getMovies} />
              </Switch>
            </Grid>
          </Grid>
          <BottomAppBar />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default memo(App);