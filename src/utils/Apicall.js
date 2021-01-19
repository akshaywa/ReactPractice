import axios from 'axios';

export default {
    getMovies(genre2) {
        var id;
        const apiKey = "1bad097ae3f2e71b81a7b6c662d39f37";

        switch (genre2) {
            case "Drama": id = 2;
                break;
            case "Romance": id = 1;
                break;
            case "Action": id = 4;
                break;
            case "Adventure": id = 5;
                break;
            case "Biopic": id = 6;
                break;
            default: id = 1;
                break;
        }

        const baseURL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" + id + "&api_key=" + apiKey;

        return new Promise((resolve, reject) => {
            axios.get(baseURL)
                .then(res => {
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}
