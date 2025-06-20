import type { childrenType } from "../../types/general";
import  { mediaContext } from "../../contexts/MediaContext"
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MediaProvider({children} : childrenType){
    
    const loaction = useLocation();
    const pathName = loaction.pathname;
    const pathSegment = pathName.split('/')
    
    const [headerItem, setHeaderItem ] = useState(pathSegment[2]? pathSegment[2] : 'movies' );
    
    return(
        <mediaContext.Provider value={{headerItem, setHeaderItem }}>
            {children}
        </mediaContext.Provider>
    )
}