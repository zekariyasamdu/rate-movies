import { createContext } from "react";

type loadingContext = {
    isloading: boolean,
    setIsLoading:  React.Dispatch<React.SetStateAction<boolean>>
}

export const loadingContext = createContext<loadingContext>({
    isloading: false,
    setIsLoading: ()=>{}
})

