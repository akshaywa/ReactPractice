import React, { memo } from 'react';
import './App.css';
import Navigation from './component/Navigation.js';
import BottomAppBar from './component/BottomNavigation.js';
import Movies from './component/Movies.js';
import Music from './component/Music.js';
import Sports from './component/Sports.js';
import { Grid } from '@material-ui/core';
import { Route, Routes, useParams } from 'react-router-dom';
import { LanguageProvider } from './component/LanguageContext.js';
import { ThemeProvider } from './component/ThemeContext.js';
import PageContent from './component/PageContent.js';

function App() {
  const { genre } = useParams();
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Navigation />
            </Grid>
            <Grid item xs={12} className='mainContainer'>
                <Routes>
                  <Route path="/" element={<Music genre2={"Classic"} />} />
                  <Route path="/music/:genre" element={<Music genre2={genre} />} />
                  <Route path="/संगीत/:genre" element={<Music genre2={genre} />} />
                  <Route path="/sports/:genre" element={<Sports genre2={genre} />} />
                  <Route path="/खेल/:genre" element={<Sports genre2={genre} />} />
                  <Route path="/खेळ/:genre" element={<Sports genre2={genre} />} />
                  <Route path="/movies/:genre" element={<Movies genre2={genre} />} />
                  <Route path="/चलचित्र/:genre" element={<Movies genre2={genre} />} />
                  <Route path="/चित्रपट/:genre" element={<Movies genre2={genre} />} />
                </Routes>
            </Grid>
          </Grid>
          <BottomAppBar />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default memo(App);