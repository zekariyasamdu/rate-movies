import { useState } from "react"
import { navBarContext } from "../../contexts/NavBarContext"
import type { childrenType } from "../../types/general"
import { useLocation } from "react-router-dom"

export function NavBarProvider({ children }: childrenType) {
    const loaction = useLocation();
    const pathName = loaction.pathname;
    const pathSegment = pathName.split('/')
    const [bar, setBar] = useState(pathSegment[1])
    return (
        <navBarContext.Provider value={{ bar, setBar }}>
            {children}
        </navBarContext.Provider>
    )

}
