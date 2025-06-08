import { useContext } from "react";
import { loadingContext } from "../../contexts/LoadingContext";


type LoadingScreenProp = {
    children: React.ReactNode
    className: string
} 

export default function LoadingScreen({ children, className  = '' }: LoadingScreenProp) {
    const { isloading } = useContext(loadingContext)
    const style = isloading ? ' bg-gray opacity-20' : '';

    return (
        <div  className={` ${style} ${className}` }>
            {children}
        </div>
    )
}