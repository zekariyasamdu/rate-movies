import { useState } from "react"
import { loadingContext } from "../../contexts/LoadingContext"
import type { childrenType } from "../../types/general"



export function LoadingProvider({ children }: childrenType) {
    const [isloading, setIsLoading] = useState(false)

    return (
        <loadingContext.Provider value={{isloading, setIsLoading}}>
            {children}
        </loadingContext.Provider>
    )

}

