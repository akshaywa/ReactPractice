import React, { useEffect } from 'react';
import Apicall from '../utils/Apicall.js';

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
        <div>
            <p>{props.genre2}</p> <br />
            {
                movieList.map((movieItem, index) => (
                    <p key={index}>{movieItem.original_title}</p>
                ))
            }
        </div >
    );
}
