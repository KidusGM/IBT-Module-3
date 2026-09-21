import {
    createContext,
    useContext,
    useState
} from "react";


const ThemeContext =
    createContext(null);


export function ThemeProvider({
    children
}) {

    const [theme, setTheme] =
        useState("light");


    const toggleTheme = () => {

        setTheme(
            (previousTheme) =>
                previousTheme === "light"
                    ? "dark"
                    : "light"
        );

    };


    const value = {

        theme,

        setTheme,

        toggleTheme

    };


    return (
        <ThemeContext.Provider
            value={value}
        >
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {

    const context =
        useContext(ThemeContext);


    if (context === null) {

        throw new Error(
            "useTheme must be used inside a ThemeProvider"
        );

    }


    return context;
}