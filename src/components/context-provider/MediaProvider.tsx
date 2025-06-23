import type { childrenType } from "../../types/general";
import  { mediaContext } from "../../contexts/MediaContext"
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaProvider({children} : childrenType){

    const params = useParams().spItem
    const [headerItem, setHeaderItem ] = useState(params? params : 'movie' );
    
    return(
        <mediaContext.Provider value={{headerItem, setHeaderItem }}>
            {children}
        </mediaContext.Provider>
    )
}