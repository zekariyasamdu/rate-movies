import type { childrenType } from "../../types/general";
import  { timeRangeContext } from "../../contexts/TimeRangeContext"
import { useState } from "react";


export default function TimeRangeProvider({children} : childrenType){
    const [headerRange, setHeaderRange ] = useState('day');
    return(
        <timeRangeContext.Provider value={{headerRange, setHeaderRange }}>
            {children}
        </timeRangeContext.Provider>
    )
}