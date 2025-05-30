import { createContext, useState } from "react";
import type { childrenProps } from "../types/objects";

type loadingScreenContext = {
    isloading: boolean,
    setIsLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

const loadingScreenContext = createContext<loadingScreenContext>({
    isloading: false,
    setIsLoading: ()=>{}
})


 function LoadingScreenContext({ children }: childrenProps) {
    const [isloading, setIsLoading] = useState(false)

    return (
        <loadingScreenContext.Provider value={{isloading, setIsLoading}}>
            {children}
        </loadingScreenContext.Provider>
    )

}

export {LoadingScreenContext, loadingScreenContext}