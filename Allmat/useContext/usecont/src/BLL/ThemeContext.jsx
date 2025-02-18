import React, {createContext, useContext, useState} from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialState: "light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark": "light");
    };

    return <ThemeContext.Provider value={(theme, toggleTheme)} >{children}</ThemeContext.Provider>
}