import React, { useEffect, useState, createContext, ReactNode } from 'react';

// Define the type for the theme context
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Create the theme context
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => {}
});

interface ThemeProviderProps {
    children: ReactNode;
}

const getInitialTheme = (): string => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPref = window.localStorage.getItem('color-theme');
        if (typeof storedPref === 'string') {
            return storedPref;
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
        if (userMedia.matches) {
            return 'dark';
        }
        return 'light';
    }
    return 'light';
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(getInitialTheme());

    const rawSetTheme = (rawTheme: string) => {
        const root = window.document.documentElement;
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);
        localStorage.setItem('color-theme', rawTheme);
    }

    useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
