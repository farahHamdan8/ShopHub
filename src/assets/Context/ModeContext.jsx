import { createContext, useState } from "react";
import { Children } from "react";
export const ModeContext = createContext(null);


export function ModeProvider({ children }) {
    const [mode, setMode] = useState("signup");

    function swap(m) {
        setMode(m);
    }
    return (
        <ModeContext.Provider value={{ mode, swap }}>{children}</ModeContext.Provider>
    )

}