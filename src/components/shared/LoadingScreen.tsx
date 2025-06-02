import { useContext } from "react";
import type { childrenType } from "../../types/general";
import { loadingContext } from "../../contexts/LoadingContext";


export default function LoadingScreen({ children }: childrenType) {
    const { isloading } = useContext(loadingContext)
    const style = isloading ? 'w-screen h-screen pointer-none bg-gray opacity-20' : '';

    return (
        <div className={`relative ${style} text-center`}>
            {isloading && <div className="absolute flex-center text-center top-60 left-0 right-0 dark:text-L-primary"> is loading...</div>}
            {children}
        </div>
    )
}