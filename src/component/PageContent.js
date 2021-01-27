import React, { useContext } from "react";
import { ThemeContext } from './ThemeContext.js';

export default function PageContent(props) {
    const { isDarkMode } = useContext(ThemeContext);
    const styles = {
        backgroundColor: isDarkMode ? "#0a0a0a" : "white",
        height: "100vh",
        width: "98vw",
        overflow: "auto",
        paddingLeft: '1%',
        paddingRight: '1%',
    }

    return (
        <div style={styles}>{props.children}</div>
    )
}