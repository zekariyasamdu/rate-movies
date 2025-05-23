import { createContext, useState } from "react";
import type { childrenProps } from "../types/types";


type contentUpdatedContextType = {
    newDataFetched: number,
    setDataFetched: React.Dispatch<React.SetStateAction<number>>
}

const contentUpdatedContext = createContext<contentUpdatedContextType>({
        newDataFetched: 1,
        setDataFetched: () =>{}
    })

function ContentUpdatedContext({ children }: childrenProps) {

    const [newDataFetched, setDataFetched] = useState(1)
    

    return (
        <contentUpdatedContext.Provider value={{ newDataFetched, setDataFetched }}>
            {children}
        </contentUpdatedContext.Provider>
    )
}

export {ContentUpdatedContext, contentUpdatedContext}