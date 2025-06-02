import type { childrenType } from "../../types/general";
import  { siderBarFoucsContext } from "../../contexts/SideBarFocusContext"
import { useState } from "react";

export default function SideBarFocusProvider({children} : childrenType){

    const [menuItem , setMenuItems] = useState('home');
    return(
        <siderBarFoucsContext.Provider value={{menuItem, setMenuItems}}>
            {children}
        </siderBarFoucsContext.Provider>
    )

}