import { useLocation } from "react-router-dom";

export function useCheckLocation(path: string) : boolean{
    const location = useLocation()
    const answer: boolean =location.pathname.startsWith(`/${path}`)
    return answer;
}