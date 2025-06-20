import { useState } from "react"
import type { childrenType } from "../../types/general"
import { useParams } from "react-router-dom"
import { queryContext } from "../../contexts/QueryContext";

export function QueryProvider({children}: childrenType ){

    const params: string = useParams().query || 'trending';
    const [query, setQuery] = useState(params)

    return(
        <queryContext.Provider value={{query, setQuery}}>
            {children}
        </queryContext.Provider>
    )

}
