import axios from 'axios';

export default {
    getMovies(genre2) {
        var id;
        const apiKey = "1bad097ae3f2e71b81a7b6c662d39f37";

        switch (genre2) {
            case "Drama": id = 2;
                break;
            case "नाटक": id = 2;
                break;
            case "Romance": id = 1;
                break;
            case "रोमांस": id = 1;
                break;
            case "Action": id = 4;
                break;
            case "ऐकशन": id = 4;
                break;
            case "Adventure": id = 5;
                break;
            case "साहसिक": id = 5;
                break;
            case "Biopic": id = 6;
                break;
            case "बायोपिक": id = 6;
                break;
            default: id = 2;
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
    },

    getMusic(genre2) {
        const apiKey = "e5cb67fsZKFQqHejbt0twPcQAZiXCvDV6kbWdIRijMdWPuhmktnQaNVd";

        switch (genre2) {
            case "क्लासिक": genre2 = "Classic";
                break;
            case "डिस्को": genre2 = "Disco";
                break;
            case "इलेक्ट्रोनिक": genre2 = "Electronic";
                break;
            case "बॉलीवुड": genre2 = "Bollywood";
                break;
            case "रेप": genre2 = "Rap";
                break;
            case "इलेक्ट्रॉनिक": genre2 = "Electronic";
                break;
            case "रॅप": genre2 = "Rap";
                break;
            default : break;
        }

        const baseURL = "https://api.happi.dev/v1/music?q=" + genre2 + "&limit=&apikey=" + apiKey + "&type=";

        return new Promise((resolve, reject) => {
            axios.get(baseURL)
                .then(res => {
                    resolve(res.data.result);
                })
                .catch(error => {
                    reject(error);
                })
        })
    }
}
