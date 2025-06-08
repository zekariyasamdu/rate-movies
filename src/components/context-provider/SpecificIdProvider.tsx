import { useState } from "react";
import { specificIdContext } from "../../contexts/SpecificIdContext";
import type { childrenType } from "../../types/general";
import { useParams } from "react-router-dom";



export default function SpecificIdProvider({ children }: childrenType) {
    const params: number = Number(useParams().filmId) || 1;
    const [id, setId] = useState(params);

    
    return (
        <specificIdContext.Provider value={{ id, setId }}>
            {children}
        </specificIdContext.Provider>
    )
}