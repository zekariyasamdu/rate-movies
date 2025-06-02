import { useState } from "react"
import  { pageContext } from "../../contexts/PageContext"
import type { childrenType } from "../../types/general"

export function PageProvider({children}: childrenType ){
    const [pageNumber, setPageNumber] = useState(1)

    return(
        <pageContext.Provider value={{pageNumber, setPageNumber}}>
            {children}
        </pageContext.Provider>
    )

}
