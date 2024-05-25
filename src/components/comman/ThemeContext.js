import React, { createContext, useContext, useEffect, useState} from 'react';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        const toggleTheme = () => {
            import(`../../${theme}.scss`).then(() => {
                document.body.className = theme;
            });
        };
        toggleTheme()
    },[theme]);

    const updateTheme = (newTheme) =>  {
        setTheme(newTheme)
    };

    return (
        <ThemeContext.Provider value={{ updateTheme,  theme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
