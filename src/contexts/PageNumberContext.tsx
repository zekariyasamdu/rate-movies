import { createContext, useState, } from "react";
import type { childrenProps } from "../types/general";



type pageNumberContextType = {
    pageNumber: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}



const pageNumberContext = createContext<pageNumberContextType>({
    pageNumber: 1,
    setPageNumber: ()=>{}
})

function PageNumberContext({children}: childrenProps ){
    let [pageNumber, setPageNumber] = useState(1)

    return(
        <pageNumberContext.Provider value={{pageNumber, setPageNumber}}>
            {children}
        </pageNumberContext.Provider>
    )

}

export  {PageNumberContext, pageNumberContext}