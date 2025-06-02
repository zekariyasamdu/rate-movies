import type { childrenType } from "../../types/general";
import  { trendingHeaderFocusContext } from "../../contexts/TrendingHeaderFocusContext"
import { useState } from "react";


export default function TrendingHeaderFocusProvider({children} : childrenType){
    const [headerItem, setHeaderItem ] = useState('day');
    
    return(
        <trendingHeaderFocusContext.Provider value={{headerItem, setHeaderItem }}>
            {children}
        </trendingHeaderFocusContext.Provider>
    )
}