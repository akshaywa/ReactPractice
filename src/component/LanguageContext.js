import React, { createContext } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = React.useState("English");
    const [navigationList, setNavigationList] = React.useState(["Music", "Movies", "Sports"]);
    const [musicList, setMusicList] = React.useState(["Classic", "Disco", "Bollywood", "Electronic", "Rap"]);
    const [sportsList, setSportsList] = React.useState(["Cricket", "Football", "Wimbledon", "Olympics", "IPL"]);
    const [moviesList, setMoviesList] = React.useState(["Drama", "Romance", "Action", "Adventure", "Biopic"]);
    

    const changeLanguage = (e) => {
        setLanguage(e.target.value);

        switch (e.target.value) {
            case "English": setNavigationList(["Music", "Movies", "Sports"]);
            setMusicList(["Classic", "Disco", "Bollywood", "Electronic", "Rap"]);    
            setSportsList(["Cricket", "Football", "Wimbledon", "Olympics", "IPL"]);
            setMoviesList(["Drama", "Romance", "Action", "Adventure", "Biopic"]);
            break;
            case "Hindi": setNavigationList(["संगीत", "चलचित्र", "खेल"]);
            setMusicList(["क्लासिक", "डिस्को", "बॉलीवुड", "इलेक्ट्रोनिक", "रेप"]);    
            setSportsList(["क्रिकेट", "फुटबॉल", "विंबलडन", 'ओलंपिक',"आयपीएल"]);
            setMoviesList(["नाटक", "रोमांस", "ऐकशन", "साहसिक", "बायोपिक"]);
            break;
            case "Marathi": setNavigationList(["संगीत", "चित्रपट", "खेळ"]);
            setMusicList(["क्लासिक", "डिस्को", "बॉलीवुड", "इलेक्ट्रॉनिक", "रॅप"]);    
            setSportsList(["क्रिकेट", "फुटबॉल", "विम्बल्डन", "ऑलिंपिक्स", "आयपीएल"]);
            setMoviesList(["नाटक", "रोमांस", "ऐकशन", "साहसिक", "बायोपिक"]);
            break;
            default: setNavigationList(["Music", "Movies", "Sports"]);
            setMusicList(["Classic", "Disco", "Bollywood", "Electronic", "Rap"]);    
            setSportsList(["Cricket", "Football", "Wimbledon", "Olympics", "IPL"]);
            setMoviesList(["Drama", "Romance", "Action", "Adventure", "Biopic"]);
            break;
        }
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, navigationList, musicList, sportsList, moviesList }}>
            {props.children}
        </LanguageContext.Provider>
    )
}