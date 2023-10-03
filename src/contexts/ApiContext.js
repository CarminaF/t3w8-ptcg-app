import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(null)

export default function ApiProvider({children}) {
    const [apiUrl, setApiUrl] = useState("https://dev.pokemontcg.io/");

    // useEffect(() => {
    //     setApiUrl("https://dev.pokemontcg.io/")
    // }, []);

    return(
        <ApiContext.Provider value={
            {
                apiUrl: apiUrl,
                setApi: setApiUrl
            }
        }>
            {children}
            
        </ApiContext.Provider>
    )
}