import {createContext, useContext} from "react"

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider // ham ese pahle project me alag page pe prover ka use karke the provide ke kliye but yeha pe ik hi jagah kar liya use

export function useTheme(){
    return useContext(ThemeContext);
}

