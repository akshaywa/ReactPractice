import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Apicall from '../utils/Apicall.js';
import './Movies.css'
import { Grid } from '@material-ui/core';

export default function Movies(props) {
    const [movieList, setMovieList] = React.useState([]);

    useEffect(() => {
        Apicall.getMovies(props.genre2).then((movieList2) => {
            setMovieList(movieList2.data.results);
        }).catch((error) => {
            console.log(error);
        });
    }, [props.genre2]);


    return (
        <React.Fragment>
            <div className="cardContainer">
                {
                    movieList.map((movieItem, index) => (
                        <Card key={index} className="cardSingle">
                            <CardContent className="cardContent">
                                <Typography gutterBottom variant="h5" component="h2">
                                    {movieItem.original_title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {movieItem.overview}
                                </Typography>
                            </CardContent>
                            <Grid container className="cardStats" spacing="2">
                                <Grid item>
                                    <FavoriteIcon style={{fill: "red"}}/>
                                </Grid>
                                <Grid item>
                                    <Typography component="h5">
                                        {movieItem.popularity}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ShareIcon style={{fill: "#3f51b5"}}/>
                                </Grid>
                                <Grid item>
                                    <Typography component="h5">
                                        {movieItem.release_date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Card>
                    ))
                }
            </div>
        </React.Fragment >
    );
}
