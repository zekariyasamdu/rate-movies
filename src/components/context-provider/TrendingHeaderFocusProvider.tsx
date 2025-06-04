import type { childrenType } from "../../types/general";
import  { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext"
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function TrendingHeaderFocusProvider({children} : childrenType){
    const initialStateValue : string = useParams().spItem || 'movie';
    const [headerItem, setHeaderItem ] = useState(initialStateValue);
    
    return(
        <trendingHeaderFocusContext.Provider value={{headerItem, setHeaderItem }}>
            {children}
        </trendingHeaderFocusContext.Provider>
    )
}