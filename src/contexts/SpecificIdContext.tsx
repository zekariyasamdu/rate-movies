import { createContext } from "react";


type specificIdContextType = {
    id: number
    setId: React.Dispatch<React.SetStateAction<number>>
}


export const specificIdContext = createContext<specificIdContextType>({
    id: 2,
    setId: () => {}
});