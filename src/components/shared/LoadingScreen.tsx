// types
import { useContext } from "react";
import type { childrenProps } from "../../types/general";
import { loadingScreenContext } from "../../contexts/LoadingScreenContext";


export default function LoadingScreen({ children }: childrenProps) {
    const { isloading, setIsLoading } = useContext(loadingScreenContext)
    const style = isloading ? 'w-screen h-screen pointer-none bg-gray opacity-20' : '';

    return (
        <div className={`relative ${style} text-center`}>
            {isloading && <div className="absolute flex-center text-center top-60 left-0 right-0 dark:text-L-primary"> is loading...</div>}
            {children}
        </div>
    )
}