import { useState } from "react"
import  { pageContext } from "../../contexts/PageContext"
import type { childrenType } from "../../types/general"
import { useParams } from "react-router-dom"

export function PageProvider({children}: childrenType ){
    const params: number = Number(useParams().page) || 1;
    const [pageNumber, setPageNumber] = useState(params)

    return(
        <pageContext.Provider value={{pageNumber, setPageNumber}}>
            {children}
        </pageContext.Provider>
    )

}
