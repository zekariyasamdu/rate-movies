import { createContext } from "react";



type pageContextType = {
    pageNumber: number,
    setPageNumber: React.Dispatch<React.SetStateAction<number>>
}

export const pageContext = createContext<pageContextType>({
    pageNumber: 1,
    setPageNumber: ()=>{}
})
