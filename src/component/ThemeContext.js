import React, { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}