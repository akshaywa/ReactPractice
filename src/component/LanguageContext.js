import React, { createContext } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = React.useState("English");
    const changeLanguage = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    )
}