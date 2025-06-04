import type { childrenType } from "../../types/general";
import  { timeRangeContext } from "../../contexts/TimeRangeContext"
import { useState } from "react";
import { useParams } from "react-router-dom";


export default function TimeRangeProvider({children} : childrenType){
    const param = useParams()
    const range = param.range || "day"; 
    const [headerRange, setHeaderRange ] = useState(range);
    return(
        <timeRangeContext.Provider value={{headerRange, setHeaderRange }}>
            {children}
        </timeRangeContext.Provider>
    )
}